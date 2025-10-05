import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// You'll need to add these project images to your Assets folder
import piggytrack from "../../Assets/Projects/piggytrack.png";
import scriblio from "../../Assets/Projects/scriblio.png";
import chess from "../../Assets/Projects/chess.png";
import pdfAnnotator from "../../Assets/Projects/pdf-annotator.png";
import saasNotes from "../../Assets/Projects/saas-notes.png";

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
              imgPath={piggytrack}
              isBlog={false}
              title="PiggyTrack"
              description="Personal Finance Dashboard built with MERN stack. Features expense tracking, budget management, and financial analytics with real-time data visualization. Built with React, Node.js, Express, and MongoDB for comprehensive financial management."
              ghLink="https://github.com/suwubh/PiggyTrack"
              demoLink="https://piggytrack-vbyp.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scriblio}
              isBlog={false}
              title="Scriblio"
              description="AI-Powered Collaborative Whiteboard built with TypeScript and modern web technologies. Features real-time collaboration using WebRTC and Yjs, AI-powered drawing assistance, and multi-user support for seamless team collaboration."
              ghLink="https://github.com/suwubh/Scriblio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess4Nerds"
              description="Multiplayer chess platform built with TypeScript. Features real-time gameplay, match state management, and interactive UI with resign/draw/exit functionality. Implements chess game logic and multiplayer synchronization."
              ghLink="https://github.com/suwubh/Chess4Nerds"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfAnnotator}
              isBlog={false}
              title="PDF Annotator"
              description="PDF annotation tool built with TypeScript allowing users to upload, view, highlight, and annotate PDF documents with persistent storage. Features interactive PDF viewer with real-time annotation capabilities and cloud storage integration."
              ghLink="https://github.com/suwubh/Pdf-annotator"
              demoLink="https://pdf-annotator-orpin.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saasNotes}
              isBlog={false}
              title="SaaS Notes App"
              description="Multi-tenant SaaS Notes Application with role-based access control built with TypeScript. Features user authentication, real-time note synchronization, and scalable multi-tenant architecture for enterprise use."
              ghLink="https://github.com/suwubh/saas-notes-app"
              demoLink="https://saas-notes-app-frontend.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
