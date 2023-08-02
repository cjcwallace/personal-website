import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import image1 from "./images/tea.jpeg";
import image2 from "./images/obelisk.jpeg";

const mainText = <p id="main-text">Hey there, my name is Cameron.</p>;
const introduction = (
  <p id="home-introduction">
    My full name is Cameron Wallace. I'm a Software Engineer based out of
    Seattle, Washington. I created this website to give those interested a look
    into the sorts of things I've been up to, and things that interest me. For
    the last few years thats been cooking, climbing and coding. 
    {/* <br />
    <br /> */}
  </p>
);

const Home = function (props) {
  const [randomImage, setRandomImage] = useState("");

  const renderImage = () => {
    const images = [image1, image2];
    const randomImageIndex = Math.floor(Math.random() * images.length);
    return images[randomImageIndex];
  };

  useEffect(() => {
    setRandomImage(renderImage);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="spacer" />
      <section id="bio">
        <img id="home-picture" src={randomImage} alt="homepic"></img>
        {mainText}
      </section>
      <div>{introduction}</div>
    </div>
  );
};

export default Home;
