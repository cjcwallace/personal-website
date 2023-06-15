import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import NavBar from "./NavBar"
import { formatDate } from "./helpers"


function TripList () {
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
      <>
        {formatDate(new Date(trip.trip_date))} - {}
        <Link className="tripListItem" to={`/trips/${trip.id}`} key={trip.name + trip.id} state={trip}>
          {trip.name}
        </Link>
      </>
    )
  )

  return (
    <>
      {!isLoading && trips && (
          <div>
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

const Projects = function(props) {
  return (
    <>
      <NavBar />
      <div className="spacer"></div>
      <main>
        <TripList />
      </main>
    </>
  )
}

export default Projects
