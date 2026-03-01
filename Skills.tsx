import './Skills.css'

interface Skill {
  name: string
  level: number
  category: string
}

const defaultSkills: Skill[] = [
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 92, category: 'Frontend' },
  { name: 'CSS/Tailwind', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Git', level: 90, category: 'Tools' },
]

interface SkillBarProps {
  skill: Skill
}

function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  )
}

interface SkillsProps {
  title?: string
  skills?: Skill[]
}

function Skills({ title = 'Skills', skills = defaultSkills }: SkillsProps) {
  const categories = [...new Set(skills.map(s => s.category))]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">{title}</h2>
        <div className="skills-grid">
          {categories.map(category => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="category-skills">
                {skills
                  .filter(s => s.category === category)
                  .map(skill => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function SkillsPreview() {
  return (
    <div className="preview-container">
      <Skills />
    </div>
  )
}

export { Skills, SkillBar }
export type { Skill }
