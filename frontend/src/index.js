import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./styles/index.css"

// import LightGallery styles
import '../node_modules/lightgallery/css/lightgallery.css';
import '../node_modules/lightgallery/css/lg-zoom.css';
import '../node_modules/lightgallery/css/lg-thumbnail.css';

import Home from "./home"
import About from "./about"
import Trips from "./trips"
import TripPage from "./trip"
import Goals from "./goals"
import Projects from "./projects"
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'trips',
    element: <Trips />,
  },
  {
    path: 'trips/:tripId',
    element: <TripPage />
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
