import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: ''
    }
  }

  handleChange = event =>
    this.setState({
      searchString: event.target.value
    });

  handleSearch = event => {
    if (this.state.searchString.trim() === ''){
      event.preventDefault();
      return null;
    }else {
      this.props.onSearch(this.state.searchString);
      this.props.toggleLoading();
    }
  };

  render(){
    return(
      <form className="form-inline mt-2 mb-4" id="search-bar" onSubmit={this.handleSearch}>
        <input
          type="text"
          className="form-control form-control-lg col-md-10 mb-2 mr-sm-2 mb-sm-0"
          id="inlineFormInput"
          placeholder="Search for stories or news sources..."
          onChange={this.handleChange}
          value={this.state.searchString}
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