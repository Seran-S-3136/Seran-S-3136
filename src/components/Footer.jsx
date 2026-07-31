import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="footer__logo-avatar">SS</div>
              <span className="footer__logo-text">Seran S</span>
            </a>
            <p className="footer__tagline">
              Building intelligent systems, one line of code at a time.
            </p>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/Seran-S-3136" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/serans2828" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:serans2828@gmail.com" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Seran S. Built with <FiHeart size={12} className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
