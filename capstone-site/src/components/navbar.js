import React, { Component } from 'react';
import {NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Navbar } from 'reactstrap';
import {NavLink} from 'react-router-dom';


// This is the navigation bar component containing links that can reroute the page
class NavigationBar extends Component {
    constructor (props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() {
      let test = null;
      if (this.props.userState != null) {
          test = "Welcome " + this.props.userState.displayName;
      }
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand><h1>CITY<br />CULTURE<br />CONNECT</h1>{test}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/" className="text-white">Home</NavLink>
                            </NavItem>
                            <span className="non-mobile">|</span>
                            <NavItem>
                                <NavLink to="/search" className="text-white">Search</NavLink>
                            </NavItem>
                            <span className="non-mobile">|</span>
                            <NavItem>
                                <NavLink to="/results" className="text-white">Results</NavLink>
                            </NavItem>
                            <span className="non-mobile">|</span>
                            <NavItem>
                                <NavLink to="/visited" className="text-white">Visited Places</NavLink>
                            </NavItem>
                            <span className="non-mobile">|</span>
                            <NavItem>
                                <NavLink to="/map" className="text-white">Map</NavLink>
                            </NavItem>
                            <span className="non-mobile">|</span>
                            <NavItem>
                                <NavLink to="/directions" className="text-white">Directions</NavLink>
                            </NavItem>
                            <span className="non-mobile">|</span>
                            <NavItem>
                                <NavLink to="/about" className="text-white">About</NavLink>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
            
        </div>
    );
  }
}

export default NavigationBar;