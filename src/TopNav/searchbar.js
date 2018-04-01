import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

import './searchbar.css';

class Search extends Component {
  render() {
    return (
        <div className="search-container">
            <StandaloneSearchBox>
                <input 
                    type="text"
                    placeholder="Search for a location"
                    className="search-bar"/>
            </StandaloneSearchBox>
        </div>
    );
  }
}

export default withScriptjs(Search);
