import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, setCategory, setPage } from '../redux/articleSlice';
import Article from './Article';
import 'bootstrap/dist/css/bootstrap.min.css';


const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [dispatch, category, page]);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
    dispatch(setPage(1)); // Reset to first page on category change
  };

  return (
    <div className="container py-6">
      <div className="mb-4">
        <select 
          value={category} 
          onChange={handleCategoryChange} 
          className="form-select"
        >
          <option value="">All</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      {status === 'loading' && <p>Loading articles...</p>}
      {status === 'failed' && <p>{error}</p>}

      <div className="row">
        {articles.map((article) => (
          <div key={article.url} className="col-md-6 col-lg-4 mb-4">
            <Article article={article} />
          </div>
        ))}
      </div>

      {/* Uncomment the following line if you have a Pagination component */}
      {/* <Pagination /> */}
    </div>
  );
};

export default ArticleList;


