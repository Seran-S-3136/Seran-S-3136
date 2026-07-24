import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'
import './Contact.css'

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'serans2828@gmail.com',
    href: 'mailto:serans2828@gmail.com',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '+91 9842888814',
    href: 'tel:+919842888814',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Erode, Tamil Nadu, India',
    href: null,
  },
]

const socialLinks = [
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/serans2828',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    href: 'https://github.com/Seran-S-3136',
  },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, show success state. Integrate with EmailJS or formspree later
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info">
            <div className="contact__info-cards">
              {contactInfo.map((info, index) => (
                <div className="contact__info-card glass-card" key={index}>
                  <div className="contact__info-icon">{info.icon}</div>
                  <div>
                    <p className="contact__info-label">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="contact__info-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact__info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <p className="contact__socials-label">Find me on</p>
              <div className="contact__socials-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact__form glass-card" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__form-label">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="contact__form-input"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__form-label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="contact__form-input"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="contact__form-input contact__form-textarea"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className={`btn btn-primary contact__form-submit ${submitted ? 'contact__form-submit--success' : ''}`}
            >
              {submitted ? (
                <>✓ Message Sent!</>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
