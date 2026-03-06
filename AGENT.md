# Landing Personal - Agent Guide

## Architecture

Single-page portfolio / personal landing site. `App.tsx` composes five section
components in page order (no separate navbar -- Hero serves as the intro):

| File | Role |
|------|------|
| `Hero.tsx` | Name, title, tagline, social links, avatar placeholder |
| `About.tsx` | Bio / personal description |
| `Projects.tsx` | Project cards grid; renders `ProjectCard` sub-components with tags |
| `Skills.tsx` | Skills or technology showcase |
| `Contact.tsx` | Contact form + direct email link; uses `useVar` for persistent state |

Each component accepts props with defaults. Data (projects, skills) is defined
as typed arrays with defaults inside each component file.

`Contact.tsx` uses `useVar('personalContactName', '')` etc. from `orbitcode` to
persist form field values across reloads. All other components are stateless.

## Styling

- Global reset and base typography in `styles.css` (imported by `App.tsx`).
- Each component has a co-located CSS file (`Hero.css`, `Projects.css`, etc.).
- Plain CSS class selectors with component-prefixed names (e.g. `.hero-name`,
  `.project-card`, `.project-tag`). No CSS modules, no Tailwind.
- System font stack; smooth scroll enabled globally.

## Extension Points

- Add a section (e.g. blog, testimonials) by creating `SectionName.tsx` +
  `SectionName.css` and inserting the component into `App.tsx`.
- Customize content via props -- every text string, project list, and skill
  set has a default that can be overridden.
- Social links in `Hero.tsx` are plain anchor tags; update `href` values and
  icon labels to point to real profiles.

## Constraints

- No dedicated navigation -- anchor links rely on matching section `id` attributes.
