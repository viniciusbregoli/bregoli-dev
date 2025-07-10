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
    gallery: ['/images/siemens-exp.jpg'],
    startDate: '2021',
    endDate: '2022',
    projectType: {
      en: 'Research Project',
      pt: 'Projeto de Pesquisa',
      de: 'Forschungsprojekt',
    },
  },
  {
    id: 'remote-inference-platform',
    title: {
      en: 'Remote Inference Platform',
      pt: 'Plataforma de Inferência Remota',
      de: 'Remote-Inferenzplattform',
    },
    description: {
      en: 'A full-stack platform for object detection and user management, built in collaboration with THI professors to serve as a foundation for a federated learning system.',
      pt: 'Uma plataforma full-stack para detecção de objetos e gerenciamento de usuários, construída em colaboração com professores da THI para servir como base para um sistema de aprendizado federado.',
      de: 'Eine Full-Stack-Plattform für Objekterkennung und Benutzerverwaltung, die in Zusammenarbeit mit Professoren der THI entwickelt wurde und als Grundlage für ein föderiertes Lernsystem dient.',
    },
    detailedDescription: {
      en: 'Developed in collaboration with professors at THI, this project is a full-stack solution for real-time object detection and AI model management. The high-performance backend is built with FastAPI, leveraging a Redis queue and GPU workers for asynchronous inference with YOLOv8 models. The Next.js frontend acts as a dashboard for managing users and API keys, providing the foundation for a future federated learning server.',
      pt: 'Desenvolvido em colaboração com professores da THI, este projeto é uma solução full-stack para detecção de objetos em tempo real e gerenciamento de modelos de IA. O backend de alto desempenho foi construído com FastAPI, utilizando uma fila Redis e workers de GPU para inferência assíncrona com modelos YOLOv8. O frontend em Next.js atua como um painel para gerenciar usuários e chaves de API, fornecendo a base para um futuro servidor de aprendizado federado.',
      de: 'Dieses in Zusammenarbeit mit Professoren der THI entwickelte Projekt ist eine Full-Stack-Lösung für die Echtzeit-Objekterkennung und das Management von KI-Modellen. Das hochleistungsfähige Backend basiert auf FastAPI und nutzt eine Redis-Warteschlange sowie GPU-Worker für die asynchrone Inferenz mit YOLOv8-Modellen. Das Next.js-Frontend fungiert als Dashboard zur Verwaltung von Benutzern und API-Schlüsseln und bildet die Grundlage für einen zukünftigen föderierten Lernserver.',
    },
    technologies: [
      { en: 'FastAPI', pt: 'FastAPI', de: 'FastAPI' },
      { en: 'Python', pt: 'Python', de: 'Python' },
      { en: 'Next.js', pt: 'Next.js', de: 'Next.js' },
      { en: 'TypeScript', pt: 'TypeScript', de: 'TypeScript' },
      { en: 'PostgreSQL', pt: 'PostgreSQL', de: 'PostgreSQL' },
      { en: 'Redis', pt: 'Redis', de: 'Redis' },
      { en: 'YOLOv8', pt: 'YOLOv8', de: 'YOLOv8' },
    ],
    color: 'teal',
    icon: 'code',
    gallery: ['/images/remote-inference.png', '/images/api.png'],
    links: {
      github: 'https://github.com/viniciusbregoli/remote-inference-api',
    },
    projectType: {
      en: 'Academic Collaboration',
      pt: 'Colaboração Acadêmica',
      de: 'Akademische Zusammenarbeit',
    },
  },
  {
    id: 'sudoku-heuristica',
    title: {
      en: 'Heuristic Sudoku Solver',
      pt: 'Solucionador de Sudoku Heurístico',
      de: 'Heuristischer Sudoku-Löser',
    },
    description: {
      en: 'A Sudoku solver built with Pygame that visualizes and compares heuristic search algorithms like Greedy Search and A*.',
      pt: 'Um solucionador de Sudoku construído com Pygame que visualiza e compara algoritmos de busca heurística como Greedy Search e A*.',
      de: 'Ein mit Pygame erstellter Sudoku-Löser, der heuristische Suchalgorithmen wie Greedy Search und A* visualisiert und vergleicht.',
    },
    detailedDescription: {
      en: 'This project, developed for an Artificial Intelligence course, is a Sudoku solver that uses Python and Pygame to provide a visual interface. It implements and compares two different heuristic search algorithms: Greedy Search and A*. Users can watch the puzzle being solved step-by-step by each algorithm, offering a clear demonstration of their different approaches and efficiencies.',
      pt: 'Este projeto, desenvolvido para uma disciplina de Inteligência Artificial, é um solucionador de Sudoku que utiliza Python e Pygame para fornecer uma interface visual. Ele implementa e compara dois algoritmos de busca heurística diferentes: Greedy Search e A*. Os usuários podem assistir à resolução do quebra-cabeça passo a passo por cada algoritmo, oferecendo uma demonstração clara de suas diferentes abordagens e eficiências.',
      de: 'Dieses Projekt, das für einen Kurs in Künstlicher Intelligenz entwickelt wurde, ist ein Sudoku-Löser, der Python und Pygame verwendet, um eine visuelle Oberfläche bereitzustellen. Es implementiert und vergleicht zwei verschiedene heuristische Suchalgorithmen: Greedy Search und A*. Benutzer können zusehen, wie das Rätsel von jedem Algorithmus schrittweise gelöst wird, was eine klare Demonstration ihrer unterschiedlichen Ansätze und Effizienzen bietet.',
    },
    technologies: [
      { en: 'Python', pt: 'Python', de: 'Python' },
      { en: 'Pygame', pt: 'Pygame', de: 'Pygame' },
      { en: 'Heuristic Algorithms', pt: 'Algoritmos Heurísticos', de: 'Heuristische Algorithmen' },
      { en: 'A* Search', pt: 'Busca A*', de: 'A*-Suche' },
    ],
    color: 'red',
    icon: 'code',
    gallery: ['/images/a_star.gif'],
    links: {
      github: 'https://github.com/viniciusbregoli/sudoku-heuristica',
    },
    projectType: {
      en: 'Academic Project',
      pt: 'Projeto Acadêmico',
      de: 'Akademisches Projekt',
    },
  },
  {
    id: 'bot-equipe-brigadeiro',
    title: {
      en: 'Brigadeiro Sales Bot',
      pt: 'Bot de Venda de Brigadeiro',
      de: 'Brigadeiro-Verkaufsbot',
    },
    description: {
      en: "A WhatsApp chatbot developed to streamline sales for the PUCPR Mobile Robotics Team's fundraising.",
      pt: 'Um chatbot de WhatsApp desenvolvido para otimizar as vendas da equipe de Robótica Móvel da PUCPR para arrecadação de fundos.',
      de: 'Ein WhatsApp-Chatbot, der entwickelt wurde, um den Verkauf für das Fundraising des PUCPR Mobile Robotics Teams zu optimieren.',
    },
    detailedDescription: {
      en: "This project was created to support the PUCPR Mobile Robotics Team's fundraising efforts. It's a WhatsApp chatbot, built with Node.js and the Twilio API, designed to manage the sale of brigadeiros. The bot allows team members to register as sellers, record sales by type and quantity, and manage sales data, which is stored in a PostgreSQL database. The system uses ngrok for local development and testing.",
      pt: 'Este projeto foi criado para apoiar os esforços de arrecadação de fundos da Equipe de Robótica Móvel da PUCPR. É um chatbot de WhatsApp, construído com Node.js e a API da Twilio, projetado para gerenciar a venda de brigadeiros. O bot permite que os membros da equipe se cadastrem como vendedores, registrem vendas por tipo e quantidade e gerenciem os dados das vendas, que são armazenados em um banco de dados PostgreSQL. O sistema utiliza ngrok para desenvolvimento e testes locais.',
      de: 'Dieses Projekt wurde erstellt, um die Spendenaktionen des PUCPR Mobile Robotics Teams zu unterstützen. Es handelt sich um einen WhatsApp-Chatbot, der mit Node.js und der Twilio-API erstellt wurde und für die Verwaltung des Verkaufs von Brigadeiros konzipiert ist. Der Bot ermöglicht es den Teammitgliedern, sich als Verkäufer zu registrieren, Verkäufe nach Art und Menge zu erfassen und Verkaufsdaten zu verwalten, die in einer PostgreSQL-Datenbank gespeichert werden. Das System verwendet ngrok für die lokale Entwicklung und das Testen.',
    },
    technologies: [
      { en: 'Node.js', pt: 'Node.js', de: 'Node.js' },
      { en: 'Twilio', pt: 'Twilio', de: 'Twilio' },
      { en: 'PostgreSQL', pt: 'PostgreSQL', de: 'PostgreSQL' },
      { en: 'JavaScript', pt: 'JavaScript', de: 'JavaScript' },
    ],
    color: 'pink',
    icon: 'code',
    gallery: ['/images/brigadeiro.png'],
    links: {
      github: 'https://github.com/viniciusbregoli/bot-equipe-brigadeiro',
    },
    projectType: {
      en: 'Team Project',
      pt: 'Projeto de Equipe',
      de: 'Teamprojekt',
    },
  },
  {
    id: 'reverso-anki',
    title: {
      en: 'Reverso Anki Helper',
      pt: 'Auxiliar Reverso Anki',
      de: 'Reverso Anki Helfer',
    },
    description: {
      en: 'A Node.js script I use for my German studies. It fetches translations and pronunciations for a list of words and formats them for Anki.',
      pt: 'Um script Node.js que uso para meus estudos de alemão. Ele busca traduções e pronúncias para uma lista de palavras e as formata para o Anki.',
      de: 'Ein Node.js-Skript, das ich für mein Deutschstudium verwende. Es ruft Übersetzungen und Aussprachen für eine Wortliste ab und formatiert sie für Anki.',
    },
    detailedDescription: {
      en: 'This personal project is a Node.js script designed to streamline my German language studies. It takes a list of German words from an input file, uses the Reverso API for translation and the Forvo API to download pronunciations. The script then compiles this information into a format ready to be imported into Anki, automating the process of creating flashcards. I also keep track of all my words in a google sheet, where I add the words and their translations, and the script automatically updates the sheet with the new words and their translations.  ',
      pt: 'Este projeto pessoal é um script Node.js projetado para otimizar meus estudos da língua alemã. Ele pega uma lista de palavras em alemão de um arquivo de entrada, usa a API Reverso para tradução e a API Forvo para baixar as pronúncias. O script então compila essas informações em um formato pronto para ser importado para o Anki, automatizando o processo de criação de flashcards. Eu também mantenho um registro de todas as minhas palavras em uma planilha do Google, onde adiciono as palavras e suas traduções, e o script atualiza automaticamente a planilha com as novas palavras e suas traduções.',
      de: 'Dieses persönliche Projekt ist ein Node.js-Skript, das entwickelt wurde, um mein Deutschstudium zu optimieren. Es verwendet eine Liste deutscher Wörter aus einer Eingabedatei, nutzt die Reverso-API für die Übersetzung und die Forvo-API zum Herunterladen der Aussprache. Das Skript stellt diese Informationen dann in einem Format zusammen, das für den Import in Anki bereit ist, und automatisiert so den Prozess der Erstellung von Lernkarten. Ich halte auch ein Registrierung von allen meinen Wörtern in einer Google-Tabelle, wo ich die Wörter und ihre Übersetzungen hinzufüge und das Skript aktualisiert die Tabelle automatisch mit den neuen Wörtern und ihren Übersetzungen.',
    },
    technologies: [
      { en: 'Node.js', pt: 'Node.js', de: 'Node.js' },
      { en: 'JavaScript', pt: 'JavaScript', de: 'JavaScript' },
      { en: 'REST APIs', pt: 'APIs REST', de: 'REST-APIs' },
    ],
    color: 'yellow',
    icon: 'code',
    gallery: ['/images/vocabulario.png'],
    links: {
      github: 'https://github.com/viniciusbregoli/reverso-anki',
    },
    projectType: {
      en: 'Personal Tool',
      pt: 'Ferramenta Pessoal',
      de: 'Persönliches Werkzeug',
    },
  },
  {
    id: 'compiler-project',
    title: {
      en: 'Lexical and Syntactic Analyzer',
      pt: 'Analisador Léxico e Sintático',
      de: 'Lexikalischer und Syntaktischer Analysator',
    },
    description: {
      en: 'A Python program that performs lexical and syntactic analysis on simple expressions, generating tokens and an abstract syntax tree.',
      pt: 'Um programa em Python que realiza análise léxica e sintática em expressões simples, gerando tokens e uma árvore sintática abstrata.',
      de: 'Ein Python-Programm, das eine lexikalische und syntaktische Analyse einfacher Ausdrücke durchführt und dabei Tokens und einen abstrakten Syntaxbaum generiert.',
    },
    detailedDescription: {
      en: 'Developed for a Compilers course, this project implements the first phases of a compiler. It reads simple mathematical expressions from a text file, performs lexical analysis using a state machine to generate tokens, and then uses a predictive parser to build an abstract syntax tree (AST) for each expression.',
      pt: 'Desenvolvido para uma disciplina de Compiladores, este projeto implementa as fases iniciais de um compilador. Ele lê expressões matemáticas simples de um arquivo de texto, realiza análise léxica usando uma máquina de estados para gerar tokens e, em seguida, usa um analisador preditivo para construir uma árvore sintática abstrata (AST) para cada expressão.',
      de: 'Dieses für einen Compilerbau-Kurs entwickelte Projekt implementiert die ersten Phasen eines Compilers. Es liest einfache mathematische Ausdrücke aus einer Textdatei, führt eine lexikalische Analyse mithilfe eines Zustandsautomaten durch, um Tokens zu generieren, und verwendet dann einen prädiktiven Parser, um für jeden Ausdruck einen abstrakten Syntaxbaum (AST) zu erstellen.',
    },
    technologies: [
      { en: 'Python', pt: 'Python', de: 'Python' },
      { en: 'Compilers', pt: 'Compiladores', de: 'Compiler' },
      { en: 'Lexical Analysis', pt: 'Análise Léxica', de: 'Lexikalische Analyse' },
      { en: 'Syntactic Analysis', pt: 'Análise Sintática', de: 'Syntaktische Analyse' },
    ],
    color: 'cyan',
    icon: 'code',
    gallery: ['/images/state_machine.png'],
    links: {
      github: 'https://github.com/viniciusbregoli/compiler',
    },
    projectType: {
      en: 'Academic Project',
      pt: 'Projeto Acadêmico',
      de: 'Akademisches Projekt',
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
