import React from 'react';
import SearchBar from "./SearchBar";
import NewsArticle from "./NewsArticle";

const NewsArticles = () =>
  <div className="col-md-9">
    <div className="container" id="news-content">
      <SearchBar />
      <NewsArticle />
    </div>
  </div>;

export default NewsArticles;