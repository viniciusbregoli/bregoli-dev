export interface Project {
  id: string;
  title: string;
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
  technologies: string[];
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
    title: 'Mobile Robotics',
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
      'Arduino',
      'C/C++',
      'Sensors',
      'Microcontrollers',
      'PID Controllers',
      '3D Printing',
      'CAD Design',
    ],
    color: 'purple',
    icon: 'code',
    gallery: ['/images/projects/mobile-robotics-1.png', '/images/projects/mobile-robotics-2.png'],
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
    title: 'Digital Twin Research',
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
    technologies: ['Python', 'Simulation', 'Data Analysis', 'Digital Twin', 'MATLAB', 'IoT'],
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
    id: 'web-development',
    title: 'Web Application Development',
    description: {
      en: 'Development and maintenance of web applications with Vue.js during internship at Exati Tecnologias. Integration of frontend applications with backend services using Java and NodeJS.',
      pt: 'Desenvolvimento e manutenção de aplicações web com Vue.js durante estágio na Exati Tecnologias. Integração de aplicações frontend com serviços backend usando Java e NodeJS.',
      de: 'Entwicklung und Wartung von Webanwendungen mit Vue.js während des Praktikums bei Exati Tecnologias. Integration von Frontend-Anwendungen mit Backend-Diensten unter Verwendung von Java und NodeJS.',
    },
    detailedDescription: {
      en: 'During my internship at Exati Tecnologias, I was responsible for developing and maintaining web applications using Vue.js. I worked in a dynamic team environment where I gained hands-on experience in modern web development practices and frameworks.\n\nMy primary responsibilities included implementing new features for existing applications, fixing bugs, and optimizing performance. I also worked on integrating frontend applications with backend services, which were primarily developed using Java and NodeJS. This gave me a comprehensive understanding of full-stack development and API communication.\n\nI utilized Git and GitLab for source control, which helped me understand collaborative coding practices. Task management and bug tracking were handled using Youtrack, which improved my organizational skills and ability to work within a structured development environment.\n\nThe experience at Exati Tecnologias provided me with valuable industry experience and deepened my understanding of web development technologies and best practices.',
      pt: 'Durante meu estágio na Exati Tecnologias, fui responsável pelo desenvolvimento e manutenção de aplicações web usando Vue.js. Trabalhei em um ambiente de equipe dinâmico onde adquiri experiência prática em práticas e frameworks de desenvolvimento web moderno.\n\nMinhas principais responsabilidades incluíam implementar novos recursos para aplicações existentes, corrigir bugs e otimizar o desempenho. Também trabalhei na integração de aplicações frontend com serviços backend, que foram desenvolvidos principalmente usando Java e NodeJS. Isso me deu uma compreensão abrangente do desenvolvimento full-stack e comunicação API.\n\nUtilizei Git e GitLab para controle de fonte, o que me ajudou a entender práticas de codificação colaborativa. O gerenciamento de tarefas e rastreamento de bugs foram realizados usando o Youtrack, o que melhorou minhas habilidades organizacionais e capacidade de trabalhar em um ambiente de desenvolvimento estruturado.\n\nA experiência na Exati Tecnologias me proporcionou uma valiosa experiência na indústria e aprofundou meu entendimento de tecnologias e melhores práticas de desenvolvimento web.',
      de: 'Während meines Praktikums bei Exati Tecnologias war ich für die Entwicklung und Wartung von Webanwendungen mit Vue.js verantwortlich. Ich arbeitete in einem dynamischen Teamumfeld, in dem ich praktische Erfahrung mit modernen Webentwicklungspraktiken und Frameworks sammelte.\n\nZu meinen Hauptaufgaben gehörten die Implementierung neuer Funktionen für bestehende Anwendungen, die Behebung von Fehlern und die Optimierung der Leistung. Außerdem arbeitete ich an der Integration von Frontend-Anwendungen mit Backend-Diensten, die hauptsächlich mit Java und NodeJS entwickelt wurden. Dies verschaffte mir ein umfassendes Verständnis der Full-Stack-Entwicklung und API-Kommunikation.\n\nIch verwendete Git und GitLab für die Quellcodeverwaltung, was mir half, kollaborative Codierungspraktiken zu verstehen. Aufgabenmanagement und Fehlerverfolgung wurden mit Youtrack durchgeführt, was meine organisatorischen Fähigkeiten und die Fähigkeit, in einer strukturierten Entwicklungsumgebung zu arbeiten, verbesserte.\n\nDie Erfahrung bei Exati Tecnologias verschaffte mir wertvolle Branchenerfahrung und vertiefte mein Verständnis von Webentwicklungstechnologien und Best Practices.',
    },
    technologies: [
      'Vue.js',
      'Java',
      'NodeJS',
      'PostgreSQL',
      'Git',
      'GitLab',
      'Youtrack',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    color: 'blue',
    icon: 'code',
    startDate: '2022',
    endDate: '2023',
    projectType: {
      en: 'Professional Experience',
      pt: 'Experiência Profissional',
      de: 'Berufserfahrung',
    },
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Management',
    description: {
      en: 'Experience in infrastructure management, remote support, and virtualization during internship at Siemens Energy Brasil. Handled call and ticket management in a high-demand corporate environment.',
      pt: 'Experiência em gerenciamento de infraestrutura, suporte remoto e virtualização durante estágio na Siemens Energy Brasil. Gerenciamento de chamados e tickets em um ambiente corporativo de alta demanda.',
      de: 'Erfahrung im Infrastrukturmanagement, Remote-Support und Virtualisierung während des Praktikums bei Siemens Energy Brasil. Bearbeitung von Anrufen und Tickets in einer anspruchsvollen Unternehmensumgebung.',
    },
    detailedDescription: {
      en: 'During my internship at Siemens Energy Brasil, I gained comprehensive experience in IT infrastructure management within a large corporate environment. This role provided me with insights into how technology supports business operations in a multinational company.\n\nMy responsibilities included infrastructure management, which involved monitoring and maintaining server systems, network configurations, and ensuring system availability. I provided remote support to employees across different locations, troubleshooting hardware and software issues, and resolving technical problems efficiently.\n\nI also worked with virtualization technologies, helping to create and manage virtual machines, optimize resource allocation, and implement virtual infrastructure solutions. This experience gave me practical knowledge of modern virtualization platforms and their role in enterprise IT.\n\nAnother significant aspect of my role was call and ticket management in a high-demand environment. I prioritized and responded to IT support requests, maintained documentation of solutions, and ensured timely resolution of technical issues. This improved my ability to work under pressure and manage multiple priorities effectively.',
      pt: 'Durante meu estágio na Siemens Energy Brasil, obtive experiência abrangente em gerenciamento de infraestrutura de TI em um grande ambiente corporativo. Esta função me proporcionou insights sobre como a tecnologia suporta operações de negócios em uma empresa multinacional.\n\nMinhas responsabilidades incluíam gerenciamento de infraestrutura, que envolvia monitoramento e manutenção de sistemas de servidores, configurações de rede e garantia de disponibilidade do sistema. Forneci suporte remoto a funcionários em diferentes locais, solucionando problemas de hardware e software, e resolvendo problemas técnicos com eficiência.\n\nTambém trabalhei com tecnologias de virtualização, ajudando a criar e gerenciar máquinas virtuais, otimizar a alocação de recursos e implementar soluções de infraestrutura virtual. Esta experiência me deu conhecimento prático de plataformas modernas de virtualização e seu papel na TI empresarial.\n\nOutro aspecto significativo do meu papel foi o gerenciamento de chamados e tickets em um ambiente de alta demanda. Priorizei e respondi a solicitações de suporte de TI, mantive documentação de soluções e garanti a resolução oportuna de problemas técnicos. Isso melhorou minha capacidade de trabalhar sob pressão e gerenciar múltiplas prioridades com eficácia.',
      de: 'Während meines Praktikums bei Siemens Energy Brasil sammelte ich umfassende Erfahrungen im IT-Infrastrukturmanagement innerhalb eines großen Unternehmensumfelds. Diese Rolle gab mir Einblicke, wie Technologie Geschäftsabläufe in einem multinationalen Unternehmen unterstützt.\n\nZu meinen Aufgaben gehörte das Infrastrukturmanagement, das die Überwachung und Wartung von Serversystemen, Netzwerkkonfigurationen und die Sicherstellung der Systemverfügbarkeit umfasste. Ich bot Mitarbeitern an verschiedenen Standorten Remote-Support, behob Hardware- und Softwareprobleme und löste technische Probleme effizient.\n\nIch arbeitete auch mit Virtualisierungstechnologien, half bei der Erstellung und Verwaltung virtueller Maschinen, optimierte die Ressourcenzuweisung und implementierte virtuelle Infrastrukturlösungen. Diese Erfahrung vermittelte mir praktisches Wissen über moderne Virtualisierungsplattformen und ihre Rolle in der Unternehmens-IT.\n\nEin weiterer wichtiger Aspekt meiner Rolle war das Anruf- und Ticket-Management in einer anspruchsvollen Umgebung. Ich priorisierte und reagierte auf IT-Support-Anfragen, führte Dokumentationen von Lösungen und sorgte für eine zeitnahe Behebung technischer Probleme. Dies verbesserte meine Fähigkeit, unter Druck zu arbeiten und mehrere Prioritäten effektiv zu verwalten.',
    },
    technologies: [
      'IT Support',
      'Virtualization',
      'Ticket Management',
      'Corporate IT',
      'Network Management',
      'Remote Troubleshooting',
    ],
    color: 'orange',
    icon: 'code',
    startDate: '2021',
    endDate: '2022',
    projectType: {
      en: 'Professional Experience',
      pt: 'Experiência Profissional',
      de: 'Berufserfahrung',
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
