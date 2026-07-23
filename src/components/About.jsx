import { FiTarget, FiCode, FiCpu } from 'react-icons/fi'
import './About.css'

const highlights = [
  {
    icon: <FiCode size={24} />,
    title: 'Full-Stack Development',
    description: 'Building responsive web applications with React, Next.js, Node.js, and Firebase.',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'AI & Machine Learning',
    description: 'Developing ML pipelines, RAG systems, and LLM-powered agentic applications.',
  },
  {
    icon: <FiTarget size={24} />,
    title: 'Test Automation',
    description: 'Engineering robust automation frameworks with PyTest, Playwright, and Robot Framework.',
  },
]

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Passionate about building intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              I'm an <strong>Artificial Intelligence and Data Science</strong> undergraduate at
              K.S. Rangasamy College of Technology with a strong passion for software engineering
              and AI development.
            </p>
            <p>
              Currently interning at <strong>ABB</strong> as a Software Engineering Intern,
              where I build and maintain automated test frameworks, drive CI/CD pipeline
              improvements, and streamline validation workflows across multiple product teams.
            </p>
            <p>
              My journey spans from crafting full-stack coding platforms and e-commerce dashboards
              to building end-to-end ML pipelines and agricultural analytics tools. I thrive at
              the intersection of <strong>engineering excellence</strong> and <strong>intelligent systems</strong>.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((item, index) => (
              <div
                className="about__highlight-card glass-card"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h3 className="about__highlight-title">{item.title}</h3>
                  <p className="about__highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
