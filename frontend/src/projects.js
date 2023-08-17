import NavBar from "./components/NavBar";
import React from "react";

const websiteRepo = (
  <a href="https://github.com/cjcwallace/personal-website">GitHub</a>
);
const websiteBlurb = (
  <p>
    At the moment I'm working on a few different things. Firstly, this website.
    I wanted to have a resource to document what I've been up to and this has
    been working nicely. If you're curious, you can see how I've set things up
    over on {websiteRepo}.
  </p>
);

const fatcorkFERepo = (
  <a href="https://github.com/cjcwallace/fatcork-companion">here</a>
);
const fatcorkBERepo = (
  <a href="https://github.com/cjcwallace/fatcork-backend">here</a>
);
const fatcorkBlurb = (
  <p>
    Since my last job, I've picked up some part time work at a champagne shop
    called fatcork. In an effort to combine that world and my tech background
    I've been working on a companion app. I had some quick chats with people
    that came into the shop and a few of them thought it would be nice to have a
    way to track bottles they've tried, look at inventory. That sort of thing.
    So I started working on it. As of this writing (8/1/2023) it's still in it's
    infancy but is on it's way to something that people will actually be able to
    use. Which I think will be pretty cool. The two repos for that are{" "}
    {fatcorkBERepo} and {fatcorkFERepo}.
  </p>
);

const Projects = function (props) {
  return (
    <div>
      <NavBar />
      <div className="spacer" />
      <main>
          <h2>Projects</h2>
          <h3>website</h3>
          {websiteBlurb}
          <h3>fatcork</h3>
          {fatcorkBlurb}
      </main>
    </div>
  );
};

export default Projects;
