import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";

import NavBar from "./components/NavBar"
import PhotoGallery from "./components/gallery";
import PhotoSlideshow from "./components/Slideshow";

/**
 * 
 * @returns A page with list of trips returned from /api/trips/ endpoint
 */
function TripPage () {
  const { tripId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [viewingMode, setViewingMode] = useState(0)

  useEffect(() => {
		fetchData(tripId);
	}, [tripId]);

  const fetchData = (tripId) => {
		setIsLoading(true);
    fetch(`/api/trips/${tripId}/`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false);
      });
  };
  console.log('trip data: ' + JSON.stringify(data));

  return (
    <>
      {!isLoading && data && (
        <>
          <h1 className="trip-header">{data.name}</h1>
          {viewingMode === 0 && (
            <PhotoGallery />
          )}
          {viewingMode === 1 && (
            <PhotoSlideshow />
          )}
          <Link to="/trips" id="go-back-button">go back</Link>
        </>
      )}
    </>
  );
}

const Trip = function(props) {
  return (
    <>
      <NavBar />
      <div className="spacer" />
      <main>
        <TripPage />
      </main>
    </>
  )
}

export default Trip
