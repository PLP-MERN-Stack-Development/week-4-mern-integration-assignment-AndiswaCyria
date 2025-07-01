import React from "react";
import { Link } from "react-router-dom";

const mockPosts = [
  {
    id: "1",
    title: "Welcome to the MERN Blog",
    category: "General",
    excerpt: "This is your first post! Let’s build something amazing together.",
  },
  {
    id: "2",
    title: "How to Use React Hooks",
    category: "React",
    excerpt: "Hooks make your components more powerful and readable. Here's how...",
  },
];

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Latest Posts</h1>
        <Link
          to="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create New Post
        </Link>
      </div>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <Link
            to={`/posts/${post.id}`}
            key={post.id}
            className="block p-6 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">Category: {post.category}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
