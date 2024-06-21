import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/articleSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = ['Business', 'Technology', 'Entertainment', 'Health', 'Science', 'Sports'];

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 p-4 bg-light rounded">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => dispatch(setCategory(category.toLowerCase()))}
          className="btn btn-dark"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;


