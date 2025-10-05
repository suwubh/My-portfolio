import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subhankar Satpathy </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently pursuing B.Tech in Electronics and Communication Engineering at BIT Mesra, graduating in 2027.
            <br />
            Although my academic background lies in ECE, I somehow ended up communicating more with code than with circuits.
            <br />
            Over time, I have built strong skills in full-stack development, working with technologies like React, Node.js, TypeScript, REST APIs, WebSockets, and Redis.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess (feel free to send me a bullet challenge! 😄)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference… and if that fails, make a really cool GitHub README"{" "}
          </p>
          <footer className="blockquote-footer">Subhankar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
