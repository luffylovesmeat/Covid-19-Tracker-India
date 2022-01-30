import { Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <Typography variant="h3">About</Typography>
      <Typography variant="body1">
        This Website is Built to keep track of the Covid 19 cases across the
        different States of India. You can check the Source Code for this
        Website on{" "}
        <a
          style={{ color: "inherit" }}
          href="https://github.com/luffylovesmeat/Covid-19-Tracker-India"
        >
          Github.
        </a>
      </Typography>
      <Typography>
        Built as a Side Project By{" "}
        <a
          style={{ color: "inherit" }}
          href="https://www.linkedin.com/in/uddeshyatiwari/"
        >
          Uddeshya Tiwari
        </a>
      </Typography>
    </div>
  );
};

export default About;
