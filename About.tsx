import './About.css';

interface AboutProps {
  title?: string;
  bio?: string;
  highlights?: string[];
}

const defaultHighlights = [
  '5+ years of experience building web applications',
  'Passionate about clean code and user experience',
  'Always learning new technologies',
  'Open source contributor',
];

function About({
  title = 'About Me',
  bio = "I'm a developer who loves turning ideas into reality. I specialize in building modern web applications with a focus on performance and accessibility. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",
  highlights = defaultHighlights,
}: AboutProps) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{title}</h2>
        <div className="about-content">
          <div className="about-bio">
            <p>{bio}</p>
          </div>
          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function AboutPreview() {
  return (
    <div className="preview-container">
      <About />
    </div>
  );
}

export { About };
