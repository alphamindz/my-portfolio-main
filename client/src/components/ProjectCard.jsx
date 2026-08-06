import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const projectLink = project.link || '#';
  const isLinkAvailable = Boolean(project.link);

  return (
    <div className="project-card">
      <a
        href={projectLink}
        target={isLinkAvailable ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="project-image-link"
        onClick={(e) => {
          if (!isLinkAvailable) e.preventDefault();
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="image-overlay">
          <span>View Project →</span>
        </div>
      </a>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        <a
          href={projectLink}
          target={isLinkAvailable ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="project-link-btn"
          onClick={(e) => {
            if (!isLinkAvailable) e.preventDefault();
          }}
        >
          {isLinkAvailable ? 'View Project →' : 'Coming Soon'}
        </a>
      </div>
  );
}

export default ProjectCard;