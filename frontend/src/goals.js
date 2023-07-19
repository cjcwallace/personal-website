import NavBar from "./NavBar";
import React from "react";

function Checkbox(props) {
  return (
    <li className="goal-bullet">
      <input type="checkbox" checked={false} readOnly={true} />{props.text}
    </li>
  )
}

function IndentedCheckbox(props) {
  return (
    <li className="goal-bullet-indented">
      <input type="checkbox" checked={props.checked || false} readOnly={true} />{props.text}
    </li>
  )
}

const Goals = function (props) {
  return (
    <>
      <NavBar />
      <div className="spacer" />
      <main>
        <div id="goals-header">
          <h2>Goals</h2>
          <Checkbox text={' 1/3 - Climb three volcanoes before the end of 2023'} />
          <IndentedCheckbox text={' 6/11/23 - Mt. St. Helens'} checked={true} />
          <IndentedCheckbox />
          <IndentedCheckbox />
          <Checkbox text={' Start a new full time job'} />
        </div>
      </main>
    </>
  );
};

export default Goals;
