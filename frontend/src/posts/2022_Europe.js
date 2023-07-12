import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import NavBar from '../NavBar';

const EleanoreSlideshow = () => {
    const images = [
        "https://media.cameronwallace.net/2022_Europe/image69.jpg",
        "https://media.cameronwallace.net/2022_Europe/image2.jpg",
        "https://media.cameronwallace.net/2022_Europe/image53.jpg",
        "https://media.cameronwallace.net/2022_Europe/image37.jpg",
        "https://media.cameronwallace.net/2022_Europe/image8.jpg",
        "https://media.cameronwallace.net/2022_Europe/image5.jpg",
    ]

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

const Blog = () => {
    return (
        <>
            <p>
                The first stop on our trip, we took the train from London Heathrow to the city and bussed to our hotel on the North West side of town. We arrived in the evening and were greeted by port and holiday pies.
            </p>
            <img source="https://media.cameronwallace.net/2022_Europe/image56.jpg" alt="Header"></img>
            <p>
                We stayed at the Number 38 Clifton, a boutique bed and breakfast residing in an older Georgian townhouse with great views of the city. Our first and only full day was spent exploring the nearby area.
            <br />
                We took a walk through the Clifton Downs to the Clifton Observatory, where we spotted a familiar face, and then down the hill to cross the Clifton Suspension Bridge
            </p>
            <img source="https://media.cameronwallace.net/2022_Europe/image19.jpg" alt="Miranda and our morning views of Bristol"></img>
            <img source="https://media.cameronwallace.net/2022_Europe/image63.jpg" alt="A fellow who kept trying to convince me the moon was made of cheese..."></img>
            <img source="https://media.cameronwallace.net/2022_Europe/000052570004.jpg" alt="Bristol Bridge"></img>
            <img source="https://media.cameronwallace.net/2022_Europe/000052570013.jpg" alt="Frozen river"></img>
        </>
    )
};

const EuropePost2022 = () => {
    return (
        <div>
            <NavBar />
            <div className="spacer" />
            <main>
                <Blog />
            </main>
        </div>
    )
};

export default EuropePost2022
