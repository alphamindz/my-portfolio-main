import React from 'react';
import './Hero.css';
import { FaDownload } from 'react-icons/fa'; // यह लाइन होनी ज़रूरी है







function Hero() {
  return (
    <section id="home" className="hero-section">
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
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Express</span>
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

            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/ankur79790" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
</a>
              
             <a href="mailto:ankurcse437@gmail.com"aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>



          <div className="hero-image-content">
            <div className="image-wrapper">
              <div className="image-background"></div>

              <img 
  src="/ankur.jpg" 
  alt="Ankur Yadav" 
  className="hero-image"
  onError={(e) => {
    // अगर /ankur.jpg नहीं मिली, तो यह डमी फोटो दिखा देगा
    e.target.src = "https://cdn-icons-png.flaticon.com/512/6840/6840478.png";
    e.target.style.filter = "invert(1)"; // ताकि डार्क थीम पर साफ़ दिखे
  }}
  style={{ 
    width: '200px', 
    height: '200px', 
    borderRadius: '50%', 
    border: '4px solid #ffd700',
    objectFit: 'cover',
    display: 'block'
    
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

      {/* Animated background elements */}
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;