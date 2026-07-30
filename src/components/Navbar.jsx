import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map(link => document.getElementById(link.id))
      let current = ''
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            current = section.id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar__logo-avatar">SS</div>
          <span className="navbar__logo-text">Seran S</span>
        </a>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/your-resume-link/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary navbar__resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
