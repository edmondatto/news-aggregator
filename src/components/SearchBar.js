import React, {Component} from 'react';

class SearchBar extends Component {
  render(){
    return(
      <form className="form-inline mt-2 mb-4" id="search-bar">
        <input
          type="text"
          className="form-control form-control-lg col-md-10 mb-2 mr-sm-2 mb-sm-0"
          id="inlineFormInput"
          placeholder="Search for stories or news sources..."
        />
        <button
          type="submit"
          className="btn btn-lg btn-primary">
          SEARCH
        </button>
      </form>
    );
  }
}

export default SearchBar;