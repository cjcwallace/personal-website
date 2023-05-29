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

const Trips = function(props) {
  return (
    <div>
      <NavBar />
      <div className="spacer"></div>
      <p>trips</p>
    </div>
)
}

export default Trips
