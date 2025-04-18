export interface Project {
  id: string;
  title: {
    en: string;
    pt: string;
    de: string;
  };
  description: {
    en: string;
    pt: string;
    de: string;
  };
  detailedDescription?: {
    en: string;
    pt: string;
    de: string;
  };
  technologies: {
    en: string;
    pt: string;
    de: string;
  }[];
  color: string;
  icon: 'code' | 'research';
  gallery?: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  startDate?: string;
  endDate?: string;
  projectType?: {
    en: string;
    pt: string;
    de: string;
  };
}

export const projects: Project[] = [
  {
    id: 'mobile-robotics',
    title: {
      en: 'Mobile Robotics',
      pt: 'Robótica Móvel',
      de: 'Mobile Robotik',
    },
    description: {
      en: 'Member of the PUCPR Mobile Robotics Team, contributing to the development of follow-line, sumo, trekking, and combat robots. Participated in competitions like RoboCore Experience (RCX) and IRONCup.',
      pt: 'Membro da Equipe de Robótica Móvel da PUCPR, contribuindo para o desenvolvimento de robôs seguidores de linha, sumô, trekking e combate. Participação em competições como RoboCore Experience (RCX) e IRONCup.',
      de: 'Mitglied des PUCPR Mobile Robotics Teams, Mitwirkung an der Entwicklung von Linienfolge-, Sumo-, Trekking- und Kampfrobotern. Teilnahme an Wettbewerben wie RoboCore Experience (RCX) und IRONCup.',
    },
    detailedDescription: {
      en: 'As a member of the PUCPR Mobile Robotics Team, I had the opportunity to work with a talented group of engineers to design, build, and program various types of robots for competitions. Our team specialized in different robot categories including line followers, sumo robots, trekking robots, and combat robots.\n\nFor line follower robots, I worked on optimizing PID controllers to achieve faster and more accurate line tracking. The sumo robots required robust mechanical design and effective opponent detection strategies. The trekking robots involved advanced navigation algorithms to traverse complex terrains. Finally, the combat robots demanded durable construction and innovative weapon systems.\n\nWe participated in prominent robotics competitions like RoboCore Experience (RCX) and IRONCup, where we had the opportunity to test our creations against other university teams. These experiences helped me develop strong problem-solving skills, teamwork abilities, and practical knowledge of embedded systems programming.',
      pt: 'Como membro da Equipe de Robótica Móvel da PUCPR, tive a oportunidade de trabalhar com um grupo talentoso de engenheiros para projetar, construir e programar vários tipos de robôs para competições. Nossa equipe se especializou em diferentes categorias de robôs, incluindo seguidores de linha, robôs de sumô, robôs de trekking e robôs de combate.\n\nPara os robôs seguidores de linha, trabalhei na otimização de controladores PID para obter um rastreamento de linha mais rápido e preciso. Os robôs de sumô requeriam design mecânico robusto e estratégias eficazes de detecção de oponentes. Os robôs de trekking envolviam algoritmos avançados de navegação para atravessar terrenos complexos. Finalmente, os robôs de combate exigiam construção durável e sistemas de armas inovadores.\n\nParticipamos de importantes competições de robótica como RoboCore Experience (RCX) e IRONCup, onde tivemos a oportunidade de testar nossas criações contra outras equipes universitárias. Essas experiências me ajudaram a desenvolver fortes habilidades de resolução de problemas, capacidades de trabalho em equipe e conhecimento prático de programação de sistemas embarcados.',
      de: 'Als Mitglied des PUCPR Mobile Robotics Teams hatte ich die Gelegenheit, mit einer talentierten Gruppe von Ingenieuren zusammenzuarbeiten, um verschiedene Arten von Robotern für Wettbewerbe zu entwerfen, zu bauen und zu programmieren. Unser Team spezialisierte sich auf verschiedene Roboterkategorien, darunter Linienfolger, Sumo-Roboter, Trekking-Roboter und Kampfroboter.\n\nFür Linienfolger-Roboter arbeitete ich an der Optimierung von PID-Reglern, um eine schnellere und genauere Linienverfolgung zu erreichen. Die Sumo-Roboter erforderten ein robustes mechanisches Design und effektive Strategien zur Gegnererkennung. Die Trekking-Roboter beinhalteten fortschrittliche Navigationsalgorithmen, um komplexes Gelände zu durchqueren. Schließlich erforderten die Kampfroboter eine langlebige Konstruktion und innovative Waffensysteme.\n\nWir nahmen an prominenten Robotik-Wettbewerben wie RoboCore Experience (RCX) und IRONCup teil, wo wir die Gelegenheit hatten, unsere Kreationen gegen andere Universitätsteams zu testen. Diese Erfahrungen halfen mir, starke Problemlösungsfähigkeiten, Teamarbeitsfähigkeiten und praktisches Wissen über die Programmierung eingebetteter Systeme zu entwickeln.',
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
    color: 'purple',
    icon: 'code',
    gallery: ['/images/mobile-robotics-1.png', '/images/mobile-robotics-2.png'],
    startDate: '2021',
    endDate: '2023',
    projectType: {
      en: 'Academic Team Project',
      pt: 'Projeto de Equipe Acadêmica',
      de: 'Akademisches Teamprojekt',
    },
  },
  {
    id: 'digital-twin-research',
    title: {
      en: 'Digital Twin Research',
      pt: 'Pesquisa em Gêmeos Digitais',
      de: 'Digital-Twin-Forschung',
    },
    description: {
      en: 'Scholarship recipient for the Program for Initiation in Technological Development and Innovation 2021, focusing on research innovation related to digital twins and their applications in aerospace projects in partnership with Airbus.',
      pt: 'Bolsista do Programa de Iniciação em Desenvolvimento Tecnológico e Inovação 2021, com foco em pesquisa de inovação relacionada a gêmeos digitais e suas aplicações em projetos aeroespaciais em parceria com a Airbus.',
      de: 'Stipendiat des Programms zur Einführung in die technologische Entwicklung und Innovation 2021, mit Schwerpunkt auf Innovationsforschung zu digitalen Zwillingen und ihren Anwendungen in Luft- und Raumfahrtprojekten in Partnerschaft mit Airbus.',
    },
    detailedDescription: {
      en: 'As a scholarship recipient for the Program for Initiation in Technological Development and Innovation 2021, I conducted research on digital twin technology and its applications in aerospace projects. This research was carried out in partnership with Airbus, providing valuable industry insights and real-world applications.\n\nDigital twins are virtual replicas of physical systems that can be used for simulation, analysis, and optimization. My research focused on developing methodologies for creating accurate digital twins of aerospace components and systems. This involved data collection strategies, sensor integration, real-time data processing, and visualization techniques.\n\nThe project contributed to advancing the understanding of how digital twins can improve design iterations, predict maintenance needs, and optimize performance in aerospace applications. I had the opportunity to work with advanced simulation software, data analytics tools, and collaborate with industry professionals from Airbus.',
      pt: 'Como bolsista do Programa de Iniciação em Desenvolvimento Tecnológico e Inovação 2021, conduzi pesquisas sobre tecnologia de gêmeos digitais e suas aplicações em projetos aeroespaciais. Esta pesquisa foi realizada em parceria com a Airbus, proporcionando valiosos insights da indústria e aplicações do mundo real.\n\nGêmeos digitais são réplicas virtuais de sistemas físicos que podem ser usados para simulação, análise e otimização. Minha pesquisa concentrou-se no desenvolvimento de metodologias para a criação de gêmeos digitais precisos de componentes e sistemas aeroespaciais. Isso envolveu estratégias de coleta de dados, integração de sensores, processamento de dados em tempo real e técnicas de visualização.\n\nO projeto contribuiu para avançar o entendimento de como os gêmeos digitais podem melhorar as iterações de design, prever necessidades de manutenção e otimizar o desempenho em aplicações aeroespaciais. Tive a oportunidade de trabalhar com software avançado de simulação, ferramentas de análise de dados e colaborar com profissionais da indústria da Airbus.',
      de: 'Als Stipendiat des Programms zur Einführung in die technologische Entwicklung und Innovation 2021 führte ich Forschungen zur Digital-Twin-Technologie und ihren Anwendungen in Luft- und Raumfahrtprojekten durch. Diese Forschung wurde in Partnerschaft mit Airbus durchgeführt, was wertvolle Einblicke in die Industrie und reale Anwendungen ermöglichte.\n\nDigitale Zwillinge sind virtuelle Repliken physischer Systeme, die für Simulation, Analyse und Optimierung verwendet werden können. Meine Forschung konzentrierte sich auf die Entwicklung von Methoden zur Erstellung genauer digitaler Zwillinge von Luft- und Raumfahrtkomponenten und -systemen. Dies umfasste Datenerfassungsstrategien, Sensorintegration, Echtzeit-Datenverarbeitung und Visualisierungstechniken.\n\nDas Projekt trug dazu bei, das Verständnis dafür zu verbessern, wie digitale Zwillinge Design-Iterationen verbessern, Wartungsbedarf vorhersagen und die Leistung in Luft- und Raumfahrtanwendungen optimieren können. Ich hatte die Gelegenheit, mit fortschrittlicher Simulationssoftware und Datenanalysetools zu arbeiten und mit Branchenfachleuten von Airbus zusammenzuarbeiten.',
    },
    technologies: [
      {
        en: 'Python',
        pt: 'Python',
        de: 'Python',
      },
      {
        en: 'Simulation',
        pt: 'Simulação',
        de: 'Simulation',
      },
      {
        en: 'Data Analysis',
        pt: 'Análise de Dados',
        de: 'Datenanalyse',
      },
      {
        en: 'Digital Twin',
        pt: 'Gêmeos Digitais',
        de: 'Digitaler Zwilling',
      },
      {
        en: 'MATLAB',
        pt: 'MATLAB',
        de: 'MATLAB',
      },
      {
        en: 'IoT',
        pt: 'IoT',
        de: 'IoT',
      },
    ],
    color: 'green',
    icon: 'research',
    startDate: '2021',
    endDate: '2022',
    projectType: {
      en: 'Research Project',
      pt: 'Projeto de Pesquisa',
      de: 'Forschungsprojekt',
    },
  },
  {
    id: 'bregoli-dev',
    title: {
      en: 'Personal Portfolio Website',
      pt: 'Website de Portfólio Pessoal',
      de: 'Persönliche Portfolio-Website',
    },
    description: {
      en: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a multilingual interface and dynamic project showcase.',
      pt: 'Um site de portfólio moderno e responsivo construído com Next.js e Tailwind CSS, apresentando uma interface multilíngue e exibição dinâmica de projetos.',
      de: 'Eine moderne, responsive Portfolio-Website, erstellt mit Next.js und Tailwind CSS, mit mehrsprachiger Benutzeroberfläche und dynamischer Projektpräsentation.',
    },
    detailedDescription: {
      en: 'This portfolio website showcases my professional journey and projects in a modern, user-friendly interface. Built with Next.js and Tailwind CSS, it features a responsive design that works seamlessly across all devices. The site includes a multilingual interface supporting English, Portuguese, and German, making it accessible to a wider audience.\n\nThe project demonstrates my expertise in modern web development practices, including server-side rendering, responsive design, and internationalization. It serves as both a showcase of my work and a practical demonstration of my technical skills.',
      pt: 'Este site de portfólio apresenta minha jornada profissional e projetos em uma interface moderna e amigável. Construído com Next.js e Tailwind CSS, apresenta um design responsivo que funciona perfeitamente em todos os dispositivos. O site inclui uma interface multilíngue que suporta inglês, português e alemão, tornando-o acessível a um público mais amplo.\n\nO projeto demonstra minha experiência em práticas modernas de desenvolvimento web, incluindo renderização do lado do servidor, design responsivo e internacionalização. Serve tanto como uma vitrine do meu trabalho quanto como uma demonstração prática das minhas habilidades técnicas.',
      de: 'Diese Portfolio-Website präsentiert meinen beruflichen Werdegang und meine Projekte in einer modernen, benutzerfreundlichen Oberfläche. Erstellt mit Next.js und Tailwind CSS, bietet sie ein responsives Design, das nahtlos auf allen Geräten funktioniert. Die Website enthält eine mehrsprachige Benutzeroberfläche, die Englisch, Portugiesisch und Deutsch unterstützt und damit ein breiteres Publikum erreicht.\n\nDas Projekt demonstriert meine Expertise in modernen Webentwicklungspraktiken, einschließlich Server-Side-Rendering, responsivem Design und Internationalisierung. Es dient sowohl als Präsentation meiner Arbeit als auch als praktische Demonstration meiner technischen Fähigkeiten.',
    },
    technologies: [
      {
        en: 'Next.js',
        pt: 'Next.js',
        de: 'Next.js',
      },
      {
        en: 'TypeScript',
        pt: 'TypeScript',
        de: 'TypeScript',
      },
      {
        en: 'Tailwind CSS',
        pt: 'Tailwind CSS',
        de: 'Tailwind CSS',
      },
      {
        en: 'React',
        pt: 'React',
        de: 'React',
      },
      {
        en: 'i18n',
        pt: 'i18n',
        de: 'i18n',
      },
    ],
    color: 'blue',
    icon: 'code',
    links: {
      github: 'https://github.com/viniciusbregoli/bregoli-dev',
      website: 'https://bregoli-dev.vercel.app',
    },
    startDate: '2024',
    projectType: {
      en: 'Personal Project',
      pt: 'Projeto Pessoal',
      de: 'Persönliches Projekt',
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
