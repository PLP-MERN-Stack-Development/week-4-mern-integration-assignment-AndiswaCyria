import { useEffect, useState } from 'react';
import { postService } from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <Link
        to="/create"
        className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create New Post
      </Link>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p>
            <Link
              to={`/posts/${post._id}`}
              className="text-blue-600 hover:underline"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
