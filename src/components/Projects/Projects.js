import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dental Tribe"
              description="Dental Tribe is likely a term used to refer to a community, group, or network within the field of dentistry. It could represent a collaborative and supportive community of dental professionals, sharing knowledge, experiences, and best practices. The term implies a sense of unity and shared purpose among individuals in the dental profession, fostering collaboration and growth in the field."
              ghLink="https://github.com/ravillagopinath/Denteee-main"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/AmruthGowda91200/VINOOT-AYURVEDIC"
              
            />
          </Col>

         

         

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
