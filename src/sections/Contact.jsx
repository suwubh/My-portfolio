import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiChessdotcom } from "react-icons/si";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { profile } from "../data";

const EMAILJS = {
  serviceID: "service_cnja7ue",
  templateID: "template_2lyc9wn",
  publicKey: "AHUDYEtrvWr_3LNoG",
};

function Contact({ resumeUrl }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const params = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: profile.email,
      current_date: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {
      await emailjs.send(
        EMAILJS.serviceID,
        EMAILJS.templateID,
        params,
        EMAILJS.publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus(""), 6000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="eyebrow">05 — Contact</span>
            <h2 className="section-title">
              Let&apos;s build <span className="gradient-text">something great</span>
            </h2>
            <p className="section-sub">
              Have a role, a project, or just a good problem to chat about? My
              inbox is always open.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-aside">
            <div className="contact-info glass">
              <h3>Reach me directly</h3>
              <a className="contact-line" href={`mailto:${profile.email}`}>
                <span className="contact-line-icon">
                  <FiMail />
                </span>
                <span>
                  <span className="contact-line-label">Email</span>
                  <span className="contact-line-value">{profile.email}</span>
                </span>
              </a>
              <div className="contact-line">
                <span className="contact-line-icon">
                  <FiMapPin />
                </span>
                <span>
                  <span className="contact-line-label">Location</span>
                  <span className="contact-line-value">{profile.location}</span>
                </span>
              </div>

              <div className="contact-available">
                <span className="contact-available-dot" />
                Currently open to new opportunities
              </div>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary contact-resume"
              >
                <FiDownload /> Download résumé
              </a>

              <div className="contact-socials">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter">
                  <FaXTwitter />
                </a>
                <a href={profile.socials.chess} target="_blank" rel="noreferrer" aria-label="Chess.com">
                  <SiChessdotcom />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap glass" delay={0.12}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field-row">
                <label className="field">
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    required
                  />
                </label>
                <label className="field">
                  <span>Your email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="jane@company.com"
                    required
                  />
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about the role, project or idea…"
                  required
                />
              </label>

              {status === "success" && (
                <motion.div
                  className="form-alert form-alert--ok"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle /> Thanks! Your message is on its way — I&apos;ll
                  reply soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="form-alert form-alert--err"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiAlertCircle /> Something went wrong. Please email me
                  directly.
                </motion.div>
              )}

              <Magnetic>
                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span className="spinner" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <FiSend />
                    </>
                  )}
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
