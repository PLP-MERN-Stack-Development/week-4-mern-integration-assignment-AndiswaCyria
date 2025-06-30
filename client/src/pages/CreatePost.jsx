import { useState } from 'react';
import { postService } from '../services/api';
import CategoryDropdown from '../components/CategoryDropdown';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createPost({
        title,
        content,
        category: categoryId,
      });
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to create post');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <CategoryDropdown value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
