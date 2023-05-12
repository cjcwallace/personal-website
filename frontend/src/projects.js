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

  componentDidMount() {
    apiClient.photosList().then((result) => {
      this.setState({ photos: result })
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
    let images = this.state.photos.map(photo => <img className="photo" src={photo.image} key={photo.id} alt={photo.name}></img>)
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
      <div>
        <NavBar />
      </div>
      <main>
        <PhotoGrid />
      </main>
    </>
  )
}

export default Projects
