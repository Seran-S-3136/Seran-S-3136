import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiFolder, FiDownload, FiMessageSquare } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/Seran_S_CV_final_sde.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(
        new Blob([blob], { type: 'application/pdf' })
      )
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Seran_S_CV_final_sde.pdf')
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch {
      window.open('/Seran_S_CV_final_sde.pdf', '_blank')
    }
  }

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
          <div className="hero__badges-container animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <div className="hero__badge hero__badge--green">
              <span className="hero__badge-dot"></span>
              Open to Work
            </div>
            <div className="hero__badge hero__badge--yellow">
              <span className="hero__badge-cap">🎓</span>
              B.Tech AI &amp; DS - Graduating 2027
            </div>
          </div>

          <span className="hero__greeting animate-fade-in-up" style={{ animationDelay: '0.1s' }}>HELLO, I'M</span>
          <h1 className="hero__name animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Seran S
          </h1>

          <div className="hero__role-container animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="hero__role-dot">●</span>
            <span className="hero__role-text">Software Engineer &amp; AI Developer</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            I build production-grade apps from{' '}
            <span className="hero__highlight-primary">idea to deployment</span>. Full-
            stack products with Python, React &amp; AI — always focused on{' '}
            <span className="hero__highlight-secondary">real-world impact</span>.
          </p>

          <div className="hero__banner animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="hero__banner-indicator">●</span>
            <div className="hero__banner-content">
              <strong>Open to Full-Stack &amp; Backend Engineering roles</strong>
              <span>Available from Jan 2027 · Open to relocation</span>
            </div>
          </div>

          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <FiFolder size={16} />
              View Projects
            </a>
            <button
              onClick={handleResumeDownload}
              className="btn btn-outline"
            >
              <FiDownload size={16} />
              Resume
            </button>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <FiMessageSquare size={16} />
              Let's Talk
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

        {/* Right — Visual (Interactive Orbital) */}
        <div className="hero__visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero__orbit-container">
            {/* Central Card */}
            <div className="hero__central-card">
              <span className="hero__central-initials">SS</span>
              <span className="hero__central-subtext">PORTFOLIO</span>
            </div>

            {/* Orbit Rings */}
            <div className="hero__orbit-ring hero__orbit-ring--1"></div>
            <div className="hero__orbit-ring hero__orbit-ring--2"></div>
            <div className="hero__orbit-ring hero__orbit-ring--3"></div>

            {/* Floating Tech Badges */}
            <div className="hero__tech-badge hero__tech-badge--1">AI/ML</div>
            <div className="hero__tech-badge hero__tech-badge--2">Flask</div>
            <div className="hero__tech-badge hero__tech-badge--3">React</div>
            <div className="hero__tech-badge hero__tech-badge--4">Cloud</div>
            <div className="hero__tech-badge hero__tech-badge--5">Node.js</div>
            <div className="hero__tech-badge hero__tech-badge--6">Supabase</div>
            <div className="hero__tech-badge hero__tech-badge--7">Git</div>
            <div className="hero__tech-badge hero__tech-badge--8">Java</div>
            <div className="hero__tech-badge hero__tech-badge--9">SQL</div>
            <div className="hero__tech-badge hero__tech-badge--10">LangChain</div>
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
