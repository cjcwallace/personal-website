import React from "react"
import { useRoutes } from 'react-router-dom';

import "./styles/index.css"

import Home from "./home"
import About from "./about"
import Trips from "./trips"
import Goals from "./goals"
import Projects from "./projects"


function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'trips', element: <Trips /> },
    { path: 'goals', element: <Goals /> },
    { path: 'projects', element: <Projects /> },
  ]);

  return routes;
}

export default App
