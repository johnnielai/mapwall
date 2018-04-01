import React, { Component } from 'react';
import Search from './searchbar.js'

import './topnav.css';

class TopNav extends Component {
  render() {
    return (
      <nav className="top-nav-container">
        <div className="navigation">
            <div className="nav-title">MapWall</div>
            <Search
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSdEMi70dUjomMOALgOmRak6cza6k1bh4&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
            />
        </div>
      </nav>
    );
  }
}

export default TopNav;
