import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karandeep Singh </span>
            from <span className="purple"> HP, India.</span>
            <br />
            I am currently a student at Lovely Professional University
            <br />
            BTech in Computer Science Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What we do now echoes in eternity."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>

      {/* Education Section with ID */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>
            <strong className="purple">Education</strong>
          </h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> B.Tech in Computer Science Engineering - Lovely
              Professional University (2022 - 2026)
            </li>
            <li className="about-activity">
              <ImPointRight /> 12th Grade - CBSE Board (PCM + Computer Science)
            </li>
            <li className="about-activity">
              <ImPointRight /> 10th Grade - CBSE Board
            </li>
          </ul>
        </blockquote>
      </Card.Body>
                <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>
            <strong className="purple">Achivements</strong>
          </h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Achivements 1
            </li>
            <li className="about-activity">
              <ImPointRight /> Achivements 2
            </li>
            <li className="about-activity">
              <ImPointRight /> Achivements 3
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
