import React, { useEffect, useState } from "react";

import { Image } from "./components/images";
import NavBar from "./components/NavBar";
import image1 from "./images/tea.jpeg";
import image2 from "./images/obelisk.jpeg";

const hello = `Hello!
I'm Cameron`

const intro = (
  `I'm a Software Engineer based out of Seattle, Washington. I created 
  this website to give those interested a look into the sorts of things
  I've been up to, and things that interest me. For the last few years 
  thats been cooking, climbing and coding. `
  )
  // I've also been working at a Champagne shop.`

const mainText = <div id="main-text">{hello}</div>;
const introduction = <p id="home-introduction">{intro}</p>;

class Hobbies extends React.Component {
  render() {
    return (
      <div>
        <img alt='hah' width={768/3} height="auto" src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"></img>
        <img alt='hah' width={768/3} height="auto"  src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg"></img>
        <img alt='hah' width={768/3}  height="auto" src="https://upload.wikimedia.org/wikipedia/commons/3/38/M_Rainier.jpg"></img>
      </div>
    )
  }
}
  

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
      <main>
        <section id="bio">
          <img id="home-picture" src={randomImage} alt="homepic"></img>
          {mainText}
        </section>
        <div>{introduction}</div>
        {/* <Hobbies /> */}
      </main>
    </div>
  );
};

export default Home;
