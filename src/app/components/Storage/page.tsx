"use client";
import React, { useState, useRef } from 'react';
import { uploadData, list } from 'aws-amplify/storage';
import { StorageImage } from '@aws-amplify/ui-react-storage';

const ImageUploadAndList = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref for the file input

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setUploadProgress(0);
    setUploadSuccess(false);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }

    const uniqueFileName = `public/uploads/${Date.now()}_${file.name}`;

    try {
      uploadData({
        path: uniqueFileName,
        data: file,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              const progress = Math.round((transferredBytes / totalBytes) * 100);
              setUploadProgress(progress);
            }
          },
        },
      });

      setUploadSuccess(true);
      setFile(null); // Reset the file state
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear the input field
      }
      fetchImages(); // Refresh the image list after upload
    } catch (uploadError) {
      console.error('Error uploading file:', uploadError);
      setError('Failed to upload file. Please try again.');
    }
  };

  const fetchImages = async () => {
    try {
      const response = await list({
        path: 'public/uploads',
        options: {
          listAll: true,
        },
      });

      const imageUrls = response.items.map((item: any) =>
        item.path.replace('public/', '')
      );
      setImages(imageUrls);
    } catch (fetchError) {
      console.error('Error fetching images:', fetchError);
      setError('Failed to fetch images. Please try again.');
    }
  };

  return (

    <>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Upload and List Images</h1>

      <input
        ref={fileInputRef} // Attach the ref here
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        onClick={handleUpload}
        disabled={!file}
        className={`w-full p-2 text-white rounded ${
          !file ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Upload
      </button>

      {uploadProgress > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">Upload Progress: {uploadProgress}%</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {uploadSuccess && <p className="mt-4 text-green-500">Upload successful!</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <button
        onClick={fetchImages}
        className="mt-6 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        View Uploaded Images
      </button>

      {images.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Uploaded Images:</h2>
          <div className="grid grid-cols-2 gap-4">
            {images.map((imagePath, index) => (
              <div key={index} className="border rounded shadow p-2">
                <StorageImage
                  className="w-full h-32 object-cover"
                  imgKey={imagePath}
                  accessLevel="public"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div></>
  );
};

export default ImageUploadAndList;
