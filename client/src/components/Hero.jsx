import React from 'react';
import './Hero.css';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';

function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Mesh + grid background */}
      <div className="hero-bg">
        <div className="mesh-glow glow-1"></div>
        <div className="mesh-glow glow-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-content">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <h3>Hello, I'm</h3>
            </div>

            <h1 className="hero-title">
              <span className="highlight">Ankur</span>
            </h1>

            <h2 className="hero-subtitle">
              <span className="typing-text">Full Stack Developer</span>
            </h2>

            <p className="hero-description">
              Passionate about building scalable web applications with modern technologies.
              Specialized in <span className="tech-highlight">MERN Stack</span>, creating
              seamless user experiences from concept to deployment.
            </p>

            <div className="tech-stack">
              <span className="tech-badge"><SiReact className="tech-icon react" /> React</span>
              <span className="tech-badge"><SiNodedotjs className="tech-icon node" /> Node.js</span>
              <span className="tech-badge"><SiMongodb className="tech-icon mongo" /> MongoDB</span>
              <span className="tech-badge"><SiExpress className="tech-icon express" /> Express</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Let's Talk</span>
              </a>
            </div>

            <a href="/Ankur_Resume.pdf" download className="btn btn-cv">
              <span>Download CV</span>
              <FaDownload />
            </a>

          </div>

          <div className="hero-image-content">
            <div className="image-wrapper">
              <div className="image-ring"></div>
              <img
                src="/ankur.jpg"
                alt="Ankur Yadav"
                className="hero-image"
                onError={(e) => {
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/6840/6840478.png";
                  e.target.style.filter = "invert(1)";
                }}
              />

              <div className="floating-card card-1">
                <span className="card-icon">💻</span>
                <span className="card-text">Clean Code</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🚀</span>
                <span className="card-text">Fast Performance</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">📱</span>
                <span className="card-text">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;