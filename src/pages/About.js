import React from "react";
import "../pages/About.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from '@mui/material/Typography';

function About() {
  return (
    <div className="about">
      <div className="background">
        <div className = "section1">
        <h1>About Me</h1>
        <p>
          I like mathematical models, and I'm exploring Artificial Intelligence field. How I got here wasn't straightforward at all. Spoiler alert: I didn't always stick to STEM. There were many twists and turns throughout my entire career journey.
        </p>
        </div>
        
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Typography variant="h6" component="span">
            Childhood Years
          </Typography>
          <Typography>
          I was interested in STEM fields, but math wasn't
          my strongest suit. I wasn't ready to fully embrace STEM, so I spent a
          good portion of my life on exploring creative fields. It wasn't until
          my very first internship that made me took a U-turn.
          </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Typography variant="h6" component="span">
            First Internship
          </Typography>
          <Typography>
          I worked for the
          City College of New York as a high school researcher. I conducted an
          instrument comparison study using tropospheric ozone data with an
          undergraduate student, a graduate student, and a professor. I was
          comparing of two NASA's scientific instruments to each other using their ozone data: one was
          Aura satellite and the other was PANDORA spectrometer. The study
          demonstrated the possibility of having a STEM career where I can
          inject creativity into everything I do and make awesome things, so I
          decided pursue that career. I wasn't sure exactly what field in STEM,
          so I explored what I knew very well from that project. It was
          programming.
          </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Typography variant="h6" component="span">
            College Years
          </Typography>
          <Typography>
          My first major was Computer Science with
          Information Security, because I thought that I wanted to become a
          software engineer. At the time, I only knew that software engineer was
          the occupation that required to have a strong knowledge in
          programming. After many college courses and internships later, I
          realized that software engineer wasn't right for me, so, out of
          curiosity, I changed my major to Applied Mathematics with Data Science
          concentration. I took a course in Machine Learning and fell in love
          with mathematical models. I really like playing with them. I find the
          idea of using them to achieve desirable results really fascinating.
          Eventually, I found the answer to my question. I want to pursue a
          career in Artificial Intelligence/Machine Learning.
          </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
            </TimelineSeparator>
            <TimelineContent>
            <Typography variant="h6" component="span">
            Current
          </Typography>
          <Typography>
          I am an aspiring data scientist, a writer, and a web
          developer. I'm graduating in May 2023, so I'm wrapping up my last
          semester. I plan to attend a graduate school 3 years from now to pursue a Master's in Computer Science with a strong focus in artificial intelligence and machine learning.
          </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default About;
