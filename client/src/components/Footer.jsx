import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Simulate API call (Replace with your actual API)
    setTimeout(() => {
      console.log('Form Data:', formData);
      setFormStatus('success');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(''), 5000);
    }, 2000);

    // Real implementation example:
    /*
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  return (
    <footer className="footer" id="contact">
      {/* Contact Form Section */}
      <div className="footer-contact-section">
        <div className="footer-container">
          <div className="contact-content">
            {/* Left Side: Contact Info */}
            <div className="contact-info">
              <h2 className="section-title">Let's Work Together</h2>
              <p className="section-description">
                Have a project in mind? Let's create something amazing together. 
                Feel free to reach out!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:ankur@example.com">ankur@example.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-socials">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://github.com/ankuryadav" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/ankuryadav" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com/ninja.1ai" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="mailto:your-email@example.com" aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="form-message success">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-message error">
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3>ANKUR<span className="logo-dot">.DEV</span></h3>
            <p>Full Stack Developer & Student</p>
            <p className="brand-tagline">Building digital experiences with passion and precision.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">API Development</a></li>
              <li><a href="#services">Database Design</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get latest updates and tech insights.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Ankur Yadav. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;