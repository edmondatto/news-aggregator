import React from 'react';
import PropTypes from 'prop-types';

const NewsArticle = props =>
  <div className="card card-outline-primary mb-3">
    <div className="card-block">
      <div className="row">
        <div className="col-md-3 text-right">
          <img src={props.urlToImage} width="100%" height="auto"/>
        </div>
        <div className="col-md-9">
          <h4 className="article-title">
            { props.title }
          </h4>
          {
            props.author
              ?
              <p className="article-author">
                By { props.author }
              </p>
              :
              <React.Fragment/>
          }
          <p className="article-body">
            { props.description }
            <span><a href={ props.url } target="_blank"> Read more...</a></span>
          </p>
          <span className="article-source"><strong>SOURCE:</strong> {props.source.name} </span>
        </div>
      </div>
    </div>
  </div>;

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string

};

export default NewsArticle;