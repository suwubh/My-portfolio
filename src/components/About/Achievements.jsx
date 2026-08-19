import React from "react";
import { ImPointRight } from "react-icons/im";

function Achievements() {
  return (
    <div style={{ position: "relative", zIndex: 1, marginTop: "30px" }}>
      <p style={{ textAlign: "justify" }}>A few other achievements of mine :) :</p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Semi-finalist, HackOn with Amazon Season 6; top 300 out of 1 lakh+ participants
        </li>
        <li className="about-activity">
          <ImPointRight />  Finalist, Purplle Tech Challenge 2026
        </li>
        <li className="about-activity">
          <ImPointRight /> NTSE Scholar and KVPY Fellowship; National Merit-Based Scholarships
        </li>
        <li className="about-activity">
          <ImPointRight /> Competitive Programming (600+ Problems Solved)
  <ul>
    <li>Codeforces Specialist ~1459</li>
    <li>LeetCode Knight ~1769</li>
    <li>CodeChef 3-star</li>
  </ul>
        </li>
        <li className="about-activity">
          <ImPointRight />{" "}
          <a
            href="https://codolio.com/profile/suwubh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: "relative", zIndex: 2, pointerEvents: "auto" }}
          >
            Codolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Achievements;
