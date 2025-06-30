import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(id)
      .then(setPost)
      .catch(console.error);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Category: {post.category?.name || 'Uncategorized'}
      </p>
      <p>{post.content}</p>
    </div>
  );
}
