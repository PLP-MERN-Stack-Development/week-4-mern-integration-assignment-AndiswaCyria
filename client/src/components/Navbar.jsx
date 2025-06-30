import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white px-4 py-3 shadow flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">MERN Blog</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/create" className="text-blue-600 font-medium hover:underline">Create Post</Link>
      </div>
    </nav>
  );
}
