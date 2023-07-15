// import EleanoreSlideshow from '../EleanoreSlideshow';

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import NavBar from "../NavBar";
import React from "react";

const imgPrefix = "https://media.cameronwallace.net";

class EleanoreSlideshow extends React.Component {
  constructor() {
    super();
    this.images = [
      // 56.25 => 16:9 to 9:16
      {
        originalHeight: "546px",
        original: imgPrefix + "/2022_Europe/image69.jpg",
      },
      {
        originalHeight: "546px",
        original: imgPrefix + "/2022_Europe/image2.jpg",
      },
      {
        originalHeight: "100%",
        original: imgPrefix + "/2022_Europe/image53.jpg",
      },
      {
        originalHeight: "100%",
        original: imgPrefix + "/2022_Europe/image37.jpg",
      },
      {
        originalHeight: "546px",
        original: imgPrefix + "/2022_Europe/image8.jpg",
      },
      {
        originalHeight: "546px",
        original: imgPrefix + "/2022_Europe/image5.jpg",
      },
    ];
  }
  render() {
    return (
      <ImageGallery
        items={this.images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showIndex={true}
      />
    );
  }
}
class EdinburghCastleSlideshow extends React.Component {
  constructor() {
    super();
    this.images = [
      // 56.25 => 16:9 to 9:16
      {
        originalHeight: "546px",
        original: imgPrefix + "/2022_Europe/image25.jpg",
      },
      {
        originalHeight: "546px",
        original: imgPrefix + "/2022_Europe/image21.jpg",
      },
    ];
  }
  render() {
    return (
      <ImageGallery
        items={this.images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showIndex={true}
      />
    );
  }
}

const Blog = () => {
  return (
    <>
      <h1>Europe Winter 2022</h1>
      <img
        className="blog-header-photo"
        src={imgPrefix + "/2022_Europe/image56.jpg"}
        alt="Header"
      ></img>
      <h2>Bristol</h2>
      <p>
        The first stop on our trip, we took the train from London Heathrow to
        the city and bussed to our hotel on the North West side of town. We
        arrived in the evening and were greeted by port and holiday pies.
      </p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image39.jpg"}
        alt="Header"
      ></img>
      <p>
        We stayed at the Number 38 Clifton, a boutique bed and breakfast
        residing in an older Georgian townhouse with great views of the city.
        Our first and only full day was spent exploring the nearby area.We took
        a walk through the Clifton Downs to the Clifton Observatory, where we
        spotted a familiar face, and then down the hill to cross the Clifton
        Suspension Bridge
      </p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image19.jpg"}
        alt="Miranda and our morning views of Bristol"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image63.jpg"}
        alt="A fellow who kept trying to convince me the moon was made of cheese..."
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052570004.jpg"}
        alt="Bristol Bridge"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052570013.jpg"}
        alt="Frozen river"
      ></img>
      <br />
      <p>
        Getting to explore parts of Bristol was wonderful, but we had really
        come to town for a more specific reason -- football! Miranda’s
        grandfather was born in Bristol and so we figured we could nab two birds
        with one stone - I could get my footie fix in and Miranda could
        experience some of her geographic heritage. We bought tickets for
        Bristol City vs Stoke City and given that I bought the tickets some
        several months in advance and Bristol City is not one of the major
        clubs, we were able to secure some fairly decent seats.
      </p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580012.jpg"}
        alt="Ashton Gate Stadium"
      ></img>
      <p>
        While managing to pull ahead in the first half, the home team let their
        lead slip and the night ended 2-1 Stoke City. We still had a great time,
        seeing the sport at this level in person and - arguably more impressive
        - the dueling fanbases! There was a real sense of pride and tribalism
        surrounding each city's team that I haven’t seen on this side of the
        pond. After the game we strolled across the main river to find ourselves
        some cozy chairs and warm mulled wine before heading back to the hotel
        where on a balcony we spotted the partner in crime of a certain cultural
        icon that we had seen earlier in the day.
      </p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052570015.jpg"}
        alt="Celebrating a goal"
      ></img>
      <br />
      <p>
        The next morning was an early one, as we headed to the first station in
        our leapfrog day of travel. A taxi took us from the Number 38 to Bristol
        Temple Meads, where we would take a train to Paddington. After departing
        the train at Paddington and grabbing a flat white at a cafe, we hurried
        to our platform where we would take our connection to King's Cross, and
        finally board our train North to Edinburgh.
      </p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image44.jpg"}
        alt="Gromit sighting"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image65.jpg"}
        alt="Paddington station"
      ></img>
      <br />
      <h2>Edinburgh</h2>
      <h3>writeup pending...</h3>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image52.jpg"}
        alt="The Edinburgh Christmas Market can be seen in the distance"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image27.jpg"}
        alt=""
      ></img>
      <br />
      <EdinburghCastleSlideshow class="slideshow" />
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580017.jpg"}
        alt="A cathedral up the street from where we were staying at Castle Rock Hostel"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580016.jpg"}
        alt="Vines crawl up a flat in New Town"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image32.jpg"}
        alt="Night sky from outside the great shop Epitome"
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052570027.jpg"}
        alt="Climbing at the Edinburgh International Climbing Arena"
      ></img>
      <br />
      <EleanoreSlideshow class="slideshow" />
      <br />
      Edinburgh Museum of Modern Art
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052570026.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image15.jpg"}
        alt=""
      ></img>
      <br />
      <p>*Sculptures on varying levels of display*</p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image58.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image28.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580019.jpg"}
        alt="Heading back to London via train"
      ></img>
      <br />
      <h2>Vienna</h2>
      <h3>writeup pending...</h3>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image26.jpg"}
        alt=""
      ></img>
      <a id="peters-link" href="https://www.peterramsebner.com/" target="_blank" rel="noopener noreferrer">https://www.peterramsebner.com/</a>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image3.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image4.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image6.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image10.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image12.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image64.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image16.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image22.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image23.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image24.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image30.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image31.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image40.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image41.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/image46.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590022.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580021.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580023.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580024.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580031.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052580035.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590008.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590010.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590012.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590017.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590018.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590023.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590025.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590028.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590029.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590030.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052600006.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/0000526000014.jpg"}
        alt=""
      ></img>
      <br />
      <h2>Malmo</h2>
      <h3>writeup pending...</h3>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590034.jpg"}
        alt=""
      ></img>
      <p>
        *We wanted to take a picture of Simon and Em before they spotted us at
        the train station but got caught up in the excitement*
      </p>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052590035.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/0000526000016.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/0000526000017.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052630004.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052630006.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052630019.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052630020.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052630027.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052630032.jpg"}
        alt=""
      ></img>
      <br />
      <h2>Copenhagen</h2>
      <h3>writeup pending...</h3>
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/0000526000029.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/0000526000031.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/0000526000033.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052610008.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052610012.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052610016.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052610018.jpg"}
        alt=""
      ></img>
      <br />
      <img
        className="blog-single-photo"
        src={imgPrefix + "/2022_Europe/000052610020.jpg"}
        alt=""
      ></img>
      <br />
    </>
  );
};

const EuropePost2022 = () => {
  return (
    <div>
      <NavBar />
      <div className="spacer" />
      <main className="blog-post">
        <Blog />
      </main>
    </div>
  );
};

export default EuropePost2022;
