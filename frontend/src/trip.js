import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import NavBar from "./NavBar"
import PhotoGallery from "./gallery";
import PhotoSlideshow from "./slideshow";

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
