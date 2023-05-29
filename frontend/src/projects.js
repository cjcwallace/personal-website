import React from "react"
import NavBar from "./NavBar"

import { Configuration } from "./api-client/runtime"
import { PhotosApi } from "./api-client/apis/PhotosApi"

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
    let images = this.state.photos.map(
      photo => (
        <div className="photoGridItem" key={photo.id}>
          <img className="photo" src={photo.image} alt={photo.name} onClick={() => this.handleExpandImage(photo.id - 1)}></img>
          {this.state.photos[photo.id - 1].isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="photo"
                src={photo.image}
                onClick={this.handleShowDialog}
                alt="none found"
              />
            </dialog>
          )}
        </div>
      )
    )
    return (
      <div className="photoGrid">
        {images}
      </div>
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
