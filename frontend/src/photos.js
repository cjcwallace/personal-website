import React, { useEffect, useState } from 'react';

const Photos = function(props) {
    // State variable to show whether we're loading data or not.
    // Defaults to "true" to show a loading screen until we get our data from the API
    const [isLoading, setIsLoading] = useState(true);
    // State variable where we'll save our list of employees
    const [photos, setPhotos] = useState([]);

    // API client needs to be initialized as per above and passed
    // to the component
    const client = props.client;

    // This effect will be called when the component mounts and fetch the data
    // from our API
    useEffect(
      () => {
        client.photosList().then((result) => {
          // when we get the data back we set it in our state variable
          setPhotos(result.results);
          // and unset the "loading" flag
          setIsLoading(false);
        });
      },
      [], // this argument will prevent continually hitting the APIs on state changes.
    );

    // Show a loading state if we haven't gotten data back yet
    if (isLoading) {
      return <p>Photo data is loading...</p>;
    }
    // Show an "empty" state if we have no employees
    if (photos.length === 0) {
      return <p>No photos found!</p>;
    } else {
      // Show our employee list component with the data we got back
      return <PhotoList photos={photos} />;
    }
}

const PhotoList = function(props) {
    // This component renders a table of employees
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            props.photos.map((photo, index) => {
              return (
                <tr key={index}>
                  <td>{photo.name}</td>
                  {/* <td>{employee.department}</td>
                  <td>{employee.salary}</td> */}
                 </tr>
              );
            })
          }
          </tbody>
      </table>
    );
};

export default Photos
