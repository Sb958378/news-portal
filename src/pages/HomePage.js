import React from 'react';
import Navbars from '../components/Navbars';
import CategoryFilter from '../components/CategoryFilter';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbars />
      <CategoryFilter />
      <ArticleList />
      <Pagination />
    </div>
  );
};

export default HomePage;



