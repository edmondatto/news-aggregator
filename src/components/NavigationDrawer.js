import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationDrawer extends Component {

  handleClick= event => {
    this.props.fetchData(event.target.name);
    this.props.toggleLoading();
  };
  render(){
    return(
      <aside className="col-md-3">
        <div className="container">
          <h3 id="aside-header">Choose a category</h3>
        </div>
        <nav className="nav flex-column">
          <a
            className="nav-link"
            name="general"
            href="#"
            onClick={this.handleClick}>
            General
          </a>
          <a
            className="nav-link"
            href="#"
            name="business"
            onClick={this.handleClick}>
            Business
          </a>
          <a
            className="nav-link"
            href="#"
            name="entertainment"
            onClick={this.handleClick}>
            Entertainment
          </a>
          <a
            className="nav-link"
            href="#"
            name="health"
            onClick={this.handleClick}>
            Health
          </a>
          <a
            className="nav-link"
            href="#"
            name="science"
            onClick={this.handleClick}
          >
            Science
          </a>
          <a
            className="nav-link"
            href="#"
            name="sports"
            onClick={this.handleClick}
          >
            Sports
          </a>
          <a
            className="nav-link"
            href="#"
            name="technology"
            onClick={this.handleClick}
          >
            Technology
          </a>
        </nav>
      </aside>
    );
  }
}

NavigationDrawer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
};

export default NavigationDrawer;
