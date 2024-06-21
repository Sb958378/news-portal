import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/articleSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.articles.page);

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <button
        onClick={() => dispatch(setPage(page - 1))}
        disabled={page === 1}
        className="btn btn-dark me-2"
      >
        Previous
      </button>
      <span className="mx-3">Page {page}</span>
      <button
        onClick={() => dispatch(setPage(page + 1))}
        className="btn btn-dark"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;



