import React from "react";
import "../pages/About.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Text, View, StyleSheet } from "react-native";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function About() {
  return (
    <div className="about">
      <div className="background">
        <div className="section1">
          <h1>About Me</h1>
          <p>
            I like mathematical models, and I'm exploring Artificial
            Intelligence field. How I got here wasn't straightforward at all.
            Spoiler alert: I didn't always stick to STEM. There were many twists
            and turns throughout my entire career journey.
          </p>
        </div>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.1,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              Childhood Years
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              I was interested in STEM fields, but math wasn't my strongest
              suit. I wasn't ready to fully embrace STEM, so I spent a good
              portion of my life on exploring creative fields. It wasn't until
              my very first internship that made me take a U-turn.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              First Internship
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              I worked for the City College of New York as a high school
              researcher. I conducted an instrument comparison study using
              tropospheric ozone data with an undergraduate student, a graduate
              student, and a professor. I was comparing of two NASA's scientific
              instruments to each other using their ozone data: one was Aura
              satellite and the other was PANDORA spectrometer. The study
              demonstrated the possibility of having a STEM career where I can
              inject creativity into everything I do and make awesome things, so
              I decided pursue that career. I wasn't sure exactly what field in
              STEM, so I explored what I knew very well from that project. It
              was programming.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              College Years
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              My first major was Computer Science with Information Security,
              because I thought that I wanted to become a software engineer. At
              the time, I only knew that software engineer was the occupation
              that required to have a strong knowledge in programming. After
              many college courses and internships later, I realized that
              software engineer wasn't right for me, so, out of curiosity, I
              changed my major to Applied Mathematics with Data Science
              concentration. I took a course in Machine Learning and fell in
              love with mathematical models. I really like playing with them. I
              find the idea of using them to achieve desirable results really
              fascinating. Eventually, I found the answer to my question. I want
              to pursue a career in Artificial Intelligence/Machine Learning. I
              graduated with a bachelor's degree in Applied Mathematics with a
              concentration in Data Science and minored in Computer Science.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textPrimary">
              Current
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              I am a data analyst fellow at the NYC Taxi and Limousine
              Commission. I am also a data analytics apprentice at COOP Careers.
              I aspire to become a data scientist.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="background2">
        <div className="section2">
          <h1>My Work Experience</h1>
          <p>
            I accumulated multiple tech-related experiences mainly internships
            and contract work.
          </p>
        </div>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.1,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="textPrimary">
              January 2023 - April 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Text>
                <b>Connected Classrooms Tech Fellow @ CodePath</b>
                {"\n"}
                CodePath and I were on a mission to share our love for
                technology with college students across the United States and
                encourage them to pursue their dream tech careers. During class
                time, I strengthened 21 students' ability to connect with the
                web development course by communicating real life scenarios to
                them consistently. I did this to ensure that they can achieve a
                good understanding of a topic and posess the motivation to
                continue learning a topic outside of the Zoom classroom.
              </Text>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              June 2022 - August 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Text>
                <b>ICG Technology Summer Analyst @ Citigroup</b>
                {"\n"}I expedited the process for the sender's funding to reach
                the recipient's bank account to 3 seconds by automating the
                conversion from one format to another in the payment processing
                system using Volante technology platform with 3 payment
                developers based overseas. I also decreased wait times for newly
                hired developers based in NYC to contact experienced developers
                based overseas by 4 hours. I did this by creating a welcome
                guide document on Confluence with 4 payment developers based
                overseas.
              </Text>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              June 2021 - August 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Text>
                <b>Full Stack Intern @ Commit to Green</b>
                {"\n"}I improved readability in the company's product website in
                2 weeks by sharpening the product website design with 5 full
                stack interns, 1 UX/UI desinger, and the founder using Figma. I
                also boosted the company's confidence in its direction for its
                product website. I did this by communicating the design-to-real
                life transformation to the founder consistently with 5 full
                stack interns using the following: Visual Studio Code,
                Git/GitHub, React, Material-UI, Postman, Mongoose.js, Node.js,
                and Express.js.
              </Text>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="section3">
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-black"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Connect with me:</span>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/anniezhe0"
                className="me-4 text-reset"
              >
                <MDBIcon color="secondary" fab icon="linkedin" size="2x" />
              </a>
              <a
                href="https://www.github.com/anniezhe"
                className="me-4 text-reset"
              >
                <MDBIcon color="secondary" fab icon="github" size="2x" />
              </a>
            </div>
          </section>

          <section>
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6>
                    <img src="mylogo.png" alt="My logo" width="60px" />
                  </h6>
                  <p>
                    The codebase for my website is here{" "}
                    <a href="https://github.com/anniezhe/porfolio">GitHub</a>.
                    My domain is obtained from Google Domains. Made by yours
                    truly, Annie He.❤️
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Web Development
                  </h6>
                  <p>
                    <a
                      href="https://www.simplilearn.com/tutorials/html-tutorial/html-vs-css"
                      className="text-reset"
                    >
                      HTML/CSS
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      className="text-reset"
                    >
                      JavaScript
                    </a>
                  </p>
                  <p>
                    <a href="https://react.dev/" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.geeksforgeeks.org/how-to-use-bootstrap-with-react/"
                      className="text-reset"
                    >
                      Bootstrap with React
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Data Science</h6>
                  <p>
                    <a href="https://www.python.org/" className="text-reset">
                      Python
                    </a>
                  </p>
                  <p>
                    <a href="https://jupyter.org/" className="text-reset">
                      Jupyter Notebook
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.geeksforgeeks.org/libraries-in-python/"
                      className="text-reset"
                    >
                      Python Libraries
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact Me</h6>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="envelope"
                      className="me-3"
                    />
                    <a href="mailto:anniezhe0@gmail.com">anniezhe0@gmail.com</a>
                  </p>
                  <p>
                    <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                    +1 (929) 577-6615
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center text-white p-4"
            style={{ backgroundColor: "black" }}
          >
            © 2022 Copyright Annie He
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}
