import React, { useState, useContext } from "react";
import "./About.css";
import AlertContext from "../Context/Alert/AlertContext";

const About = () => {
  const alertcontext = useContext(AlertContext);
  const { showAlert } = alertcontext;
  const [feedback, setFeedback] = useState({
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showAlert("Thank you for your feedback! We'll work on improvements.", "success");
    setFeedback({ email: "", message: "" });
  };

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>E-Notebook</h1>
        <p>Your secure cloud-based note management application.</p>
      </section>

      {/* ABOUT APP */}
      <section className="container about-section">
        <div className="section-card">
          <h2>About the Application</h2>
          <p>
            E-Notebook is a MERN Stack based web application that allows users
            to create, manage, update, and securely store their notes in the
            cloud. It focuses on simplicity, security, and performance.
          </p>

          <ul>
            <li>🔐 Secure authentication using JWT</li>
            <li>📝 Create, edit & delete notes</li>
            <li>☁️ Cloud-based access from anywhere</li>
            <li>📱 Fully responsive design</li>
          </ul>
        </div>
      </section>

      {/* DEVELOPER INFO */}
      <section className="container developer-section">
        <div className="section-card developer-card">
          <h2>Developer Information</h2>

          <div className="dev-info">
            <p>
              <i className="fa-solid fa-user"></i>
              <strong> Name:</strong> Aditya Patel
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>
              <strong> Email:</strong>{" "}
              <a href="mailto:aditya.patel@enotebook.com">aditya.patel@enotebook.com</a>
            </p>

            <p>
              <i className="fa-brands fa-github"></i>
              <strong> GitHub:</strong>{" "}
              <a
                href="https://github.com/lifelinecoding"
                target="_blank"
                rel="noreferrer"
              >
                lifelinecoding
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="container feedback-section">
        <div className="section-card feedback-card">
          <h2>Feedback & Improvements</h2>
          <p>
            Have suggestions or found something we can improve? Let us know!
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedback.email}
              onChange={onChange}
              required
              autoComplete="email"
            />

            <textarea
              name="message"
              placeholder="Your feedback or suggestions..."
              value={feedback.message}
              onChange={onChange}
              required
            ></textarea>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
