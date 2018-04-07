import React, { Component } from 'react';
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
  constructor() {
    super();
    this.state = {
      selectedLocation: ""
    };
  }

  setLocation = (loc) => {
    this.setState ({
      selectedLocation: loc
    });
  }

  render() {
    const location = this.state.selectedLocation;

    return (
      <div className="main">
        <TopNav selectedLocation={this.setLocation}></TopNav>
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
        <div className="map-footer">
          Map provided by Google
        </div>
      </div>
    );
  }
}

export default App;
