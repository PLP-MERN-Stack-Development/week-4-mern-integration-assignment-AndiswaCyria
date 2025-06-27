import { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/posts')
      .then((res) => setPosts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length ? (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id} className="border p-4 rounded bg-white shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/posts/${post._id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
