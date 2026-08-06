import React, { useState } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certs = [
    {
      id: 1,
      title: "Full Stack Web Development (Delta)",
      issuer: "Apna College",
      date: "Jan 2026",
      image: "https://via.placeholder.com/600x400", // यहाँ अपनी सर्टिफिकेट इमेज का पाथ डालें
    },
    {
      id: 2,
      title: "Smart India Hackathon Participant",
      issuer: "Ministry of Education",
      date: "Sept 2025",
      image: "https://via.placeholder.com/600x400",
    }
  ];

  return (
    <section id="certifications" className="cert-section">
      <h2 className="section-title">My <span className="highlight">Certifications</span></h2>
      
      <div className="cert-grid">
        {certs.map((cert) => (
          <div key={cert.id} className="cert-card" onClick={() => setSelectedImg(cert.image)}>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer} | {cert.date}</p>
              <span className="view-btn">View Certificate</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen View (Modal) */}
      {selectedImg && (
        <div className="cert-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-modal">&times;</span>
          <img src={selectedImg} alt="Enlarged Certificate" className="modal-content" />
        </div>
      )}
    </section>
  );
};

export default Certifications;