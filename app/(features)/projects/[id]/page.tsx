'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Project, getProjectById } from '../projectData';
import { useLanguage } from '../../../(core)/i18n/context';
import { FiChevronLeft, FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const params = useParams();
  const { language } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const projectId = Array.isArray(params.id) ? params.id[0] : params.id;
      const projectData = getProjectById(projectId);

      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
            {language === 'en'
              ? 'Project Not Found'
              : language === 'pt'
                ? 'Projeto Não Encontrado'
                : 'Projekt Nicht Gefunden'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {language === 'en'
              ? 'The project you are looking for does not exist.'
              : language === 'pt'
                ? 'O projeto que você está procurando não existe.'
                : 'Das gesuchte Projekt existiert nicht.'}
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            <FiChevronLeft className="mr-2" />
            {language === 'en'
              ? 'Back to Projects'
              : language === 'pt'
                ? 'Voltar para Projetos'
                : 'Zurück zu Projekten'}
          </Link>
        </div>
      </div>
    );
  }

  // Get the gradient color for the header
  const gradients: Record<string, { from: string; to: string; darkFrom: string; darkTo: string }> =
    {
      blue: {
        from: 'from-blue-400',
        to: 'to-blue-600',
        darkFrom: 'dark:from-blue-600',
        darkTo: 'dark:to-blue-800',
      },
      purple: {
        from: 'from-purple-400',
        to: 'to-purple-600',
        darkFrom: 'dark:from-purple-600',
        darkTo: 'dark:to-purple-800',
      },
      green: {
        from: 'from-green-400',
        to: 'to-green-600',
        darkFrom: 'dark:from-green-600',
        darkTo: 'dark:to-green-800',
      },
      orange: {
        from: 'from-orange-400',
        to: 'to-orange-600',
        darkFrom: 'dark:from-orange-600',
        darkTo: 'dark:to-orange-800',
      },
    };

  const gradient = gradients[project.color] || gradients.blue;

  return (
    <div>
      {/* Header Section */}
      <div
        className={`bg-gradient-to-r ${gradient.from} ${gradient.to} ${gradient.darkFrom} ${gradient.darkTo}`}
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-4">
            <Link
              href="/projects"
              className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md font-medium transition"
            >
              <FiChevronLeft className="mr-2" />
              {language === 'en'
                ? 'Back to Projects'
                : language === 'pt'
                  ? 'Voltar para Projetos'
                  : 'Zurück zu Projekten'}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-white/90 text-xl max-w-3xl">
            {project.description[language as 'en' | 'pt' | 'de'] || project.description.en}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
                {language === 'en'
                  ? 'About this Project'
                  : language === 'pt'
                    ? 'Sobre este Projeto'
                    : 'Über dieses Projekt'}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.detailedDescription ? (
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {project.detailedDescription[language as 'en' | 'pt' | 'de'] ||
                      project.detailedDescription.en}
                  </p>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description[language as 'en' | 'pt' | 'de'] || project.description.en}
                  </p>
                )}
              </div>
            </div>

            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
                  {language === 'en'
                    ? 'Project Gallery'
                    : language === 'pt'
                      ? 'Galeria do Projeto'
                      : 'Projektgalerie'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-700"
                    >
                      <div className="relative w-full h-auto">
                        <Image
                          src={image}
                          alt={`${project.title} image ${index + 1}`}
                          width={600}
                          height={400}
                          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                          className="hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/api/placeholder/600/400';
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                {language === 'en'
                  ? 'Project Information'
                  : language === 'pt'
                    ? 'Informações do Projeto'
                    : 'Projektinformationen'}
              </h3>

              {/* Project Type */}
              {project.projectType && (
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {language === 'en'
                      ? 'Project Type'
                      : language === 'pt'
                        ? 'Tipo de Projeto'
                        : 'Projekttyp'}
                  </h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    {project.projectType[language as 'en' | 'pt' | 'de'] || project.projectType.en}
                  </p>
                </div>
              )}

              {/* Timeline */}
              {(project.startDate || project.endDate) && (
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {language === 'en' ? 'Timeline' : language === 'pt' ? 'Período' : 'Zeitraum'}
                  </h4>
                  <div className="flex items-center text-gray-800 dark:text-gray-200">
                    <FiCalendar className="mr-2 text-blue-600 dark:text-blue-400" />
                    <span>
                      {project.startDate}
                      {project.endDate && project.endDate !== project.startDate
                        ? ` - ${project.endDate === 'Present' ? (language === 'en' ? 'Present' : language === 'pt' ? 'Presente' : 'Aktuell') : project.endDate}`
                        : ''}
                    </span>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  {language === 'en'
                    ? 'Technologies'
                    : language === 'pt'
                      ? 'Tecnologias'
                      : 'Technologien'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {project.links && Object.keys(project.links).length > 0 && (
                <div>
                  <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {language === 'en' ? 'Links' : language === 'pt' ? 'Links' : 'Links'}
                  </h4>
                  <div className="space-y-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FiGithub className="mr-2" />
                        {language === 'en'
                          ? 'View on GitHub'
                          : language === 'pt'
                            ? 'Ver no GitHub'
                            : 'Auf GitHub ansehen'}
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FiExternalLink className="mr-2" />
                        {language === 'en'
                          ? 'Live Demo'
                          : language === 'pt'
                            ? 'Demo ao Vivo'
                            : 'Live-Demo'}
                      </a>
                    )}
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FiExternalLink className="mr-2" />
                        {language === 'en'
                          ? 'Visit Website'
                          : language === 'pt'
                            ? 'Visitar Website'
                            : 'Website besuchen'}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
