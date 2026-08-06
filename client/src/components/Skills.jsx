import React, { useState, useEffect, useRef } from 'react';
import { 
  FaReact, FaNode, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, 
  FaJs, FaGithub, FaAws, FaDocker, FaPython, FaFigma 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVercel, 
  SiMysql, SiRedux, SiTypescript, SiNextdotjs, SiFirebase,
  SiGraphql, SiJest, SiWebpack
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillsData = [
    {
      category: "Frontend Development",
      icon: <FaReact />,
      color: "#61DAFB",
      skills: [
        { name: "React.js", level: 90, icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript (ES6+)", level: 85, icon: <FaJs />, color: "#F7DF1E" },
        { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "TypeScript", level: 75, icon: <SiTypescript />, color: "#3178C6" },
        { name: "Next.js", level: 80, icon: <SiNextdotjs />, color: "#000000" },
        { name: "Redux", level: 70, icon: <SiRedux />, color: "#764ABC" }
      ]
    },
    {
      category: "Backend Development",
      icon: <FaNode />,
      color: "#339933",
      skills: [
        { name: "Node.js", level: 80, icon: <FaNode />, color: "#339933" },
        { name: "Express.js", level: 85, icon: <SiExpress />, color: "#000000" },
        { name: "REST APIs", level: 90, icon: <FaNode />, color: "#FF6C37" },
        { name: "GraphQL", level: 65, icon: <SiGraphql />, color: "#E10098" },
        { name: "Python", level: 70, icon: <FaPython />, color: "#3776AB" }
      ]
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      color: "#47A248",
      skills: [
        { name: "MongoDB", level: 85, icon: <SiMongodb />, color: "#47A248" },
        { name: "MySQL", level: 75, icon: <SiMysql />, color: "#4479A1" },
        { name: "Mongoose ODM", level: 80, icon: <SiMongodb />, color: "#880000" },
        { name: "Firebase", level: 70, icon: <SiFirebase />, color: "#FFCA28" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <FaGitAlt />,
      color: "#F05032",
      skills: [
        { name: "Git & GitHub", level: 90, icon: <FaGithub />, color: "#181717" },
        { name: "Vercel", level: 80, icon: <SiVercel />, color: "#000000" },
        { name: "Postman", level: 85, icon: <SiPostman />, color: "#FF6C37" },
        { name: "Docker", level: 60, icon: <FaDocker />, color: "#2496ED" },
        { name: "AWS", level: 55, icon: <FaAws />, color: "#FF9900" },
        { name: "Webpack", level: 65, icon: <SiWebpack />, color: "#8DD6F9" }
      ]
    },
    {
      category: "Design & Testing",
      icon: <FaFigma />,
      color: "#F24E1E",
      skills: [
        { name: "Figma", level: 75, icon: <FaFigma />, color: "#F24E1E" },
        { name: "Responsive Design", level: 90, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "Jest", level: 60, icon: <SiJest />, color: "#C21325" },
        { name: "UI/UX Principles", level: 80, icon: <FaFigma />, color: "#A259FF" }
      ]
    }
  ];

  // Get all categories
  const categories = ['all', ...skillsData.map(item => item.category)];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(item => item.category === activeCategory);

  // Calculate overall proficiency
  const calculateOverallProficiency = () => {
    let totalSkills = 0;
    let totalLevel = 0;
    skillsData.forEach(category => {
      category.skills.forEach(skill => {
        totalSkills++;
        totalLevel += skill.level;
      });
    });
    return Math.round(totalLevel / totalSkills);
  };

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        {/* Section Header */}
        <div className={`skills-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">What I Do</span>
          <h2 className="skills-heading">
            Technical <span className="highlight">Proficiency</span>
          </h2>
          <p className="skills-description">
            A comprehensive overview of my technical skills and expertise in modern web development
          </p>
        </div>

        {/* Stats Cards */}
        <div className={`stats-container ${isVisible ? 'animate' : ''}`}>
          <div className="stat-card">
            <div className="stat-icon">
              <FaReact />
            </div>
            <div className="stat-info">
              <h3>{skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)}+</h3>
              <p>Technologies</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaDatabase />
            </div>
            <div className="stat-info">
              <h3>{skillsData.length}</h3>
              <p>Categories</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaGitAlt />
            </div>
            <div className="stat-info">
              <h3>{calculateOverallProficiency()}%</h3>
              <p>Avg. Proficiency</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`category-filter ${isVisible ? 'animate' : ''}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`skills-grid ${isVisible ? 'animate' : ''}`}>
          {filteredSkills.map((item, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderTopColor: item.color
              }}
            >
              <div className="card-header">
                <div className="category-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.category}</h3>
                <div className="skill-count">{item.skills.length} skills</div>
              </div>
              
              <div className="skill-list">
                {item.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <span className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          animationDelay: `${idx * 0.1}s`
                        }}
                      >
                        <span className="progress-glow" style={{ background: skill.color }}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Proficiency Badge */}
              <div className="proficiency-badge">
                <div className="badge-circle" style={{ borderColor: item.color }}>
                  <span style={{ color: item.color }}>
                    {Math.round(item.skills.reduce((acc, s) => acc + s.level, 0) / item.skills.length)}%
                  </span>
                </div>
                <span className="badge-label">Avg. Proficiency</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className={`additional-info ${isVisible ? 'animate' : ''}`}>
          <div className="info-card">
            <h4>🚀 Currently Learning</h4>
            <div className="learning-tags">
              <span>Docker & Kubernetes</span>
              <span>AWS Services</span>
              <span>GraphQL Advanced</span>
              <span>Microservices</span>
            </div>
          </div>
          <div className="info-card">
            <h4>🎯 Next Goals</h4>
            <div className="learning-tags">
              <span>System Design</span>
              <span>CI/CD Pipelines</span>
              <span>React Native</span>
              <span>Web3 Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;