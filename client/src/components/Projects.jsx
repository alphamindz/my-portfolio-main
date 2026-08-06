import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    _id: '1',
    title: 'Skill Nebula (E-Learning Platform)',
    description: 'CS fundamentals sikhane wala full-stack e-learning platform, students aur instructors ke liye dual-role system ke saath. Next.js + Prisma + PostgreSQL se bana hai.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://skill-lab-flax.vercel.app/',
    image: '/images/skill-nebula.png',
  },
  {
    _id: '2',
    title: 'StayZen (Airbnb Clone)',
    description: 'Airbnb jaisa full-stack booking platform — property listing, search, aur booking flow ke saath simple aur clean UI.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '',
    image: '/images/stayzen.png',
  },
  {
    _id: '3',
    title: 'Doctor Consultation Platform',
    description: 'Hackathon project — patients aur doctors ke beech consultation booking, appointments manage karne ke liye bana hua platform.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '',
    image: '/images/doctor-consult.png',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          My <span className="highlight">Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;