import './Hero.css';

interface HeroProps {
  name?: string;
  title?: string;
  tagline?: string;
}

function Hero({
  name = 'Your Name',
  title = 'Creative Developer',
  tagline = 'I build beautiful digital experiences',
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">View Work</a>
          <a href="#contact" className="hero-btn secondary">Get in Touch</a>
        </div>
        <div className="hero-social">
          <a href="#" aria-label="GitHub">
            <span className="social-icon">GH</span>
          </a>
          <a href="#" aria-label="LinkedIn">
            <span className="social-icon">IN</span>
          </a>
          <a href="#" aria-label="Twitter">
            <span className="social-icon">TW</span>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-avatar">
          <span>👤</span>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HeroPreview() {
  return (
    <div className="preview-container">
      <Hero />
    </div>
  );
}

export { Hero };
