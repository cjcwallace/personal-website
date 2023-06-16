import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import NavBar from "./NavBar"
import { formatDate } from "./helpers"


function TripList() {
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
        {formatDate(new Date(trip.trip_date)).padEnd(20) + '- '}
        <Link className="tripListItem" to={`/trips/${trip.id}`} key={trip.name + trip.id} state={trip}>
          {trip.name}
        </Link>
      </div>
    )
  )

  return (
    <>
      {!isLoading && trips && (
        <div className="goal-bullet-indented">
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

const Projects = function (props) {
  return (
    <>
      <NavBar />
      <div className="spacer"></div>
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
