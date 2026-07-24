import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import profileImg from '../assest/profile.jpeg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__bg-circle hero__bg-circle--1"></div>
        <div className="hero__bg-circle hero__bg-circle--2"></div>
        <div className="hero__bg-dots"></div>
      </div>

      <div className="hero__content container">
        {/* Left — Text */}
        <div className="hero__text">
          <div className="hero__badge animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="hero__badge-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero__name animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Hi, I'm <span className="hero__name-highlight">Seran S</span>
          </h1>

          <div className="hero__role-wrapper animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="hero__role-prefix">{'>'}</span>
            <span className="hero__role">Software Engineer &amp; AI Developer</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            AI &amp; Data Science undergraduate with hands-on experience in{' '}
            <span className="hero__highlight">test automation</span>,{' '}
            <span className="hero__highlight">agentic AI</span>, and{' '}
            <span className="hero__highlight">full-stack development</span>.
            Building reliable, production-ready systems.
          </p>

          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
            </a>
          </div>

          <div className="hero__socials animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
            <a
              href="https://github.com/Seran-S-3136"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/serans2828"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:serans2828@gmail.com" className="hero__social-link" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="hero__visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <img src={profileImg} alt="Seran S" className="hero__profile-img" />
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Internships</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">8.35</span>
              <span className="hero__stat-label">CGPA</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll-indicator"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span>Scroll</span>
        <FiArrowDown className="hero__scroll-icon" size={14} />
      </a>
    </section>
  )
}

export default Hero
