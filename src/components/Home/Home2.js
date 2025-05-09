import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setShowPhone(!showPhone);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m Karandeep Singh. I’m a Full Stack Developer and Data Science enthusiast from India.
              <br />
              <br />I'm comfortable with languages like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Data Science and Machine Learning </b> and
                also in areas related to{" "}
                <b className="purple">Web Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing projects
              with <b className="purple">Python</b> and
              <i>
                <b className="purple"> it's modules</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> TensorFlow and Scikit-learn</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* GitHub Icon */}
              <li className="social-icons">
                <a
                  href="https://github.com/karandeep0008"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* Phone Icon with Click-to-Reveal */}
              <li className="social-icons" style={{ position: "relative" }}>
                <a
                  href="#!"
                  onClick={handlePhoneClick}
                  className="icon-colour home-social-icons"
                >
                  <FaPhone />
                </a>
                {showPhone && (
                  <div
                    style={{
                      marginTop: "5px",
                      fontSize: "0.9em",
                      color: "#6c63ff",
                      textAlign: "center",
                    }}
                  >
                    8219784236
                  </div>
                )}
              </li>

              {/* LinkedIn Icon */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/0001karandeepsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Email Icon */}
              <li className="social-icons">
                <a
                  href="mailto:ranakaran571@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
