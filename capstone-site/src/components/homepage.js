import React, { Component } from 'react';
import groupimg from './img/group.jpg';



// This is the navigation bar component containing links that can reroute the page
class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>
                    EcoCraft
                </h1>

                <img src= {groupimg} alt="Picture of  our group at the minecraft exhibit in MoPop"/>


                <div className="card text-white bg-info mb-3">
                <div class="card-header">The Problem</div>
                    <div className="card-body">
                        <p className="card-text">With rapidly rising global temperatures, natural disasters displacing millions, and deforestation destroying the habitats of hundreds of millions of animals, there's no doubt that climate change is a massive issue today and will only continue to become more dangerous. We at Guardians of the Planet believe that one of the best ways we can work together to help combat climate change is by helping educate and inform the next generation so that they are better equipped to tackle this issue.</p>
                    </div>
                </div>

                <div className="card text-white bg-info mb-3">
                <div class="card-header">Our Solution</div>
                    <div className="card-body">
                        <p className="card-text">Our proposed solution is EcoCraft: a Minecraft mod to teach children about environmental sustainability and activism. This mod will be available standalone for adding on to base Minecraft and also coupled with a lesson plan we've designed with the help of science teachers to distribute through Minecraft Education. This offers children (and their teachers) a more structured, formal approach to the mod, while still tapping into the immense popularity of Minecraft and the incredibly fun nature of the game.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;