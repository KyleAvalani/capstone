import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';


// This is the navigation bar component containing links that can reroute the page
class NavigationBar extends Component {

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home">EcoCraft</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/features">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About Us</a>                    
                </li>               
                </ul>
            </div>
        </nav>
    );
  }
}

export default NavigationBar;