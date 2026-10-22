'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../(core)/i18n/context';
import { Project } from '../../(features)/projects/projectData';
import { pick } from './pick';
import RetroWindow from './RetroWindow';

export default function RetroProjectDetail({ project }: { project: Project }) {
  const { t, language } = useLanguage();
  const title = pick(project.title, language);
  const body = pick(project.detailedDescription || project.description, language);

  return (
    <>
      <p>
        <Link href="/projects" className="retro-btn">
          « {t('projects.backToProjects')}
        </Link>
      </p>

      <RetroWindow title={`${title} - ${t('projects.project')}`}>
        <h2>{title}</h2>

        <table className="retro-table my-3">
          <tbody>
            {project.projectType && (
              <tr>
                <th scope="row">{t('projects.projectType')}</th>
                <td>{pick(project.projectType, language)}</td>
              </tr>
            )}
            {project.startDate && (
              <tr>
                <th scope="row">{t('projects.timeline')}</th>
                <td>
                  {project.startDate}
                  {project.endDate && project.endDate !== project.startDate
                    ? ` – ${project.endDate}`
                    : ''}
                </td>
              </tr>
            )}
            <tr>
              <th scope="row">{t('projects.technologies')}</th>
              <td>{project.technologies.map((tech) => pick(tech, language)).join(' · ')}</td>
            </tr>
          </tbody>
        </table>

        <h3>{t('projects.aboutProject')}</h3>
        <p className="whitespace-pre-line">{body}</p>

        {project.links && (
          <p className="mt-4 flex flex-wrap gap-2">
            {project.links.github && (
              <a
                className="retro-btn"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                💾 GitHub
              </a>
            )}
            {(project.links.website || project.links.demo) && (
              <a
                className="retro-btn"
                href={project.links.website || project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 {t('projects.viewProject')}
              </a>
            )}
          </p>
        )}
      </RetroWindow>

      {project.gallery && project.gallery.length > 0 && (
        <RetroWindow title="Image Viewer">
          <div className="flex flex-col items-center gap-4">
            {project.gallery.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${title} ${i + 1}`}
                width={800}
                height={500}
                className="retro-frame h-auto max-w-full"
              />
            ))}
          </div>
        </RetroWindow>
      )}
    </>
  );
}
