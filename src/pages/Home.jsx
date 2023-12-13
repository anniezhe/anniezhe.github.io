import React, { useState } from "react";
import "../pages/Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Home() {
  return (
    <div className="Home">
      <div className="section1 background">
        <h1>Annie He</h1>
        <p>
          I'm a data analyst fellow at the NYC Taxi and Limousine Commission.
          I recently
          graduated with a bachelor's degree in Applied Mathematics with a
          concentration in Data Science. During my time as an undergraduate
          student, I minored in Computer Science. I aspire to become a data
          scientist.
        </p>
      </div>
      <div className="section2 background2">
        <div className="section2intro">
          <h1>Writer</h1>
          <p>
            I like writing, because it allows my creativity to flow. When it
            comes to sharing my content, my goal is always to achieve a clear
            message. Here are some of my writing pieces:
          </p>
        </div>
        <Container className="container">
          <Row>
            <Col sx="true">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card2.png" />
                <Card.Body>
                  <Card.Title>
                    3 Most Important Things to Consider Before Signing Up to Any
                    Graduate School Events
                  </Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on February
                    2023 to help people who wanted to attend a graduate school
                    event.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://medium.com/@anniezhe0/3-most-important-things-to-consider-before-signing-up-to-any-graduate-school-events-7bf96c230928"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sx="true">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card3.png" />
                <Card.Body>
                  <Card.Title>
                    Some Food For Thought: Tech Layoffs and Recession's Arrival
                  </Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on March 2023
                    to offer a food for a thought.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://medium.com/@anniezhe0/some-food-for-a-thought-tech-layoffs-and-recessions-arrival-c79aa54bbcf9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sx="true">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="mongodbconference.jpeg" />
                <Card.Body>
                  <Card.Title>
                  A Commentary on How the “Joan is Awful” Episode Connects to Real-World Issues
                  </Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on August 2023 to share my thoughts on the connection between issues presented in both the episode and the real world. 
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://medium.com/@anniezhe0/a-commentary-on-how-the-joan-is-awful-episode-connects-to-real-world-issues-332b041deab9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section3 background">
        <div className="section3intro">
          <h1>Data Science + Data Analytics</h1>
          <p>
            Math and coding are the two fascinating areas that work together to
            make awesome things. I'm always amazed with their capabilities. Here
            are some of the projects where I've used math and coding:
          </p>
        </div>

        <Container>
          <Row>
            <Col sx="6">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card5.png" />
                <Card.Body>
                  <Card.Title>
                    Using Random Forest Regression Model on the Mastercard's
                    Stock Data Itself
                  </Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on April 2023
                    to communicate my findings on using the stock data on the
                    Random Forest Regression model.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://medium.com/@anniezhe0/using-random-forest-regression-model-on-the-mastercards-stock-data-itself-1a069ad9934a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sx="6">
              <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="complaints_issue_types1.png" />
                <Card.Body>
                  <Card.Title>
                  2022-2023 Consumer Financial Protection Bureau (CFPB) Complaint Report
                  </Card.Title>
                  <Card.Text>
                    I analyzed the complaint datasets using SQL from Google BigQuery and Tableau on December 2023.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://1drv.ms/p/s!AhOarSouCBto9VOAqsePDZ-igA9z?e=h3EbN3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2022-2023 CFPB Complaint Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
                    <img src="google-data-analytics-certificate.2.png" alt="Google Data Analytics Badge" width = "170px" />
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
