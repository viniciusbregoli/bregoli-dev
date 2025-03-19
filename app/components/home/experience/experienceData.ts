// app/components/home/experience/experienceData.ts
import { Language } from '../../../(core)/i18n/translations';

export interface ExperienceType {
  company: string;
  position: {
    [key in Language]?: string;
  };
  period: {
    [key in Language]?: string;
  };
  description: {
    [key in Language]?: string;
  };
  technologies: {
    en: string;
    pt: string;
    de: string;
  }[];
  location: string;
}

export function getExperienceData(): ExperienceType[] {
  return [
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
      technologies: [
        {
          en: 'Vue.js',
          pt: 'Vue.js',
          de: 'Vue.js',
        },
        {
          en: 'Java',
          pt: 'Java',
          de: 'Java',
        },
        {
          en: 'NodeJS',
          pt: 'NodeJS',
          de: 'NodeJS',
        },
        {
          en: 'PostgreSQL',
          pt: 'PostgreSQL',
          de: 'PostgreSQL',
        },
        {
          en: 'Git',
          pt: 'Git',
          de: 'Git',
        },
        {
          en: 'GitLab',
          pt: 'GitLab',
          de: 'GitLab',
        },
        {
          en: 'Youtrack',
          pt: 'Youtrack',
          de: 'Youtrack',
        },
      ],
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
        {
          en: 'IT Support',
          pt: 'Suporte de TI',
          de: 'IT-Support',
        },
        {
          en: 'Virtualization',
          pt: 'Virtualização',
          de: 'Virtualisierung',
        },
        {
          en: 'Ticket Management',
          pt: 'Gerenciamento de Tickets',
          de: 'Ticket-Management',
        },
        {
          en: 'Corporate IT',
          pt: 'TI Corporativa',
          de: 'Unternehmens-IT',
        },
        {
          en: 'Network Management',
          pt: 'Gerenciamento de Rede',
          de: 'Netzwerkmanagement',
        },
      ],
      location: 'Brazil',
    },
  ];
}
