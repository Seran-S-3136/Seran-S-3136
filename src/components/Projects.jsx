import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'CodeArena',
    subtitle: 'LeetCode Clone',
    description: 'A production-ready full-stack coding interview platform with Monaco Editor, real-time code execution, automated test evaluation, contests, leaderboards, and discussion forums.',
    points: [
      'Built with Next.js, React, Node.js, Express.js, TypeScript, and Firebase',
      'Interactive coding environment with Monaco Editor and real-time execution',
      'Modular architecture with reusable components and efficient Firebase caching',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Firebase'],
    liveUrl: 'https://codearena-leetcode-clone.netlify.app/problems',
    githubUrl: '#',
    color: 'primary',
  },
  {
    title: 'ML Pipeline Security',
    subtitle: 'End-to-End ML Pipeline',
    description: 'Production-ready machine learning pipeline for malicious URL detection covering all 6 stages from data ingestion to inference with MLOps best practices.',
    points: [
      'Complete pipeline with Python and Scikit-learn for URL threat detection',
      'Experiment tracking, model versioning, and data drift monitoring',
      'Dockerized deployment with GitHub Actions for zero-downtime releases',
    ],
    tags: ['Python', 'Scikit-learn', 'Docker', 'MLOps', 'GitHub Actions'],
    liveUrl: 'https://ml-flow-end-to-end-pipeline.streamlit.app/',
    githubUrl: '#',
    color: 'accent',
  },
  {
    title: 'Agricultural Analysis',
    subtitle: 'Power BI Dashboard',
    description: 'A data analytics platform analyzing crop yield, rainfall, and soil datasets across 5+ agricultural regions to support evidence-based planning decisions.',
    points: [
      'Analyzed 10,000+ records uncovering yield patterns and seasonal trends',
      'Improved resource allocation planning by 20% through data-driven insights',
      'Interactive Power BI visualizations for multi-region agricultural data',
    ],
    tags: ['Power BI', 'Data Analytics', 'Python', 'EDA'],
    liveUrl: null,
    githubUrl: 'https://github.com/Seran-S-3136/Power-BI-Agricultural-Analysis-Dashboard',
    color: 'warm',
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Featured projects showcasing full-stack development, ML engineering, and data analytics
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div className={`projects__card glass-card projects__card--${project.color}`} key={index}>
              <div className="projects__card-glow"></div>

              <div className="projects__card-header">
                <div>
                  <span className="projects__card-subtitle">{project.subtitle}</span>
                  <h3 className="projects__card-title">{project.title}</h3>
                </div>
                <div className="projects__card-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="projects__card-link" aria-label="GitHub">
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projects__card-link" aria-label="Live Demo">
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="projects__card-desc">{project.description}</p>

              <ul className="projects__card-points">
                {project.points.map((point, i) => (
                  <li key={i}>
                    <FiArrowRight size={12} className="projects__point-icon" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="projects__card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="projects__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
