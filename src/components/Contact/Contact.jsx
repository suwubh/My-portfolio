import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceID = 'service_cnja7ue';
  const templateID = 'template_2lyc9wn';
  const publicKey = 'AHUDYEtrvWr_3LNoG';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'subhankarsatpathy69@gmail.com',
    current_date: new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );

    console.log('Email sent successfully:', response.status, response.text);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error('EmailJS error:', error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(""), 5000);
  }
};

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    I'm always interested in hearing about new opportunities,
                    collaborations, or just having a chat about technology and
                    development. Feel free to reach out!
                    <br />
                    <br />
                    Whether you’re exploring a project,
                    a recruiter looking to connect, or just want to say hi,
                    I’d love to hear from you.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <Card className="contact-card-view">
              <Card.Body>
                <h3 className="contact-title">Send Me a Message</h3>
                
                {submitStatus === "success" && (
                  <div className="alert alert-success" role="alert">
                    <strong>Thank you!</strong> Your message has been sent successfully.
                    I'll get back to you soon!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="alert alert-danger" role="alert">
                    <strong>Oops!</strong> Something went wrong. Please try again or
                    contact me directly via email.
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <AiOutlineUser className="contact-icon" /> Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <AiOutlineMail className="contact-icon" /> Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Label>
                      <AiOutlineMessage className="contact-icon" /> Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or just say hello!"
                      required
                      className="contact-input"
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="contact-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <AiOutlineSend className="contact-icon" /> Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} className="text-center">
            <h3 className="contact-title">Let's Connect</h3>
            <p style={{ color: "white", fontSize: "1.1em", marginBottom: "30px" }}>
              You can also find me on these platforms:
            </p>
            <div className="contact-social-links">
              <a
                href="mailto:subhankarsatpathy69@gmail.com"
                className="contact-social-icons"
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
              <a
                href="https://www.linkedin.com/in/subhankar-satpathy-5b8940257/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/suwubh"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icons"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://hashnode.com/@suwubh"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icons"
                aria-label="Hashnode"
              >
                <SiHashnode />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
