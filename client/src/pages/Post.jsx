// src/pages/Post.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postService } from '../services/api';

export default function Post() {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    postService
      .getPost(id)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6">{post.content}</p>
      <p className="mb-4 text-sm italic">
        Category: {post.category?.name || 'Uncategorized'}
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        &larr; Back to all posts
      </Link>
    </div>
  );
}
