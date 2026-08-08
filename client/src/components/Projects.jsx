import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
 {
  _id: '1',
  title: 'Skill Nebula (E-Learning Platform)',
  description: 'A full-stack e-learning platform designed to teach CS fundamentals, featuring a dual-role system for students and instructors.',
  impact: 'Streamlined core computer science learning by providing structured courses and enabling seamless management for both instructors and learners.',
  tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  link: 'https://skill-lab-flax.vercel.app/',
  image: '/images/skill-nebula.png',
},
  {
    _id: '2',
    title: 'StayZen (Airbnb Clone)',
    description: 'A full-stack rental booking platform offering property listing, search functionality, and a smooth booking flow within a clean user interface.',
    impact: 'Delivered an intuitive accommodation search and booking experience by simplifying property discovery and guest reservation workflows.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '',
    image: '/images/stayzen.png',
  },
  {
  _id: '3',
  title: 'Doctor Consultation Platform',
  description: 'A hackathon-built healthcare platform enabling seamless appointment scheduling and consultation management between patients and doctors.',
  impact: 'Bridged the gap between healthcare providers and patients by streamlining booking workflows and improving accessibility to medical consultations.',
  tech: ['React', 'Node.js', 'MongoDB'],
  link: '',
  image: '/images/doctor-consult.png',
}
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