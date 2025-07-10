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
      en: 'As a member of the PUCPR Mobile Robotics Team, I had the opportunity to work with a group of engineers to design, build, and program various types of robots for competitions. Our team specialized in different robot categories including line followers, sumo robots, trekking robots, and combat robots.\n\nFor line follower robots, I worked on optimizing PID controllers to achieve faster and more accurate line tracking. The sumo robots required robust mechanical design and effective opponent detection strategies. The trekking robots involved advanced navigation algorithms to traverse complex terrains. Finally, the combat robots demanded durable construction and innovative weapon systems.\n\nWe participated in robotics competitions like RoboCore Experience (RCX) and IRONCup, where we had the opportunity to test our creations against other university teams. These experiences helped me develop strong problem-solving skills, teamwork abilities, and practical knowledge of embedded systems programming.',
      pt: 'Como membro da Equipe de Robótica Móvel da PUCPR, tive a oportunidade de trabalhar com um grupo de engenheiros para projetar, construir e programar vários tipos de robôs para competições. Nossa equipe se especializou em diferentes categorias de robôs, incluindo seguidores de linha, robôs de sumô, robôs de trekking e robôs de combate.\n\nPara os robôs seguidores de linha, trabalhei na otimização de controladores PID para obter um rastreamento de linha mais rápido e preciso. Os robôs de sumô requeriam design mecânico robusto e estratégias eficazes de detecção de oponentes. Os robôs de trekking envolviam algoritmos avançados de navegação para atravessar terrenos complexos. Finalmente, os robôs de combate exigiam construção durável e sistemas de armas inovadores.\n\nParticipamos de importantes competições de robótica como RoboCore Experience (RCX) e IRONCup, onde tivemos a oportunidade de testar nossas criações contra outras equipes universitárias. Essas experiências me ajudaram a desenvolver fortes habilidades de resolução de problemas, capacidades de trabalho em equipe e conhecimento prático de programação de sistemas embarcados.',
      de: 'Als Mitglied des PUCPR Mobile Robotics Teams hatte ich die Gelegenheit, mit eine Gruppe von Ingenieuren zusammenzuarbeiten, um verschiedene Arten von Robotern für Wettbewerbe zu entwerfen, zu bauen und zu programmieren. Unser Team spezialisierte sich auf verschiedene Roboterkategorien, darunter Linienfolger, Sumo-Roboter, Trekking-Roboter und Kampfroboter.\n\nFür Linienfolger-Roboter arbeitete ich an der Optimierung von PID-Reglern, um eine schnellere und genauere Linienverfolgung zu erreichen. Die Sumo-Roboter erforderten ein robustes mechanisches Design und effektive Strategien zur Gegnererkennung. Die Trekking-Roboter beinhalteten fortschrittliche Navigationsalgorithmen, um komplexes Gelände zu durchqueren. Schließlich erforderten die Kampfroboter eine langlebige Konstruktion und innovative Waffensysteme.\n\nWir nahmen an prominenten Robotik-Wettbewerben wie RoboCore Experience (RCX) und IRONCup teil, wo wir die Gelegenheit hatten, unsere Kreationen gegen andere Universitätsteams zu testen. Diese Erfahrungen halfen mir, starke Problemlösungsfähigkeiten, Teamarbeitsfähigkeiten und praktisches Wissen über die Programmierung eingebetteter Systeme zu entwickeln.',
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
      en: 'A portfolio website built with Next.js and Tailwind CSS, featuring a multilingual interface and dynamic project showcase.',
      pt: 'Um site de portfólio construído com Next.js e Tailwind CSS, apresentando uma interface multilíngue e exibição dinâmica de projetos.',
      de: 'Eine Portfolio-Website, erstellt mit Next.js und Tailwind CSS, mit mehrsprachiger Benutzeroberfläche und dynamischer Projektpräsentation.',
    },
    detailedDescription: {
      en: 'This portfolio website showcases my professional journey and projects. Built with Next.js and Tailwind CSS, it includes a multilingual interface supporting English, Portuguese, and German.\n\nThe project demonstrates my experience in modern web development practices, including server-side rendering, responsive design, and internationalization. It serves as both a showcase of my work and a practical demonstration of my technical skills.',
      pt: 'Este site de portfólio apresenta minha jornada profissional e projetos. Construído com Next.js e Tailwind CSS, inclui uma interface multilíngue que suporta inglês, português e alemão.\n\nO projeto demonstra minha experiência em práticas modernas de desenvolvimento web, incluindo renderização do lado do servidor, design responsivo e internacionalização. Serve tanto como uma vitrine do meu trabalho quanto como uma demonstração prática das minhas habilidades técnicas.',
      de: 'Diese Portfolio-Website präsentiert meinen beruflichen Werdegang und meine Projekte. Erstellt mit Next.js und Tailwind CSS, bietet sie eine mehrsprachige Benutzeroberfläche, die Englisch, Portugiesisch und Deutsch unterstützt.\n\nDas Projekt demonstriert meine Expertise in modernen Webentwicklungspraktiken, einschließlich Server-Side-Rendering, responsivem Design und Internationalisierung. Es dient sowohl als Präsentation meiner Arbeit als auch als praktische Demonstration meiner technischen Fähigkeiten.',
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
    gallery: ['/images/bregoli-dev.png'],
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
  {
    id: 'computer-vision-project',
    title: {
      en: 'Computer Vision Project',
      pt: 'Projeto de Visão Computacional',
      de: 'Computer-Vision-Projekt',
    },
    description: {
      en: 'A real-time computer vision application with advanced image processing, filtering, and hand gesture recognition.',
      pt: 'Uma aplicação de visão computacional em tempo real com processamento avançado de imagem, filtragem e reconhecimento de gestos manuais.',
      de: 'Eine Echtzeit-Computer-Vision-Anwendung mit erweiterter Bildverarbeitung, Filterung und Handgestenerkennung.',
    },
    detailedDescription: {
      en: 'This project is a real-time computer vision application built with Python and OpenCV. It features a range of functionalities, including statistical analysis of image channels, adjustable linear transformations for brightness and contrast, and advanced filters like Gaussian blur, sharpening, and Canny edge detection. A key feature is the real-time hand detection using MediaPipe, which can recognize specific gestures like the Vulcan Salute, triggering special effects. The application is designed for ease of use with automatic camera detection and setup of a virtual camera for use in other applications like OBS. \nThis code was developed as the main project for the class of Computer Vision, taken in THI.',
      pt: 'Este projeto é uma aplicação de visão computacional em tempo real construída com Python e OpenCV. Ele oferece uma gama de funcionalidades, incluindo análise estatística dos canais de imagem, transformações lineares ajustáveis para brilho e contraste, e filtros avançados como desfoque Gaussiano, nitidez e detecção de bordas Canny. Uma característica principal é a detecção de mãos em tempo real usando MediaPipe, que pode reconhecer gestos específicos como a Saudação Vulcana, acionando efeitos especiais. A aplicação é projetada para ser fácil de usar, com detecção automática de câmera e configuração de uma câmera virtual para uso em outras aplicações como o OBS. \nEste código foi desenvolvido como o projeto principal para a disciplina de Visão Computacional, cursada na THI.',
      de: 'Dieses Projekt ist eine Echtzeit-Computer-Vision-Anwendung, die mit Python und OpenCV erstellt wurde. Es verfügt über eine Reihe von Funktionalitäten, einschließlich statistischer Analyse von Bildkanälen, einstellbaren linearen Transformationen für Helligkeit und Kontrast sowie fortschrittlichen Filtern wie Gaußschem Weichzeichner, Schärfen und Canny-Kantenerkennung. Ein Hauptmerkmal ist die Echtzeit-Hand-Erkennung mit MediaPipe, die spezifische Gesten wie den Vulkaniergruß erkennen kann, was spezielle Effekte auslöst. Die Anwendung ist für eine einfache Bedienung konzipiert, mit automatischer Kameraerkennung und Einrichtung einer virtuellen Kamera zur Verwendung in anderen Anwendungen wie OBS. \nDieser Code wurde als Hauptprojekt für den Kurs Computer Vision an der THI entwickelt.',
    },
    technologies: [
      {
        en: 'Python',
        pt: 'Python',
        de: 'Python',
      },
      {
        en: 'OpenCV',
        pt: 'OpenCV',
        de: 'OpenCV',
      },
      {
        en: 'MediaPipe',
        pt: 'MediaPipe',
        de: 'MediaPipe',
      },
      {
        en: 'Image Processing',
        pt: 'Processamento de Imagem',
        de: 'Bildverarbeitung',
      },
      {
        en: 'Gesture Recognition',
        pt: 'Reconhecimento de Gestos',
        de: 'Gestenerkennung',
      },
    ],
    color: 'orange',
    icon: 'code',
    gallery: ['/images/vulcan_salute.png'],
    links: {
      github: 'https://github.com/viniciusbregoli/computer-vision-project',
    },
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
