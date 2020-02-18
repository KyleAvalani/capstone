import React, { Component } from 'react';


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
                                        <img className="pb-3" src="img/card-club-icon.png" alt="the club suit symbol" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Clubs</h2>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?</p>
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
                                        <img className="pb-3" src="img/card-diamond-icon.png" alt="the diamond suit symbol" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Diamonds</h2>
                                        <p className="card-text">Quam, officiis ut adipisci pariatur veniam labore ipsum optio tenetur!</p>
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
                                        <img className="pb-3" src="img/card-heart-icon.png" alt="the heart suit symbol" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Hearts</h2>
                                        <p className="card-text">Reiciendis doloremque voluptas veniam repellendus quisquam deleniti tenetur quia a.</p>
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
                                        <img className="pb-3" src="img/card-spade-icon.png" alt="the heart suit symbol" />
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Spades</h2>
                                        <p className="card-text">Maiores voluptate rem odit dolor temporibus asperiores maxime velit sapiente.</p>
                                        <a className="btn btn-dark" href="#" role="button">Play</a>                  </div>
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