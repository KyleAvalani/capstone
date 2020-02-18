import React, { Component } from 'react'; //import React Component

// Component that represents the footer. Contains email and copyright information.
export class Footer extends Component {
    // Render function for the footer. Displays various email and copyright information.
    render() {
        return (
            <footer style={{position: "fixed", bottom: "0"}}>
                <p className="text-center align-text-bottom">
                This project is a part of the Capstone Project course at the University of Washington Information School
                </p>
            </footer>
        )
    }
}

export default Footer;