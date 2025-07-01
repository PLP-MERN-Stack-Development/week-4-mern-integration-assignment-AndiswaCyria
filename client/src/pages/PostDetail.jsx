import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching from backend
    const dummyPost = {
      id,
      title: "Sample Blog Post",
      category: "Development",
      content: "This is a sample blog post content. Real data will be loaded here once backend is connected.",
    };
    setPost(dummyPost);
  }, [id]);

  if (!post) return <p className="text-center mt-10">Loading post...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">Category: {post.category}</p>
      <div className="text-gray-700 leading-relaxed">{post.content}</div>
    </div>
  );
};

export default PostDetail;
