// CommentsSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsSection = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://your-api-url/comments/${id}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      await axios.post(`http://your-api-url/comments/${id}`, { text: newComment });
      setComments([...comments, { text: newComment }]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-center mb-4 text-white">Comments/Feedback</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-[60vw] mx-auto mr-2 text-center  p-2 border-2 border-gray-300 rounded-lg md:mb-2 sm:mb-2"
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
