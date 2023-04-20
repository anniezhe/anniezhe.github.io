import React from "react";
import "../pages/Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const home = () => {
  return (
    <div className="Home">
      <div className="section1 background">
        <h1>Annie He</h1>
        <p>
          I'm a senior undergraduate student attending CUNY John Jay. I'm
          majoring in Applied Mathematics with Data Science concentration and
          minoring in Computer Science. I'm also an aspiring data scientist, a writer, and a web developer.
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
                <Card.Img variant="top" src="card1.png" />
                <Card.Body>
                  <Card.Title>Dear People Who Are Looking for Jobs</Card.Title>
                  <Card.Text>
                    I wrote and published this article on LinkedIn on January 2023 in light of the
                    layoffs.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.linkedin.com/pulse/dear-people-who-looking-jobs-annie-he?utm_source=share&utm_medium=member_ios&utm_campaign=share_via"
                    target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sx="true">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card2.png" />
                <Card.Body>
                  <Card.Title>3 Most Important Things to Consider Before Signing Up to Any Graduate School Events</Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on February 2023 to help people who wanted to attend a graduate school event. 
                  </Card.Text>
                  <Button variant="primary" href="https://medium.com/@anniezhe0/3-most-important-things-to-consider-before-signing-up-to-any-graduate-school-events-7bf96c230928" target="_blank" rel="noopener noreferrer">Medium</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sx = "true">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card3.png" />
                <Card.Body>
                  <Card.Title>Some Food For Thought: Tech Layoffs and Recession's Arrival</Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on March 2023 to offer a food for a thought. 
                  </Card.Text>
                  <Button variant="primary" href="https://medium.com/@anniezhe0/some-food-for-a-thought-tech-layoffs-and-recessions-arrival-c79aa54bbcf9" target="_blank" rel="noopener noreferrer">Medium</Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
        </Container>
      </div>
      <div className="section3 background">
        <div className="section3intro">
          <h1>Developer + Data Science</h1>
          <p>
            Math and coding are the two fascinating areas that work together to
            make awesome things. I'm always amazed with their capabilities. Here
            are some of the projects where I've used math and/or coding:
          </p>
        </div>
      
      <Container>
        <Row>
          <Col sx="6">
          <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card4.png" />
                <Card.Body>
                  <Card.Title>Computer Science Society Club's Website</Card.Title>
                  <Card.Text>
                    I collaborated with two student executives on January 2022 to make a website for the Computer Science Society club.
                  </Card.Text>
                  <Button variant="primary" href="https://jjaycss.tech/" target="_blank" rel="noopener noreferrer">Club Website</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col sx="6">
          <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="card5.png" />
                <Card.Body>
                  <Card.Title>Using Random Forest Regression Model on the Mastercard's Stock Data Itself</Card.Title>
                  <Card.Text>
                    I wrote and published this article on Medium on April 2023 to communicate my findings on using the stock data on the Random Forest Regression model. 
                  </Card.Text>
                  <Button variant="primary" href="https://medium.com/@anniezhe0/using-random-forest-regression-model-on-the-mastercards-stock-data-itself-1a069ad9934a" target="_blank" rel="noopener noreferrer">Medium</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default home;
