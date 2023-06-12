import React from "react"
import NavBar from "./NavBar"

import { Configuration } from "./api-client/runtime"
import { PhotosApi } from "./api-client/apis/PhotosApi"

import LightGallery from "lightgallery/react"

const apiClient = new PhotosApi(new Configuration({
  basePath: 'http://127.0.0.1:8000/',
  // headers: {
  //   'X-CSRFToken': Cookies.get('csrftoken'),
  // }
}));

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoQueryComplete: false,
    };
  }

  handleExpandImage = (photoId) => {
    let photos = [...this.state.photos];
    let photo = {
      ...photos[photoId],
      isOpen: !photos[photoId].isOpen,
    }
    photos[photoId] = photo
    this.setState({photos})
  };

  componentDidMount() {
    apiClient.photosList().then((results) => {
      results.forEach(element => {
        element.isOpen = false;
      });
      this.setState({ photos: results })
      this.setState({ photoQueryComplete: true })
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    if (this.state.photos === []) {
      return (
        <p>no photos found</p>
      )
    }
    console.log(this.state.photos)
    let galleryphotos = this.state.photos.map(
      photo => (
        <a className="photoGridItem" href={photo.image} key={photo.id}>
          <img className="photo" alt={photo.name} src={photo.image} />
        </a>
      )
    )
    return (
      <LightGallery speed={500} className="photoGrid">
        {galleryphotos}
      </LightGallery>
    )
  }
}

const Projects = function(props) {
  return (
    <>
      <NavBar />
      <div className="spacer"></div>
      <main>
        <PhotoGrid />
      </main>
    </>
  )
}

export default Projects
