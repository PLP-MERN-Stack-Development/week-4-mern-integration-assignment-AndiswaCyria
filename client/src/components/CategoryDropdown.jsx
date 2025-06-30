import { useEffect, useState } from 'react';
import { categoryService } from '../services/api';

export default function CategoryDropdown({ value, onChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getAllCategories()
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <select value={value} onChange={onChange} className="w-full p-2 border rounded" required>
      <option value="">Select a category</option>
      {categories.map((cat) => (
        <option key={cat._id} value={cat._id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}

