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

function TripListItem(props) {
  return (
    <>
      <div className="trip-list-item">
        <div className="trip-date">{props.date}</div>
          <div>
            {props.link ? 
              <>
                <span>&#160;&#8212;&#160;&#160;</span> 
                <Link className="tripListItem" to={props.link} key={props._key}>
                  {props.name}
                </Link>
              </>
            : 
              <span>&#160;&#8212;&#160;&#160;{props.name}</span> 
            }
          </div>
        </div>
    </>
  )
}

function InternationalTripList() {
  return (
    <>
      {/* Europe 22 */}
      <TripListItem 
        date={'12/14/2022 - 1/3/2023'}
        name={'Europe 2022'}
        link={`/trips/Europe22`}
        _key={'Europe22'}
      />
      {/* Europe 21 */}
      <TripListItem 
        date={'9/14/2021 - 10/1/2021'}
        name={'Europe 2021'}
        _key={'Europe21'}
      />
    </>
  )
}

function OutdoorTripList() {
  return (
    <>
      {/* Yellow Aster Butte */}
      <TripListItem 
        date={'7/9/2023 - 7/10/2023'}
        name={'Yellow Aster Butte'}
        _key={'YAB'}
      />
      {/* Mt St Helens */}
      <TripListItem 
        date={'6/11/2023'}
        name={'Mt St Helens'}
        _key={'MSH'}
      />
    </>
  )
}

const Projects = function (props) {
  return (
    <>
      <NavBar />
      <div className="spacer" />
      <main>
        <div id="trips-header">
          <h2>Trips</h2>
          <h3>International</h3>
          <InternationalTripList />
          <h3>Outdoor</h3>
          <OutdoorTripList />
        </div>
      </main>
    </>
  )
}

export default Projects
