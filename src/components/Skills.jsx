import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C/C++', level: 70 },
      { name: 'SQL', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'Firebase', level: 82 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'NumPy', level: 82 },
      { name: 'Pandas', level: 85 },
      { name: 'Scikit-learn', level: 78 },
      { name: 'RAG Pipelines', level: 72 },
      { name: 'Agentic AI', level: 70 },
      { name: 'LLM Apps', level: 75 },
    ],
  },
  {
    title: 'Testing & DevOps',
    icon: '🔧',
    skills: [
      { name: 'PyTest', level: 88 },
      { name: 'Playwright', level: 85 },
      { name: 'Robot Framework', level: 82 },
      { name: 'Docker', level: 75 },
      { name: 'Azure DevOps', level: 78 },
      { name: 'GitHub Actions', level: 80 },
    ],
  },
]

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div className="skills__category glass-card" key={index}>
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>

              <div className="skills__list">
                {category.skills.map((skill, i) => (
                  <div className="skills__item" key={i}>
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
