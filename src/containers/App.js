import React, { Component } from 'react';
import '../styles/App.css';
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import NewsArticles from "../components/NewsArticles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="row">
          <NavigationDrawer />
          <NewsArticles />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
