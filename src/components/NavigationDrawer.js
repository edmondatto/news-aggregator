import React from 'react';

const NavigationDrawer = () =>
  <aside className="col-md-3">
    <div className="container">
      <h3 id="aside-header">Choose a category</h3>
    </div>
    <nav className="nav flex-column">
      <a className="nav-link" href="#">General</a>
      <a className="nav-link" href="#">Business</a>
      <a className="nav-link" href="#">Entertainment</a>
      <a className="nav-link" href="#">Health</a>
      <a className="nav-link" href="#">Science</a>
      <a className="nav-link" href="#">Sports</a>
      <a className="nav-link" href="#">Technology</a>
    </nav>
  </aside>;

export default NavigationDrawer;
