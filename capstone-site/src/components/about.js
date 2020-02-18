import React, { Component } from 'react';
import kyleimg from './img/Kyle.jpg';
import thoaimg from './img/Thoa.jpg';
import samimg from './img/Sam.jpg';
import maddiimg from './img/Maddi.jpg';


// This is the navigation bar component containing links that can reroute the page
class AboutPage extends Component {

    render() {
        return (

            <div className="container">

                <div className="row">

                    <div className="col col-md-6 col-xl-3 d-flex">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-auto">
                                        <img src={kyleimg} alt="Picture of Kyle Avalani" width="172" height="172"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Kyle Avalani</h2>
                                        <p className="card-text">Kyle has spent over two years working in the gaming industry developing VR games and has a passion for environmental activism. He loves gaming almost as much as he loves his cat, Copper.</p>
                                        <a className="btn btn-dark" href="#" role="button">Play</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-xl-3 d-flex">

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-auto">
                                        <img src= {samimg} alt="Picture of Sam Buxton" width="172" height="172" align="middle"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Sam Buxton</h2>
                                        <p className="card-text">As a former teacher and software developer, Sam hopes to use experiential learning to give young children an intuitive understanding of their environment and how it changes. He has a passion for education and the technical background to make the impossible possible.</p>
                                        <a className="btn btn-dark" href="#" role="button">Play</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-xl-3 d-flex">

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-auto">
                                        <img src={maddiimg} alt="Picture of Maddi Cummins" width="172" height="172"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Maddi Cummins</h2>
                                        <p className="card-text">Maddi has a passion for the environment and sustaining the ecosystem so it can continue to support the lives of all its inhabitants. Growing up gaming and with a strong background in coding, she is excited to apply what she knows to help kids help the world.</p>
                                        <a className="btn btn-dark" href="#" role="button">Play</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-xl-3 d-flex">

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-auto">
                                        <img src={thoaimg} alt="Picture of Thoa Nguyen" width="172" height="172"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Thoa Nguyen</h2>
                                        <p className="card-text">Thoa is passionate about leveraging technology for education and environmental sustainability. She is an active mentor for low-income students and advocates for improving classroom curriculums. </p>
                                        <a className="btn btn-dark" href="#" role="button">Play</a>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AboutPage;