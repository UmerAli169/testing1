'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { generateClient } from 'aws-amplify/api';
import { listBlog1s } from '../../../graphql/queries';
import { createBlog1, deleteBlog1, updateBlog1 } from '../../../graphql/mutations';
import { useDropzone } from 'react-dropzone';
import { uploadData } from 'aws-amplify/storage'; 
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { fetchAuthSession } from '@aws-amplify/auth';

const CardUI = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageKey, setImageKey] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch authenticated user session
        const session = await fetchAuthSession();
        const userId1 = session?.userSub;
 
        if (!userId1) {
          console.error("User ID not found in session.");
          setError("Unable to fetch user details.");
          setLoading(false);
          return;
        }
  
        // Initialize client
        const client = generateClient();
  
        // Fetch blogs
        const blogs = await client.graphql({
          query: listBlog1s,
          variables: { filter: { userId
            : { eq: userId1 } } },
        });
  
        const items :any = blogs?.data?.listBlog1s?.items || [];
        setCardsData(items);
        setFilteredData(items);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);
  
const formik = useFormik({
  initialValues: {
    name: '',
    description: '',
    category: '',
    createdAt: '',
    imageKey: '',
  },
  validationSchema: Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
  }),
  onSubmit: async (values, { resetForm }) => {
          const session = await fetchAuthSession();

    try {
      const client = generateClient();

      // Add imageKey if it's set
      if (imageKey) {
        values.imageKey = imageKey;
      }

      let response;
      if (isEditing) {
        // Ensure editBlogId is set
        if (!editBlogId) {
          throw new Error('Edit blog ID is missing.');
        }

        
        response = await client.graphql({
          query: updateBlog1,
          variables: {
            input: {
              id: editBlogId,
              ...values,
            },
          },
        });

        const updatedBlog = response?.data?.updateBlog1;

        // Update state with the updated blog
        setCardsData((prev:any) =>
          prev.map((blog:any) => (blog.id === editBlogId ? updatedBlog : blog))
        );
        setFilteredData((prev:any) =>
          prev.map((blog:any) => (blog.id === editBlogId ? updatedBlog : blog))
        );
        setAlertMessage('Blog updated successfully!');
      } else {
        const blogInput = {
          ...values,
          userId: session.userSub
        };
        response = await client.graphql({
          query: createBlog1,
          variables: { input: blogInput },
        });
        const newBlog = response?.data?.createBlog1;

        // Update state with the new blog
        setCardsData((prev):any => [...prev, newBlog]);
        setFilteredData((prev):any => [...prev, newBlog]);
        setAlertMessage('Blog created successfully!');
      }

      setAlertType('success');
      resetForm();
      setImageKey(null);
      setEditBlogId(null);
      setModalVisible(false);
    } catch (err) {
      console.error('Error submitting blog:', err);
      setAlertMessage('Failed to submit blog.');
      setAlertType('error');
    }

    // Clear alert message after 2 seconds
    setTimeout(() => setAlertMessage(''), 2000);
  },
});
;

  const handleDelete = async (id: any) => {
    try {
      const client = generateClient();
      await client.graphql({
        query: deleteBlog1,
        variables: { input: { id } },
      });
      setCardsData((prev) => prev.filter((card:any) => card.id !== id));
      setFilteredData((prev) => prev.filter((card:any) => card.id !== id));
      setAlertMessage('Blog deleted successfully!');
      setAlertType('success');
    } catch (err) {
      console.error('Error deleting blog:', err);
      setAlertMessage('Failed to delete blog.');
      setAlertType('error');
    }
    setTimeout(() => setAlertMessage(''), 2000);
  };

  const handleEdit = (card:any) => {
    setIsEditing(true);
    setEditBlogId(card.id);
    formik.setValues({
      name: card.name,
      description: card.description,
      category: card.category,
      imageKey: card.imageKey,
      createdAt: card.createdAt || '', 
    });
    
    setImageKey(card.imageKey);
    setModalVisible(true);
  };

  const handleFilter = () => {
    if (categoryFilter.trim() === '') {
      setFilteredData(cardsData);
    } else {
      const filtered = cardsData.filter((card:any) =>
        card.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles:any) => setFile(acceptedFiles[0]),
    accept: 'image/*',
  });

  const handleImageUpload = async () => {
    if (file) {
      const uniqueFileName:any = `${Date.now()}_${file?.name}`;
      try {
        uploadData({
          key: uniqueFileName,
          data: file,
          options: {
            accessLevel: 'guest',
            onProgress: (progress:any) => {
              const progressPercent = Math.round((progress?.loaded / progress.total) * 100);
              setUploadProgress(progressPercent);
            },
          },
        });
        setUploadProgress(0);
        setAlertMessage('Image uploaded successfully!');
        setAlertType('success');
        setImageKey(uniqueFileName);
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploadProgress(0);
        setAlertMessage('Image upload failed.');
        setAlertType('error');
      }
    } else {
      setAlertMessage('No file selected!');
      setAlertType('error');
    }
    setTimeout(() => setAlertMessage(''), 2000);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      {alertMessage && (
        <div className={`${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-4 rounded mb-4`}>
          {alertMessage}
        </div>
      )}

      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search by category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button onClick={handleFilter} className="bg-blue-500 text-white py-2 px-4 rounded">
          Filter
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Blog Cards</h1>
        <button
          onClick={() => {
            setIsEditing(false);
            formik.resetForm();
            setModalVisible(true);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add New Blog
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((card: any) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-4">
            {card.imageKey && (
              <StorageImage
                imgKey={card.imageKey}
                alt={card.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <h2 className="text-xl font-bold mb-2">{card.name}</h2>
            <p className="text-gray-700 mb-2">{card.description}</p>
            <p className="text-sm text-gray-600 mb-4">Category: {card.category}</p>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(card)} className="bg-yellow-500 text-white py-2 px-4 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(card.id)} className="bg-red-500 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && <p>No blogs found for the given filter.</p>}
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">{isEditing ? 'Edit Blog' : 'Add New Blog'}</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full p-2 border rounded"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  className="w-full p-2 border rounded"
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm">{formik.errors.description}</p>
                )}
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className="w-full p-2 border rounded"
                />
                {formik.touched.category && formik.errors.category && (
                  <p className="text-red-500 text-sm">{formik.errors.category}</p>
                )}
              </div>
              <div {...getRootProps()} className="border-2 border-dashed p-4 text-center">
                <input {...getInputProps()} />
                <p>Drag & Drop an Image or Click to Select</p>
              </div>
              {file && <p className="mt-2">Selected File: {file?.name}</p>}
              {uploadProgress > 0 && <p className="mt-2">Upload Progress: {uploadProgress}%</p>}
              
              <button
               onClick={handleImageUpload}
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                {isEditing ? 'Update Blog' : 'Add Blog'}
              </button>
            </form>
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardUI;
