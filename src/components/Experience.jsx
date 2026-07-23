import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi'
import './Experience.css'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'ABB',
    location: 'Bangalore, India',
    period: 'Aug 2025 – May 2026',
    type: 'Internship',
    points: [
      'Engineered and maintained automated test frameworks for web and API applications using Python, PyTest, Playwright, and Robot Framework, boosting regression coverage by 30% across 3 product pipelines.',
      'Spearheaded migration and stabilization of 5+ API automation suites, cutting flaky test execution by 40% and improving test reliability across CI/CD environments.',
      'Streamlined configuration validation workflows by integrating test execution into Azure DevOps pipelines, reducing build validation time by 25%.',
    ],
    tags: ['Python', 'PyTest', 'Playwright', 'Robot Framework', 'Azure DevOps'],
  },
  {
    title: 'AI Developer Intern',
    company: 'SkySphere Technologies Pvt. Ltd.',
    location: 'India',
    period: 'Feb 2025 – May 2025',
    type: 'Internship',
    points: [
      'Architected secure Sign In and Sign Up authentication modules using Flutter and Firebase, enabling role-based access control for 500+ users with zero reported auth failures.',
      'Designed and launched a responsive E-Commerce Admin Dashboard using React.js and Firebase, consolidating product management, user oversight, and operational workflows into a single interface.',
    ],
    tags: ['Flutter', 'Firebase', 'React.js', 'Authentication', 'E-Commerce'],
  },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            Professional experiences that shaped my engineering skills
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div className="experience__item" key={index}>
              <div className="experience__line">
                <div className="experience__dot"></div>
                {index < experiences.length - 1 && <div className="experience__connector"></div>}
              </div>

              <div className="experience__card glass-card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__title">{exp.title}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__type">{exp.type}</span>
                </div>

                <div className="experience__meta">
                  <span className="experience__meta-item">
                    <FiCalendar size={14} />
                    {exp.period}
                  </span>
                  <span className="experience__meta-item">
                    <FiMapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="experience__points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="experience__point">{point}</li>
                  ))}
                </ul>

                <div className="experience__tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="experience__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
