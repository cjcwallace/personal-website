import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom'
import NavBar from "./NavBar"
import { getTripDate } from "./helpers"

/**
 * A practice in API calls, currently unused due to the small number of trip posts
 * @returns A formatted list of trips returned from the /api/trips/ endpoint
 */
// eslint-disable-next-line no-unused-vars
function FetchTripList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    fetch("/api/trips/", {})
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  let trips = data?.map(
    trip => (
      <div className="trip-list-item">
        <div className="trip-date">{getTripDate(trip)}</div>
        <span>&#160;&#8212;&#160;&#160;</span>
        <Link className="tripListItem" to={`/trips/${trip.id}`} key={trip.name + trip.id} state={trip}>
          {trip.name}
        </Link>
      </div>
    )
  )

  return (
    <>
      {!isLoading && trips && (
        <div className="trip-bullet-indented">
          {trips}
        </div>
      )}
      {!isLoading && !trips && (
        <p>no trips found</p>
      )}
      {isLoading && (
        <p>loading</p>
      )}
    </>
  )
}

function TripList() {

}

const Projects = function (props) {
  return (
    <>
      <NavBar />
      <div className="spacer" />
      <main>
        <div id="trips-header">
          <h2>Trips</h2>
        </div>
        <TripList />
      </main>
    </>
  )
}

export default Projects
