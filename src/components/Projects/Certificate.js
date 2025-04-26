import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCards from "./CertiCards"; // ✅ Correct import now
import Particle from "../Particle"; // assuming you have this Particle background effect
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import suicide from "../../Assets/Projects/suicide.png";
import emotion from "../../Assets/Projects/emotion.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Certificate 1 */}
          <Col md={4} className="project-card">
            <CertiCards
              imgPath={suicide}
              isBlog={false}
              title="Data Analysis with Tableau"
              description="Applied Tableau techniques to prepare and manipulate data for analysis. Performed exploratory data analysis using visualizations and descriptive statistics. Identified benefits of Tableau's analytics features over manual calculations."
              ghLink="https://www.coursera.org/account/accomplishments/verify/FFA3RYDHUDLK"
            />
          </Col>

          {/* Certificate 2 */}
          <Col md={4} className="project-card">
            <CertiCards
              imgPath={leaf}
              isBlog={false}
              title="R Programming"
              description="Understand critical programming language concepts, Configure statistical programming software, Make use of R loop functions and debugging tools, Collect detailed information using R profiler"
              ghLink="https://www.coursera.org/account/accomplishments/verify/N8NUTC96B267?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" // Update with correct Coursera or Certificate link
            />
          </Col>

          {/* Certificate 3 */}
          <Col md={4} className="project-card">
            <CertiCards
              imgPath={emotion}
              isBlog={false}
              title="Excel Skills for Business: Advanced"
              description="Mastered advanced Excel skills including PivotTables, Power Query, macros, and complex formulas to analyze and manage business data efficiently."
              ghLink="https://www.coursera.org/account/accomplishments/verify/ETEMR8N8T87E?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" // Update with correct project or certificate link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
