'use client';

import { useLanguage } from '../../(core)/i18n/context';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export default function ExperienceSection() {
  const { language } = useLanguage();

  const experiences = [
    {
      company: 'Exati Tecnologias',
      position: {
        en: 'Web Development Intern',
        pt: 'Estagiário de Desenvolvimento Web',
        de: 'Praktikant für Webentwicklung',
      },
      period: {
        en: '2022 - 2023',
        pt: '2022 - 2023',
        de: '2022 - 2023',
      },
      description: {
        en: 'Development and maintenance of web applications with Vue.js. Integration of frontend applications with backend services using Java and NodeJS. Creation and management of databases with PostgreSQL. Use of Git and GitLab as source control. Task management and tracking of bugs and tasks with Youtrack.',
        pt: 'Desenvolvimento e manutenção de aplicações web com Vue.js. Integração de aplicações frontend com serviços backend usando Java e NodeJS. Criação e gerenciamento de bancos de dados com PostgreSQL. Uso de Git e GitLab como controle de fonte. Gerenciamento de tarefas e rastreamento de bugs e tarefas com Youtrack.',
        de: 'Entwicklung und Wartung von Webanwendungen mit Vue.js. Integration von Frontend-Anwendungen mit Backend-Diensten unter Verwendung von Java und NodeJS. Erstellung und Verwaltung von Datenbanken mit PostgreSQL. Verwendung von Git und GitLab zur Quellcodeverwaltung. Aufgabenverwaltung und Verfolgung von Fehlern und Aufgaben mit Youtrack.',
      },
      technologies: ['Vue.js', 'Java', 'NodeJS', 'PostgreSQL', 'Git', 'GitLab', 'Youtrack'],
      location: 'Brazil',
    },
    {
      company: 'Siemens Energy Brasil',
      position: {
        en: 'IT Infrastructure Intern',
        pt: 'Estagiário de Infraestrutura de TI',
        de: 'Praktikant für IT-Infrastruktur',
      },
      period: {
        en: '2021 - 2022',
        pt: '2021 - 2022',
        de: '2021 - 2022',
      },
      description: {
        en: 'Infrastructure management in a large corporation, allowing me to develop technical and problem management skills in a high-demand environment. My responsibilities included infrastructure management, remote support, virtualization, and call and ticket management.',
        pt: 'Gerenciamento de infraestrutura em uma grande corporação, permitindo-me desenvolver habilidades técnicas e de gerenciamento de problemas em um ambiente de alta demanda. Minhas responsabilidades incluíam gerenciamento de infraestrutura, suporte remoto, virtualização e gerenciamento de chamados e tickets.',
        de: 'Infrastrukturmanagement in einem großen Unternehmen, das mir ermöglichte, technische Fähigkeiten und Problemmanagement in einer anspruchsvollen Umgebung zu entwickeln. Zu meinen Aufgaben gehörten Infrastrukturmanagement, Fernunterstützung, Virtualisierung und Anruf- und Ticketmanagement.',
      },
      technologies: [
        'IT Support',
        'Virtualization',
        'Ticket Management',
        'Corporate IT',
        'Network Management',
      ],
      location: 'Brazil',
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-800 dark:text-white">
          {language === 'en'
            ? 'Work Experience'
            : language === 'pt'
              ? 'Experiência Profissional'
              : 'Berufserfahrung'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {language === 'en'
            ? 'My professional experience in software development and IT infrastructure.'
            : language === 'pt'
              ? 'Minha experiência profissional em desenvolvimento de software e infraestrutura de TI.'
              : 'Meine Berufserfahrung in Softwareentwicklung und IT-Infrastruktur.'}
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
                    {experience.company}
                  </h3>
                  <h4 className="text-xl text-gray-800 dark:text-white mt-1">
                    {experience.position[language as 'en' | 'pt' | 'de'] || experience.position.en}
                  </h4>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                  <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                    <FiCalendar className="mr-2" />
                    <span>
                      {experience.period[language as 'en' | 'pt' | 'de'] || experience.period.en}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FiMapPin className="mr-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {experience.description[language as 'en' | 'pt' | 'de'] ||
                  experience.description.en}
              </p>

              <div>
                <h5 className="text-gray-700 dark:text-gray-200 font-medium mb-3">
                  {language === 'en'
                    ? 'Technologies'
                    : language === 'pt'
                      ? 'Tecnologias'
                      : 'Technologien'}
                  :
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
