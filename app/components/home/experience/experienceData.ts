// app/components/home/experience/experienceData.ts
import { Language, LocalizedText } from '../../../(core)/i18n/translations';

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
  technologies: LocalizedText[];
  location: string;
  icon?: 'briefcase' | 'robot' | 'code' | 'server';
  image?: string; // Path to the image that will be shown on the opposite side
}

export function getExperienceData(): ExperienceType[] {
  return [
    {
      company: 'Kinebot',
      position: {
        en: 'AI Engineer & Team Lead',
        pt: 'Engenheiro de IA e Líder de Equipe',
        de: 'KI-Ingenieur & Teamleiter',
        es: 'Ingeniero de IA y Líder de Equipo',
        zh: 'AI 工程师兼团队负责人',
      },
      period: {
        en: 'Sept 2025 - Present',
        pt: 'Set 2025 - Atual',
        de: 'Sept 2025 - Heute',
        es: 'Sept 2025 - Actual',
        zh: '2025年9月 - 至今',
      },
      description: {
        en: 'Leading a small AI team: building agentic AI systems and Python APIs and services on AWS, alongside computer vision and ML pipelines for human pose estimation. I work hands-on with databases and automation that improves how our robots make decisions — mostly from the terminal.',
        pt: 'Liderando uma pequena equipe de IA: construindo sistemas de IA agêntica e APIs e serviços em Python na AWS, além de visão computacional e pipelines de ML para estimativa de pose humana. Trabalho diretamente com bancos de dados e automações que melhoram a tomada de decisão dos nossos robôs — na maior parte do tempo, pelo terminal.',
        de: 'Ich leite ein kleines KI-Team: Aufbau agentischer KI-Systeme sowie APIs und Services in Python auf AWS, dazu Computer Vision und ML-Pipelines zur menschlichen Posenschätzung. Ich arbeite praktisch mit Datenbanken und Automatisierungen, die die Entscheidungsfindung unserer Roboter verbessern — meist direkt im Terminal.',
        es: 'Lidero un pequeño equipo de IA: construyo sistemas de IA agéntica y APIs y servicios en Python sobre AWS, además de visión por computadora y pipelines de ML para estimación de pose humana. Trabajo directamente con bases de datos y automatizaciones que mejoran la toma de decisiones de nuestros robots — la mayor parte del tiempo, desde la terminal.',
        zh: '带领一支小型 AI 团队：在 AWS 上构建智能体（agentic）AI 系统以及 Python 接口和服务，同时负责用于人体姿态估计的计算机视觉与 ML 流水线。我亲自处理数据库以及改进机器人决策的自动化流程——大部分时间都在终端里完成。',
      },
      technologies: [
        { en: 'Python', pt: 'Python', de: 'Python' },
        { en: 'Agentic AI', pt: 'IA Agêntica', de: 'Agentische KI' },
        { en: 'LLMs', pt: 'LLMs', de: 'LLMs' },
        { en: 'Computer Vision', pt: 'Visão Computacional', de: 'Computer Vision' },
        { en: 'AWS', pt: 'AWS', de: 'AWS' },
        { en: 'PostgreSQL', pt: 'PostgreSQL', de: 'PostgreSQL' },
      ],
      location: 'Brazil',
      icon: 'robot',
      image: '/images/fiep.jpg',
    },
    {
      company: 'Technische Hochschule Ingolstadt',
      position: {
        en: 'Exchange Program - Computer Science & AI',
        pt: 'Intercâmbio - Ciência da Computação e IA',
        de: 'Austauschprogramm - Informatik & KI',
        es: 'Programa de Intercambio - Ciencias de la Computación e IA',
        zh: '交换项目 - 计算机科学与人工智能',
      },
      period: {
        en: 'Sept 2024 - Aug 2025',
        pt: 'Set 2024 - Ago 2025',
        de: 'Sept 2024 - Aug 2025',
        es: 'Sept 2024 - Ago 2025',
        zh: '2024年9月 - 2025年8月',
      },
      description: {
        en: 'International exchange program focusing on advanced topics in Computer Science and Artificial Intelligence. Gained hands-on experience with German engineering standards and collaborated on international research projects.',
        pt: 'Programa de intercâmbio internacional focado em tópicos avançados de Ciência da Computação e Inteligência Artificial. Experiência prática com padrões de engenharia alemães e colaboração em projetos de pesquisa internacionais.',
        de: 'Internationales Austauschprogramm mit Schwerpunkt auf fortgeschrittenen Themen der Informatik und Künstlichen Intelligenz. Praktische Erfahrung mit deutschen Ingenieurstandards und Mitarbeit an internationalen Forschungsprojekten.',
        es: 'Programa de intercambio internacional centrado en temas avanzados de Ciencias de la Computación e Inteligencia Artificial. Adquirí experiencia práctica con los estándares de ingeniería alemanes y colaboré en proyectos de investigación internacionales.',
        zh: '专注于计算机科学与人工智能高级主题的国际交换项目。亲身体验了德国工程标准，并参与了国际研究项目的合作。',
      },
      technologies: [
        { en: 'AI Principles', pt: 'Princípios de IA', de: 'KI-Prinzipien' },
        { en: 'Computer Science', pt: 'Ciência da Computação', de: 'Informatik' },
        { en: 'German Standards', pt: 'Padrões Alemães', de: 'Deutsche Standards' },
        { en: 'Research', pt: 'Pesquisa', de: 'Forschung' },
      ],
      location: 'Ingolstadt, Germany',
      icon: 'code',
      image: '/images/thi.jpg',
    },
    {
      company: 'Exati Tecnologias',
      position: {
        en: 'Web Development Intern',
        pt: 'Estagiário de Desenvolvimento Web',
        de: 'Praktikant für Webentwicklung',
        es: 'Pasante de Desarrollo Web',
        zh: 'Web 开发实习生',
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
        es: 'Desarrollo y mantenimiento de aplicaciones web con Vue.js. Integración de aplicaciones frontend con servicios backend usando Java y NodeJS. Creación y gestión de bases de datos con PostgreSQL. Uso de Git y GitLab como control de versiones. Gestión de tareas y seguimiento de errores y tareas con Youtrack.',
        zh: '使用 Vue.js 开发和维护 Web 应用程序。使用 Java 和 NodeJS 将前端应用与后端服务集成。使用 PostgreSQL 创建和管理数据库。使用 Git 和 GitLab 进行版本控制。使用 Youtrack 进行任务管理以及缺陷和任务跟踪。',
      },
      technologies: [
        { en: 'Vue.js', pt: 'Vue.js', de: 'Vue.js' },
        { en: 'Java', pt: 'Java', de: 'Java' },
        { en: 'NodeJS', pt: 'NodeJS', de: 'NodeJS' },
        { en: 'PostgreSQL', pt: 'PostgreSQL', de: 'PostgreSQL' },
        { en: 'Git', pt: 'Git', de: 'Git' },
        { en: 'GitLab', pt: 'GitLab', de: 'GitLab' },
        { en: 'Youtrack', pt: 'Youtrack', de: 'Youtrack' },
      ],
      location: 'Brazil',
      icon: 'code',
      image: '/images/exati-exp.jpg',
    },
    {
      company: 'Siemens Energy Brasil',
      position: {
        en: 'IT Infrastructure Intern',
        pt: 'Estagiário de Infraestrutura de TI',
        de: 'Praktikant für IT-Infrastruktur',
        es: 'Pasante de Infraestructura de TI',
        zh: 'IT 基础设施实习生',
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
        es: 'Gestión de infraestructura en una gran corporación, lo que me permitió desarrollar habilidades técnicas y de gestión de problemas en un entorno de alta exigencia. Mis responsabilidades incluían la gestión de infraestructura, soporte remoto, virtualización y gestión de llamadas y tickets.',
        zh: '在一家大型企业负责基础设施管理，使我能够在高需求的环境中培养技术与问题管理能力。我的职责包括基础设施管理、远程支持、虚拟化以及来电和工单管理。',
      },
      technologies: [
        { en: 'IT Support', pt: 'Suporte de TI', de: 'IT-Support' },
        { en: 'Virtualization', pt: 'Virtualização', de: 'Virtualisierung' },
        { en: 'Ticket Management', pt: 'Gerenciamento de Tickets', de: 'Ticket-Management' },
        { en: 'Corporate IT', pt: 'TI Corporativa', de: 'Unternehmens-IT' },
        { en: 'Network Management', pt: 'Gerenciamento de Rede', de: 'Netzwerkmanagement' },
      ],
      location: 'Brazil',
      icon: 'server',
      image: '/images/siemens-exp.jpg',
    },
    {
      company: 'PUCPR Mobile Robotics',
      position: {
        en: 'Team Member',
        pt: 'Membro da Equipe',
        de: 'Teammitglied',
        es: 'Miembro del Equipo',
        zh: '团队成员',
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
        es: 'Miembro del Equipo de Robótica Móvil de la PUCPR, contribuyendo al desarrollo de robots seguidores de línea, de sumo, de trekking y de combate. Participé en competencias como RoboCore Experience (RCX) e IRONCup. Trabajé en la optimización de controladores PID para robots seguidores de línea, en el desarrollo de diseños mecánicos robustos para robots de sumo, en la implementación de algoritmos avanzados de navegación para robots de trekking y en la creación de construcciones duraderas con sistemas de armas innovadores para robots de combate.',
        zh: 'PUCPR 移动机器人团队成员，参与循线、相扑、徒步和格斗机器人的开发。参加了 RoboCore Experience (RCX) 和 IRONCup 等比赛。负责优化循线机器人的 PID 控制器、为相扑机器人开发坚固的机械设计、为徒步机器人实现先进的导航算法，并为格斗机器人打造带有创新武器系统的耐用结构。',
      },
      technologies: [
        { en: 'Arduino', pt: 'Arduino', de: 'Arduino' },
        { en: 'C/C++', pt: 'C/C++', de: 'C/C++' },
        { en: 'Sensors', pt: 'Sensores', de: 'Sensoren' },
        { en: 'Microcontrollers', pt: 'Microcontroladores', de: 'Mikrocontroller' },
        { en: 'PID Controllers', pt: 'Controladores PID', de: 'PID-Regler' },
        { en: '3D Printing', pt: 'Impressão 3D', de: '3D-Druck' },
        { en: 'CAD Design', pt: 'Design CAD', de: 'CAD-Design' },
      ],
      location: 'Brazil',
      icon: 'robot',
      image: '/images/mobile-robotics-1.png',
    },
  ];
}
