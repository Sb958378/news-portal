import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = ({ article }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="card-img-top"
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Article;


