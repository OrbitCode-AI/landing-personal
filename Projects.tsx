import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const defaultProjects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application with real-time features and modern UI.',
    tags: ['React', 'Node.js', 'WebSocket'],
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'Mobile-first e-commerce platform with seamless checkout experience.',
    tags: ['TypeScript', 'Next.js', 'Stripe'],
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'Open source CLI tool that improves developer productivity.',
    tags: ['Rust', 'CLI', 'Open Source'],
    link: '#',
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span>🖼️</span>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} className="project-link">
            View Project →
          </a>
        )}
      </div>
    </article>
  );
}

interface ProjectsProps {
  title?: string;
  projects?: Project[];
}

function Projects({ title = 'Featured Projects', projects = defaultProjects }: ProjectsProps) {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{title}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function ProjectsPreview() {
  return (
    <div className="preview-container">
      <Projects />
    </div>
  );
}

export { Projects, ProjectCard };
export type { Project };
