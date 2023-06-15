import React from "react"
import NavBar from "./NavBar"

const Goals = function(props) {
  return (
    <>
      <NavBar />
      <div className="spacer"></div>
      <main>
        <div id="goals">
          <p className="maintext">
            Goals
          </p>
          <li className="goal-bullet"> 1/3 - Climb three volcanoes before the end of 2023 </li>
          <li className="goal-bullet-indented"> 6/11/23 - Mt. St. Helens </li>
        </div>
      </main>
    </>
  )
}

export default Goals
