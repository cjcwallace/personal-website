import "./styles/index.css"
import '../node_modules/lightgallery/css/lightgallery.css';
import '../node_modules/lightgallery/css/lg-zoom.css';
import '../node_modules/lightgallery/css/lg-thumbnail.css';

import * as ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from "./about"
import ErrorPage from './error-page';
import EuropePost2022 from "./posts/2022_Europe";
import Goals from "./goals"
import Home from "./home"
import Projects from "./projects"
import React from 'react';
import TripPage from "./trip"
import Trips from "./trips"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: 'about',
  //   element: <About />,
  // },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
