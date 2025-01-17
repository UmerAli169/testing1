'use client';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getBlog1, listComments } from '../../../graphql/queries';
import { createComment } from '../../../graphql/mutations';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { useSearchParams } from 'next/navigation';

const CardDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Assuming you are getting 'id' from the query string

  const [card, setCard] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentCount, setCommentCount] = useState(3); // Show only 3 comments initially

  // Fetch card details and comments on component mount
  const fetchComments = async (blogId: string | null) => {
    console.log(blogId, 'id');
    try {
      const client = generateClient();
      const commentsData = await client.graphql({
        query: listComments, // Use your listComments query here
        variables: { filter: { blogId: { eq: blogId } } }
      });
      console.log(commentsData, 'commentsData');
      setComments(commentsData.data.listComments.items);
    } catch (err) {
      setError('Error fetching comments.');
      console.error('Error fetching comments:', err);
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchCardDetails = async () => {
      try {
        const client = generateClient();
        const response = await client.graphql({
          query: getBlog1,
          variables: { id },
        });

        const fetchedCard = response?.data?.getBlog1;
        setCard(fetchedCard);

        // Fetch the comments directly from the fetched card
        await fetchComments(id);

      } catch (err) {
        console.error('Error fetching card details:', err);
        setError('Failed to load card details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [id]); // This ensures the effect runs when `id` changes or on mount

  const handleAddComment = async () => {
    if (!comment.trim()) return;

    try {
      const client = generateClient();
      const response = await client.graphql({
        query: createComment,
        variables: {
          input: {
            content: comment,
            blogId: id,
          },
        },
      });
      console.log(response, 'responsecomments');

      const newComment = response?.data?.createComment;

      // Append the new comment to the current list of comments
      setComments((prev) => [...prev, newComment]);
      setComment(''); // Clear the input field after submitting

      // After adding the comment, refetch the comments to make sure the state is in sync with the DB
      await fetchComments(id);

    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!card) return <p className="text-center text-gray-500">Card not found.</p>;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image at the top */}
        {card.imageKey && (
          <StorageImage imgKey={card.imageKey} alt={card.name} className="w-full h-48 object-cover rounded-t-lg" />
        )}

        {/* Card Details Section */}
        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">{card.name}</h1>
          <p className="text-lg text-gray-700">{card.description}</p>
          <p className="text-sm text-gray-600">Category: {card.category}</p>
        </div>

        {/* Comments Section */}
        <div className="px-4 pb-4">
          <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
          <div className="space-y-4 mt-4 max-h-36 overflow-y-auto"> {/* Max height for comments */}
            {comments.length > 0 ? (
              comments.slice(0, commentCount).map((comment) => (
                <div key={comment.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <p className="text-gray-800">{comment.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>

          {/* Show More Comments Button */}
          {comments.length > commentCount && (
            <button
              onClick={() => setCommentCount(commentCount + 3)}
              className="mt-4 w-full text-blue-500 hover:text-blue-600 transition duration-200"
            >
              Show more comments
            </button>
          )}

          {/* Add Comment Section */}
          <div className="mt-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-3 border rounded-lg text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddComment}
              className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
