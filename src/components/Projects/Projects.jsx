import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import piggytrack from "../../assets/Projects/piggytrack.png";
import scriblio from "../../assets/Projects/scriblio.png";
import chess from "../../assets/Projects/chess.png";
import readhaven from "../../assets/Projects/readhaven.png";
import amazonSecondLife from "../../assets/Projects/AmazonSecondLife.png";

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
              imgPath={readhaven}
              isBlog={false}
              title="ReadHaven"
              description="Community-driven book discovery and discussion platform with on-device 384-dim ONNX sentence embeddings, pgvector ivfflat indexing, and a 132-test Jest suite at 88% coverage."
              ghLink="https://github.com/suwubh/ReadHaven"
              demoLink="https://read-haven-sandy.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scriblio}
              isBlog={false}
              title="Scriblio"
              description="AI-powered collaborative whiteboard with a hybrid WebRTC/WebSocket dual-transport architecture and Redis pub/sub. Load testing reached 107ms median RTT at 25 concurrent clients."
              ghLink="https://github.com/suwubh/Scriblio"
              demoLink="https://scriblio-rose.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess4Nerds"
              description="Multiplayer chess platform with minimax and alpha-beta pruning AI, Elo-band matchmaking, and real-time match synchronization. Load testing sustained 110+ concurrent matches, 305 moves/sec, and p95 latency of 112ms."
              ghLink="https://github.com/suwubh/Chess4Nerds"
              demoLink="https://chess4-nerds-frontend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonSecondLife}
              isBlog={false}
              title="Amazon Second Life"
              description="End-to-end returns and resale platform designed around Amazon's order flow, giving returned, unused, and outgrown products a second life. It uses source-level grading, a deterministic Value Recovery Score, Product Passports, local peer reselling, fit diagnostics, Gemini 2.5 Flash with Bedrock Nova failover, FastAPI on Lambda, and DynamoDB."
              ghLink="https://github.com/suwubh/Amazon-hackon"
              demoLink="https://amazon-hackon.vercel.app"
            />
          </Col>

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
