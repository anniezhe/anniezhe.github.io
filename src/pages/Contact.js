import React from "react";
import Button from "react-bootstrap/Button";
import '../pages/Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import Media from "react-media";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center justify-content-center my-5">
            <div className="col-lg-4">
            <Media query={{minWidth: 600}} render={() => (<EmailIcon style={{ fontSize: 250 }} />)}
              />
              <Media query={{maxWidth: 600}} render={() => (<EmailIcon style={{ fontSize: 100 }} />)}
              />
            </div>
            <div className="col-lg-4">
              <h1 className="font-weight-light">Contact</h1>
              <p>
                If you have any questions or suggestions, please do not hesitate
                to reach out. I'm also open to new opportunities.
              </p>
              <Button variant="primary" href="mailto:anniezhe0@gmail.com">
                Email Me
              </Button>
              &nbsp;
              &nbsp;
              <Button variant="primary" href="https://www.linkedin.com/in/anniezhe0">
                Find Me on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
