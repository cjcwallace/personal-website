import React from "react";

export class Image extends React.Component {
  render() {
    var {description, ...data} = this.props.data
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...data}></img>
        {description ? 
          <p className="blog-photo-description">{description}</p>
          : null
        }
      </>
    )
  }
}

export class ImageNewLine extends React.Component {
  render() {
    var {description, ...data} = this.props.data
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...data}></img>
        {description ? 
          <p className="blog-photo-description">{description}</p>
          : null
        }
        <br />
      </>
    );
  }
}

const imgPrefix = "https://media.cameronwallace.net";

export const EuropeImages = [
  {
    className: "blog-header-photo",
    src: imgPrefix + "/2022_Europe/image56.jpg",
    alt: "Header",
  },
  {
    className:"blog-single-photo",
    src: imgPrefix + "/2022_Europe/image39.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image19.jpg",
    alt: "Miranda and our morning views of Bristol",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image63.jpg",
    alt: "A fellow who kept trying to convince me the moon was made of cheese...",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052570004.jpg",
    alt: "Bristol Bridge",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052570013.jpg",
    alt: "Frozen river",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580012.jpg",
    alt: "Ashton Gate Stadium",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052570015.jpg",
    alt: "Celebrating a goal",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image44.jpg",
    alt: "Gromit sighting",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image65.jpg",
    alt: "Paddington station",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image52.jpg",
    alt: "The Edinburgh Christmas Market can be seen in the distance",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image27.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580017.jpg",
    alt: "A cathedral up the street from where we were staying at Castle Rock Hostel",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580016.jpg",
    alt: "Vines crawl up a flat in New Town",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image32.jpg",
    alt: "Night sky from outside the great shop Epitome",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052570027.jpg",
    alt: "Climbing at the Edinburgh International Climbing Arena",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052570026.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image15.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image58.jpg",
    alt: "",
  },
  {   className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image28.jpg",
    alt: "",
  },
  {  
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580019.jpg",
    alt: "Heading back to London via train",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image26.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image4.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image6.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image10.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image12.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image64.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image16.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image22.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image23.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image24.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image30.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image31.jpg",
    alt: ""
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image40.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image41.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image46.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590022.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580021.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580023.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580024.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580031.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052580035.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590008.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590010.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590012.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590017.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590018.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590023.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590025.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590028.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590029.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590030.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600006.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600014.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590034.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052590035.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600016.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600017.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052630004.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052630006.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052630019.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052630020.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052630027.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052630032.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600029.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600031.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052600033.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052610008.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052610012.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052610016.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/image3.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052610018.jpg",
    alt: "",
  },
  {
    className: "blog-single-photo",
    src: imgPrefix + "/2022_Europe/000052610020.jpg",
    alt: "",
  },
];