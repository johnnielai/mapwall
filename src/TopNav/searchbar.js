import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

import './searchbar.css';

class Search extends Component {
  onPlacesChanged = () => {
    // const places = this.searchBox.getPlaces();
  }

  handleLocationChange = (e) => {
      if (e.key === 'Enter') {
          var loc = this.input.value;
          this.props.onSelectLocation(loc);
      }
  }
  
  render() {
    return (
        <div className="search-container">
            <StandaloneSearchBox
                ref={(ref) => this.searchbox = ref}
                onPlacesChanged={this.onPlacesChanged}
            >
                <input 
                    ref={(ref) => this.input = ref}
                    type="text"
                    placeholder="Search for a location"
                    className="search-bar"
                    onKeyPress={this.handleLocationChange}/>
            </StandaloneSearchBox>
        </div>
    );
  }
}

export default withScriptjs(Search);
