'use client';

import { Language } from '@/(core)/i18n/translations';
import { useLanguage } from '../../(core)/i18n/context';
import ProjectCard from './projectCard';

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'Mobile Robotics',
      description: {
        en: 'Member of the PUCPR Mobile Robotics Team, contributing to the development of follow-line, sumo, trekking, and combat robots. Participated in competitions like RoboCore Experience (RCX) and IRONCup.',
        pt: 'Membro da Equipe de Robótica Móvel da PUCPR, contribuindo para o desenvolvimento de robôs seguidores de linha, sumô, trekking e combate. Participação em competições como RoboCore Experience (RCX) e IRONCup.',
        de: 'Mitglied des PUCPR Mobile Robotics Teams, Mitwirkung an der Entwicklung von Linienfolge-, Sumo-, Trekking- und Kampfrobotern. Teilnahme an Wettbewerben wie RoboCore Experience (RCX) und IRONCup.',
      },
      technologies: ['Arduino', 'C/C++', 'Sensors', 'Microcontrollers'],
      color: 'purple',
      icon: 'code',
    },
    {
      title: 'Digital Twin Research',
      description: {
        en: 'Scholarship recipient for the Program for Initiation in Technological Development and Innovation 2021, focusing on research innovation related to digital twins and their applications in aerospace projects in partnership with Airbus.',
        pt: 'Bolsista do Programa de Iniciação em Desenvolvimento Tecnológico e Inovação 2021, com foco em pesquisa de inovação relacionada a gêmeos digitais e suas aplicações em projetos aeroespaciais em parceria com a Airbus.',
        de: 'Stipendiat des Programms zur Einführung in die technologische Entwicklung und Innovation 2021, mit Schwerpunkt auf Innovationsforschung zu digitalen Zwillingen und ihren Anwendungen in Luft- und Raumfahrtprojekten in Partnerschaft mit Airbus.',
      },
      technologies: ['Digital Twin', 'Python', 'Simulation', 'Data Analysis'],
      color: 'green',
      icon: 'research',
    },
    {
      title: 'Web Application Development',
      description: {
        en: 'Development and maintenance of web applications with Vue.js during internship at Exati Tecnologias. Integration of frontend applications with backend services using Java and NodeJS.',
        pt: 'Desenvolvimento e manutenção de aplicações web com Vue.js durante estágio na Exati Tecnologias. Integração de aplicações frontend com serviços backend usando Java e NodeJS.',
        de: 'Entwicklung und Wartung von Webanwendungen mit Vue.js während des Praktikums bei Exati Tecnologias. Integration von Frontend-Anwendungen mit Backend-Diensten unter Verwendung von Java und NodeJS.',
      },
      technologies: ['Vue.js', 'Java', 'NodeJS', 'PostgreSQL', 'Git'],
      color: 'blue',
      icon: 'code',
    },
    {
      title: 'IT Infrastructure Management',
      description: {
        en: 'Experience in infrastructure management, remote support, and virtualization during internship at Siemens Energy Brasil. Handled call and ticket management in a high-demand corporate environment.',
        pt: 'Experiência em gerenciamento de infraestrutura, suporte remoto e virtualização durante estágio na Siemens Energy Brasil. Gerenciamento de chamados e tickets em um ambiente corporativo de alta demanda.',
        de: 'Erfahrung im Infrastrukturmanagement, Remote-Support und Virtualisierung während des Praktikums bei Siemens Energy Brasil. Bearbeitung von Anrufen und Tickets in einer anspruchsvollen Unternehmensumgebung.',
      },
      technologies: ['IT Support', 'Virtualization', 'Ticket Management', 'Corporate IT'],
      color: 'orange',
      icon: 'code',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-blue-800 dark:text-white">
        {t('projects.title')}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10">{t('projects.subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            currentLanguage={language as Language}
            color={project.color}
            icon={project.icon as 'code' | 'research'}
          />
        ))}
      </div>
    </div>
  );
}
