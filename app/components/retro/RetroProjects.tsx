'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../(core)/i18n/context';
import { projects } from '../../(features)/projects/projectData';
import { pick } from './pick';
import RetroWindow from './RetroWindow';

export default function RetroProjects() {
  const { t, language } = useLanguage();

  return (
    <RetroWindow title="C:\My Documents\Projects">
      <h2>{t('projects.title')}</h2>
      <p>{t('projects.subtitle')}</p>

      <div className="overflow-x-auto mt-3">
        <table className="retro-table">
          <tbody>
            {projects.map((project) => {
              const thumb = project.gallery?.[0];
              return (
                <tr key={project.id}>
                  <td style={{ width: 132 }}>
                    {thumb && (
                      <Link href={`/projects/${project.id}`} tabIndex={-1} aria-hidden="true">
                        <Image
                          src={thumb}
                          alt=""
                          width={120}
                          height={80}
                          className="retro-frame object-cover"
                          style={{ width: 120, height: 80 }}
                        />
                      </Link>
                    )}
                  </td>
                  <td>
                    <Link href={`/projects/${project.id}`}>
                      <b>{pick(project.title, language)}</b>
                    </Link>
                    {project.projectType && <small> · {pick(project.projectType, language)}</small>}
                    <br />
                    {pick(project.description, language)}
                    <br />
                    <small>
                      <b>{t('projects.technologies')}:</b>{' '}
                      {project.technologies.map((tech) => pick(tech, language)).join(' · ')}
                    </small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RetroWindow>
  );
}
