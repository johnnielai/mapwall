import React, { Component } from 'react';
import Particles from 'react-particles-js';
import TopNav from './TopNav/topnav.js';

import phone from './images/Phone.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <TopNav></TopNav>
        <div className="content">
          <div className="phone-select"></div>
          <div className="phone-overlay">
            <img src={phone}/>
          </div>
        </div>
        <Particles 
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#ffffff",
                  blur: 1
                }
              }
            }
          }}
          style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
          }}/>
      </div>
    );
  }
}

export default App;
