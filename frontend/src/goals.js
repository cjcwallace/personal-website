import NavBar from "./NavBar"
import React from "react"

const Goals = function(props) {
  return (
    <>
      <NavBar />
      <div className="spacer" />
      <main>
        <div id="goals-header">
          <h2>Goals</h2>
          <li className="goal-bullet"><input type="checkbox" checked={false}/> 1/3 - Climb three volcanoes before the end of 2023 </li>
          <li className="goal-bullet-indented"><input type="checkbox" checked={true}/> 6/11/23 - Mt. St. Helens </li>
          <li className="goal-bullet-indented"><input type="checkbox" checked={false}/></li>
          <li className="goal-bullet-indented"><input type="checkbox" checked={false}/></li>
          <li className="goal-bullet"><input type="checkbox" checked={false}/> Start a new full time job </li>
        </div>
      </main>
    </>
  )
}

export default Goals
