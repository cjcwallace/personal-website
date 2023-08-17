import NavBar from "./components/NavBar";
import React from "react";
import downloadIcon from "./icons/download-icon.png"

const filePrefix = "https://media.cameronwallace.net/Documents/";

function Documents(props) {
  return (
    <div id="documents">
      <div id="resume">
        <img id="resumeimg" alt='resume' src={filePrefix + "Cameron_Wallace_Resume-1.png"}></img>
        <p id="resumedownload">
          <a id="resumedownload-link" href={filePrefix + "Cameron_Wallace_Resume.pdf"}>
            <img className="download-icon" alt='dl'src={downloadIcon}></img> download resume
          </a>
        </p>
      </div>
      <div id="paolorec">
        <img id="paolorecimg" alt='resume' src={filePrefix + "Paolo_Letter_of_Rec-1.png"}></img>
          <p id="paolorecdownload">
            <a id="paolorecdownload-link" href={filePrefix + "Paolo_Letter_of_Rec.pdf"}>
              <img className="download-icon" alt='dl'src={downloadIcon}></img> download letter of rec
            </a>   
          </p>
      </div>
    </div>
  )
}

function WorkHistory(props) {
  const companies = [
    ['fatcork', 'May 2023 - Current', 'Associate'],
    ['AROYA / METER Group', 'July 2021 - March 2023', 'Software Engineer'],
    ['Bayou on Bay', 'March 2019 - March 2020', 'Line Cook / Prep Chef'],
    ['Dominos', '', ''],
    ['WholeFoods', '', ''],
  ]

  let workHistory = companies.map(
    ([company, dates, title]) => (
      <>
        <div className="work-history-section">
          <h4 className="work-history-company">{company}</h4>
          <span className="connecting-dots">{"...".repeat(100)}</span>
          <p className="work-history-date">{dates}</p>
        </div>
        {title && title !== ''
          ? <p className='work-history-job-title'>        {title}</p>
          : <br />
        }
      </>
    )
  )

  return (
    <div id="work-history">
      {workHistory}
    </div>
  )
}

const Work = function (props) {
  return (
    <>
      <NavBar />
      <div className="spacer" />
      <main id="workmain">
        <div id="goals-header">
          <h2>Work</h2>
          <h3>Relevant Docs</h3>
          <Documents />
          <h3>Work History</h3>
          <WorkHistory />
        </div>
      </main>
    </>
  );
};

export default Work;
