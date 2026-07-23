import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi'
import './Education.css'

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education__card glass-card">
          <div className="education__accent"></div>
          <div className="education__content">
            <div className="education__main">
              <div className="education__icon-wrapper">
                <FiBookOpen size={28} />
              </div>
              <div className="education__info">
                <h3 className="education__degree">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="education__field">
                  Artificial Intelligence and Data Science
                </p>
                <p className="education__institution">
                  K.S. Rangasamy College of Technology
                </p>
                <div className="education__meta">
                  <span className="education__meta-item">
                    <FiCalendar size={14} />
                    2023 – Present
                  </span>
                </div>
              </div>
            </div>

            <div className="education__cgpa">
              <div className="education__cgpa-ring">
                <svg viewBox="0 0 120 120" className="education__cgpa-svg">
                  <circle
                    cx="60" cy="60" r="52"
                    fill="none"
                    stroke="rgba(108, 92, 231, 0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60" cy="60" r="52"
                    fill="none"
                    stroke="url(#cgpaGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(8.35 / 10) * 327} 327`}
                    transform="rotate(-90 60 60)"
                    className="education__cgpa-progress"
                  />
                  <defs>
                    <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6c5ce7" />
                      <stop offset="100%" stopColor="#00cec9" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="education__cgpa-text">
                  <span className="education__cgpa-value">8.35</span>
                  <span className="education__cgpa-label">CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
