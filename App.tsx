import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import './styles.css'

export default function App() {
  return (
    <div className="personal-site">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
