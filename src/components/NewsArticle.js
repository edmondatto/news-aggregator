import React from 'react';
import mario from '../img/mario.jpeg'

const NewsArticle = () =>
  <div className="card card-outline-primary mb-3">
    <div className="card-block">
      <div className="row">
        <div className="col-md-3 text-right">
          <img src={mario} width="100%" height="auto"/>
        </div>
        <div className="col-md-9">
          <h4 className="article-title">
            US Tariffs, Aimed at China and South Korea, to Hit Targets Worldwide
          </h4>
          <p className="article-author">
            By Keith Bradsher and Sui-Lee Wee
          </p>
          <p className="article-body">
            Broad levies taking direct aim at the two countries would most likely
            affect other trading partners of the United States, illustrating the
            complexity of global commerce.
            <span><a href="#"> Read more...</a></span>
          </p>
          <span className="article-source"><strong>SOURCE:</strong> The New York Times</span>
        </div>
      </div>
    </div>
  </div>;

export default NewsArticle;