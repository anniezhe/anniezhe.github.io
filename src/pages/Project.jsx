import * as React from "react";
import "../pages/Project.css";
import Accordion from 'react-bootstrap/Accordion';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function Project() {
  return (
    <div className="project">
      <div className="home">
        <h1>Projects</h1>
        <p>
          This is an extensive list of projects that I've done:
        </p>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dear People Who Are Looking for Jobs</Accordion.Header>
            <Accordion.Body>
              I wrote and published <a href="https://www.linkedin.com/pulse/dear-people-who-looking-jobs-annie-he?utm_source=share&utm_medium=member_ios&utm_campaign=share_via"
                target="_blank"
                noreferrer>this article</a> on LinkedIn on January
              2023 in light of the layoffs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Computer Science Society Club's Website</Accordion.Header>
            <Accordion.Body>
              I collaborated with two student executives on January 2022
              to make a website for the Computer Science Society club. Click <a href="https://jjaycss.tech/" target="_blank" noreferrer>here</a> to see the website.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
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
                  <h6>
                    <img src="google-data-analytics-certificate.2.png" alt="Google Data Analytics Badge" width="150px" />
                  </h6>
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
