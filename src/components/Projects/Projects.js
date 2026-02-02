import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="C Port Scanner"
              description="High-performance TCP port scanner written in C, focusing on speed, socket programming, and low-level networking."
              ghLink="https://github.com/bxgate/C-Port-Scanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Malicious PDF Generator"
              description="Built a controlled malicious PDF generator for security research and payload testing, focusing on exploitation vectors and defensive awareness."
              ghLink="https://github.com/bxgate/Malicious-PDF-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom Graphics Engine"
              description="Developed a graphics/game engine from scratch using OpenGL, including rendering pipeline fundamentals and engine architecture."
              ghLink="https://github.com/bxgate/Graphics-Engine"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ML Models Collection"
              description="Implemented and experimented with multiple machine learning models to understand core ML workflows and training pipelines."
              ghLink="https://github.com/bxgate/-ML-Models"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ELK SIEM Stack"
              description="Designed and implemented a SIEM pipeline using Elasticsearch, Logstash, and Kibana for centralized log collection and security monitoring."
              ghLink="https://github.com/bxgate/elk-siem"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="prettiflow"
              description="ai web app builder"
              ghLink="https://github.com/bxgate/prettiflow"
              // demoLink= 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
