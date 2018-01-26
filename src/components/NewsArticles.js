import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import NewsArticle from "./NewsArticle";

class NewsArticles extends Component {
  render(){
    const { articles } = this.props.data;
    const newsArticleComponents = articles.map((article, index) => (
      <NewsArticle
        {...article}
        key={index}
      />
    ));

    return(
      <div className="col-md-9">
        <div className="container" id="news-content">
          <SearchBar />
          {newsArticleComponents}
        </div>
      </div>
    );
  }
}

export default NewsArticles;