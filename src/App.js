import React, { Component } from 'react';
import Particles from 'react-particles-js';
import TopNav from './TopNav/topnav.js';

import phone from './images/Phone.png';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 35.2581236, lng: 98.71583131 }}
    defaultOptions={{ mapTypeControl: false, streetViewControl: false, fullscreenControl: false, mapTypeId: 'satellite' }}
  >
  </GoogleMap>
))


class App extends Component {
  render() {
    return (
      <div className="main">
        <TopNav></TopNav>
        <div className="content">
          <div className="phone-select">
            Phone: Mi Mix 2
          </div>
          <div className="phone-overlay">
            <img src={phone} alt="phone" />
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSdEMi70dUjomMOALgOmRak6cza6k1bh4&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '620px', width: '310px', margin: 'auto', padding: '20px 0'}} />}
              mapElement={<div style={{ height: '100%', borderRadius: '10px' }} />}
            />
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
          }} />
          <div className="map-footer">
            Map provided by Google
          </div>
      </div>
    );
  }
}

export default App;
