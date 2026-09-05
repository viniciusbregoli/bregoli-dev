'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '../../(features)/projects/projectData';
import { useLanguage } from '../../(core)/i18n/context';

export default function StudioProjectList({ projects }: { projects: Project[] }) {
  const reduced = useReducedMotion();
  const { language } = useLanguage();
  return (
    <div className="studio-projects">
      {projects.map((project, index) => (
        <Link key={project.id} href={`/projects/${project.id}`} className="studio-project"
          onPointerMove={(event) => {
            if (reduced || event.pointerType === 'touch') return;
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
            event.currentTarget.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
          }}
          onPointerLeave={(event) => {
            event.currentTarget.style.removeProperty('--spot-x');
            event.currentTarget.style.removeProperty('--spot-y');
          }}
        >
          <span className="studio-index">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{project.title[language] || project.title.en}</h3>
            <p>{project.description[language] || project.description.en}</p>
          </div>
          <span className="studio-project-tech">
            {project.technologies
              .slice(0, 3)
              .map((tech) => tech[language] || tech.en)
              .join(' / ')}
          </span>
          <FiArrowUpRight className="studio-project-arrow" aria-hidden />
        </Link>
      ))}
    </div>
  );
}
