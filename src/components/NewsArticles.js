import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import NewsArticle from "./NewsArticle";
import PropTypes from 'prop-types';

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
          <SearchBar onSearch={this.props.onSearch}  toggleLoading={this.props.toggleLoading}/>
          {
            newsArticleComponents.length > 0
              ?
              <div>
                {newsArticleComponents}
              </div>
              :
              <h3 id="no-results">Oops...no results to show. Try a different search term.</h3>
          }
        </div>
      </div>
    );
  }
}

NewsArticles.propTypes = {
  onSearch: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired
};

export default NewsArticles;