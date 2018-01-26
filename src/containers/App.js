import React, { Component } from 'react';
import '../styles/App.css';
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import NewsArticles from "../components/NewsArticles";
import axios from 'axios';
import {BounceLoader} from "react-spinners";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      isLoading: true
    };
  }

  toggleLoading = () =>
    this.setState({
      ...this.state,
      isLoading: !this.state.isLoading
    });

  componentWillMount() {
    this.fetchData();
  }

  fetchData = (category = 'general') => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_KEY}`)
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: !this.state.isLoading
        })
      })
      .catch(error => {
        console.log(error)
      })
  };

  performSearch = (query = 'Uganda') => {
    axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${process.env.REACT_APP_KEY}`)
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: !this.state.isLoading
        })
      })
      .catch(error => {
        console.log(error)
      })
  };

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="row">
          <NavigationDrawer fetchData={this.fetchData} toggleLoading={this.toggleLoading}/>
          {
            this.state.isLoading
              ?
              <div className="loader row align-items-center">
                <div className="col">
                  <BounceLoader
                    color={'#00BFFF'}
                    size={90}
                  />
                </div>
              </div>
              :
              <NewsArticles
                data={this.state.data}
                onSearch={this.performSearch}
                toggleLoading={this.toggleLoading}
              />
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
