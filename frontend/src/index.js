import "./styles/index.css"
import '../node_modules/lightgallery/css/lightgallery.css';
import '../node_modules/lightgallery/css/lg-zoom.css';
import '../node_modules/lightgallery/css/lg-thumbnail.css';

import * as ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './error-page';
import EuropePost2022 from "./posts/2022_Europe";
import Goals from "./goals"
import Home from "./home"
import Projects from "./projects"
import React from 'react';
import Trips from "./trips"
import Work from "./work"

// import About from "./about"
// import TripPage from "./trip"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'trips',
    element: <Trips />,
  },
  // We may want this at some point, but not now
  // {
  //   path: 'trips/:tripId',
  //   element: <TripPage />
  // },
  {
    path: 'trips/Europe22',
    element: <EuropePost2022 />
  },
  {
    path: 'goals',
    element: <Goals />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
  {
    path: 'work',
    element: <Work />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
