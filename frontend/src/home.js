import React, { useEffect, useState } from 'react';

import NavBar from "./NavBar"
import image1 from "./images/tea.jpeg"
import image2 from "./images/obelisk.jpeg"

const Home = function(props) {
    const [randomImage, setRandomImage] = useState('');

    const renderImage = () => {
        const images = [
            image1,
            image2,
        ];
        const randomImageIndex = Math.floor(Math.random() * images.length);
        return images[randomImageIndex];

    };

    useEffect(() => {
        setRandomImage(renderImage);
    }, []);

    return (
        <div>
            <NavBar />
            <div className="spacer"></div>
            <section id="bio">
                <img id="homepicture" src={randomImage} alt="homepic"></img>
                <p id="maintext">
                    I'm Cameron, a Software Engineer based out of Seattle, Washington. I like to cook, climb, and code.
                </p>
            </section>
        </div>
    )
}

export default Home
