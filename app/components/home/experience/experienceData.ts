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
  icon?: 'briefcase' | 'robot' | 'code' | 'server';
  image?: string; // Path to the image that will be shown on the opposite side
}

export function getExperienceData(): ExperienceType[] {
  return [
    {
      company: 'Kinebot',
      position: {
        en: 'Machine Learning and AI Junior Developer',
        pt: 'Desenvolvedor Junior de IA e Machine Learning',
        de: 'Junior Entwickler für KI und Maschinelles Lernen',
      },
      period: {
        en: 'Sept 2025 - Present',
        pt: 'Set 2025 - Atual',
        de: 'Sept 2025 - Heute',
      },
      description: {
        en: 'Working on cutting-edge AI, Machine Learning, and ergonomic solutions. Developing and implementing intelligent algorithms to solve complex automation problems and improve robot decision-making processes.',
        pt: 'Trabalhando em soluções de ponta de IA, Machine Learning e soluções ergonômicas. Desenvolvendo e implementando algoritmos inteligentes para resolver problemas complexos de automação e melhorar processos de tomada de decisão robótica.',
        de: 'Arbeit an modernsten KI-, Machine-Learning- und ergonomischen Lösungen. Entwicklung und Implementierung intelligenter Algorithmen zur Lösung komplexer Automatisierungsprobleme und zur Verbesserung robotergestützter Entscheidungsprozesse.',
      },
      technologies: [
        { en: 'Python', pt: 'Python', de: 'Python' },
        { en: 'Machine Learning', pt: 'Machine Learning', de: 'Maschinelles Lernen' },
        { en: 'Artificial Intelligence', pt: 'IA', de: 'KI' },
        { en: 'Deep Learning', pt: 'Deep Learning', de: 'Deep Learning' },
        { en: 'Computer Vision', pt: 'Visão Computacional', de: 'Computer Vision' },
      ],
      location: 'Brazil',
      icon: 'robot',
      image: '/images/fiep.jpg'
    },
    {
      company: 'Technische Hochschule Ingolstadt',
      position: {
        en: 'Exchange Program - Computer Science & AI',
        pt: 'Intercâmbio - Ciência da Computação e IA',
        de: 'Austauschprogramm - Informatik & KI',
      },
      period: {
        en: 'Sept 2024 - Aug 2025',
        pt: 'Set 2024 - Ago 2025',
        de: 'Sept 2024 - Aug 2025',
      },
      description: {
        en: 'International exchange program focusing on advanced topics in Computer Science and Artificial Intelligence. Gained hands-on experience with German engineering standards and collaborated on international research projects.',
        pt: 'Programa de intercâmbio internacional focado em tópicos avançados de Ciência da Computação e Inteligência Artificial. Experiência prática com padrões de engenharia alemães e colaboração em projetos de pesquisa internacionais.',
        de: 'Internationales Austauschprogramm mit Schwerpunkt auf fortgeschrittenen Themen der Informatik und Künstlichen Intelligenz. Praktische Erfahrung mit deutschen Ingenieurstandards und Mitarbeit an internationalen Forschungsprojekten.',
      },
      technologies: [
        { en: 'AI Principles', pt: 'Princípios de IA', de: 'KI-Prinzipien' },
        { en: 'Computer Science', pt: 'Ciência da Computação', de: 'Informatik' },
        { en: 'German Standards', pt: 'Padrões Alemães', de: 'Deutsche Standards' },
        { en: 'Research', pt: 'Pesquisa', de: 'Forschung' },
      ],
      location: 'Ingolstadt, Germany',
      icon: 'code',
      image: '/images/thi.jpg'
    },
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
      icon: 'code',
      image: '/images/exati-exp.jpg'
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
      icon: 'server',
      image: '/images/siemens-exp.jpg'
    },
    {
      company: 'PUCPR Mobile Robotics',
      position: {
        en: 'Team Member',
        pt: 'Membro da Equipe',
        de: 'Teammitglied',
      },
      period: {
        en: '2021 - 2023',
        pt: '2021 - 2023',
        de: '2021 - 2023',
      },
      description: {
        en: 'Member of the PUCPR Mobile Robotics Team, contributing to the development of follow-line, sumo, trekking, and combat robots. Participated in competitions like RoboCore Experience (RCX) and IRONCup. Worked on optimizing PID controllers for line-following robots, developing robust mechanical designs for sumo robots, implementing advanced navigation algorithms for trekking robots, and creating durable constructions with innovative weapon systems for combat robots.',
        pt: 'Membro da Equipe de Robótica Móvel da PUCPR, contribuindo para o desenvolvimento de robôs seguidores de linha, sumô, trekking e combate. Participação em competições como RoboCore Experience (RCX) e IRONCup. Trabalhou na otimização de controladores PID para robôs seguidores de linha, desenvolvimento de designs mecânicos robustos para robôs sumô, implementação de algoritmos avançados de navegação para robôs trekking e criação de construções duráveis com sistemas de armas inovadores para robôs de combate.',
        de: 'Mitglied des PUCPR Mobile Robotics Teams, Mitwirkung an der Entwicklung von Linienfolge-, Sumo-, Trekking- und Kampfrobotern. Teilnahme an Wettbewerben wie RoboCore Experience (RCX) und IRONCup. Arbeitete an der Optimierung von PID-Reglern für Linienfolger-Roboter, entwickelte robuste mechanische Designs für Sumo-Roboter, implementierte fortschrittliche Navigationsalgorithmen für Trekking-Roboter und erstellte langlebige Konstruktionen mit innovativen Waffensystemen für Kampfroboter.',
      },
      technologies: [
        {
          en: 'Arduino',
          pt: 'Arduino',
          de: 'Arduino',
        },
        {
          en: 'C/C++',
          pt: 'C/C++',
          de: 'C/C++',
        },
        {
          en: 'Sensors',
          pt: 'Sensores',
          de: 'Sensoren',
        },
        {
          en: 'Microcontrollers',
          pt: 'Microcontroladores',
          de: 'Mikrocontroller',
        },
        {
          en: 'PID Controllers',
          pt: 'Controladores PID',
          de: 'PID-Regler',
        },
        {
          en: '3D Printing',
          pt: 'Impressão 3D',
          de: '3D-Druck',
        },
        {
          en: 'CAD Design',
          pt: 'Design CAD',
          de: 'CAD-Design',
        },
      ],
      location: 'Brazil',
      icon: 'robot',
      image: '/images/mobile-robotics-1.png'
    },
  ];
}
