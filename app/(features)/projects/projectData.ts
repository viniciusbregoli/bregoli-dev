import { LocalizedText } from '../../(core)/i18n/translations';

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  detailedDescription?: LocalizedText;
  technologies: LocalizedText[];
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
  projectType?: LocalizedText;
}

export const projects: Project[] = [
  {
    id: 'bregoli-dev',
    title: {
      en: 'Personal Portfolio Website',
      pt: 'Website de Portfólio Pessoal',
      de: 'Persönliche Portfolio-Website',
      es: 'Sitio Web de Portafolio Personal',
      zh: '个人作品集网站',
    },
    description: {
      en: 'A portfolio website built with Next.js and Tailwind CSS, featuring a multilingual interface and dynamic project showcase.',
      pt: 'Um site de portfólio construído com Next.js e Tailwind CSS, apresentando uma interface multilíngue e exibição dinâmica de projetos.',
      de: 'Eine Portfolio-Website, erstellt mit Next.js und Tailwind CSS, mit mehrsprachiger Benutzeroberfläche und dynamischer Projektpräsentation.',
      es: 'Un sitio web de portafolio construido con Next.js y Tailwind CSS, con una interfaz multilingüe y una exhibición dinámica de proyectos.',
      zh: '一个使用 Next.js 和 Tailwind CSS 构建的作品集网站，具有多语言界面和动态项目展示。',
    },
    detailedDescription: {
      en: 'This portfolio website showcases my professional journey and projects. Built with Next.js and Tailwind CSS, it includes a multilingual interface supporting English, Portuguese, and German.\n\nThe project demonstrates my experience in modern web development practices, including server-side rendering, responsive design, and internationalization. It serves as both a showcase of my work and a practical demonstration of my technical skills.',
      pt: 'Este site de portfólio apresenta minha jornada profissional e projetos. Construído com Next.js e Tailwind CSS, inclui uma interface multilíngue que suporta inglês, português e alemão.\n\nO projeto demonstra minha experiência em práticas modernas de desenvolvimento web, incluindo renderização do lado do servidor, design responsivo e internacionalização. Serve tanto como uma vitrine do meu trabalho quanto como uma demonstração prática das minhas habilidades técnicas.',
      de: 'Diese Portfolio-Website präsentiert meinen beruflichen Werdegang und meine Projekte. Erstellt mit Next.js und Tailwind CSS, bietet sie eine mehrsprachige Benutzeroberfläche, die Englisch, Portugiesisch und Deutsch unterstützt.\n\nDas Projekt demonstriert meine Expertise in modernen Webentwicklungspraktiken, einschließlich Server-Side-Rendering, responsivem Design und Internationalisierung. Es dient sowohl als Präsentation meiner Arbeit als auch als praktische Demonstration meiner technischen Fähigkeiten.',
      es: 'Este sitio web de portafolio muestra mi trayectoria profesional y mis proyectos. Construido con Next.js y Tailwind CSS, incluye una interfaz multilingüe compatible con inglés, portugués y alemán.\n\nEl proyecto demuestra mi experiencia en prácticas modernas de desarrollo web, incluyendo renderizado del lado del servidor, diseño responsivo e internacionalización. Sirve tanto como una vitrina de mi trabajo como una demostración práctica de mis habilidades técnicas.',
      zh: '这个作品集网站展示了我的职业历程和项目。它使用 Next.js 和 Tailwind CSS 构建，包含支持英语、葡萄牙语和德语的多语言界面。\n\n该项目展示了我在现代 Web 开发实践方面的经验，包括服务器端渲染、响应式设计和国际化。它既是我作品的展示，也是我技术能力的实际体现。',
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
      es: 'Proyecto Personal',
      zh: '个人项目',
    },
  },
  {
    id: 'computer-vision-project',
    title: {
      en: 'Computer Vision Project',
      pt: 'Projeto de Visão Computacional',
      de: 'Computer-Vision-Projekt',
      es: 'Proyecto de Visión por Computadora',
      zh: '计算机视觉项目',
    },
    description: {
      en: 'A real-time computer vision application with advanced image processing, filtering, and hand gesture recognition.',
      pt: 'Uma aplicação de visão computacional em tempo real com processamento avançado de imagem, filtragem e reconhecimento de gestos manuais.',
      de: 'Eine Echtzeit-Computer-Vision-Anwendung mit erweiterter Bildverarbeitung, Filterung und Handgestenerkennung.',
      es: 'Una aplicación de visión por computadora en tiempo real con procesamiento avanzado de imágenes, filtrado y reconocimiento de gestos de las manos.',
      zh: '一款实时计算机视觉应用程序，具备高级图像处理、滤镜和手势识别功能。',
    },
    detailedDescription: {
      en: 'This project is a real-time computer vision application built with Python and OpenCV. It features a range of functionalities, including statistical analysis of image channels, adjustable linear transformations for brightness and contrast, and advanced filters like Gaussian blur, sharpening, and Canny edge detection. A key feature is the real-time hand detection using MediaPipe, which can recognize specific gestures like the Vulcan Salute, triggering special effects. The application is designed for ease of use with automatic camera detection and setup of a virtual camera for use in other applications like OBS. \nThis code was developed as the main project for the class of Computer Vision, taken in THI.',
      pt: 'Este projeto é uma aplicação de visão computacional em tempo real construída com Python e OpenCV. Ele oferece uma gama de funcionalidades, incluindo análise estatística dos canais de imagem, transformações lineares ajustáveis para brilho e contraste, e filtros avançados como desfoque Gaussiano, nitidez e detecção de bordas Canny. Uma característica principal é a detecção de mãos em tempo real usando MediaPipe, que pode reconhecer gestos específicos como a Saudação Vulcana, acionando efeitos especiais. A aplicação é projetada para ser fácil de usar, com detecção automática de câmera e configuração de uma câmera virtual para uso em outras aplicações como o OBS. \nEste código foi desenvolvido como o projeto principal para a disciplina de Visão Computacional, cursada na THI.',
      de: 'Dieses Projekt ist eine Echtzeit-Computer-Vision-Anwendung, die mit Python und OpenCV erstellt wurde. Es verfügt über eine Reihe von Funktionalitäten, einschließlich statistischer Analyse von Bildkanälen, einstellbaren linearen Transformationen für Helligkeit und Kontrast sowie fortschrittlichen Filtern wie Gaußschem Weichzeichner, Schärfen und Canny-Kantenerkennung. Ein Hauptmerkmal ist die Echtzeit-Hand-Erkennung mit MediaPipe, die spezifische Gesten wie den Vulkaniergruß erkennen kann, was spezielle Effekte auslöst. Die Anwendung ist für eine einfache Bedienung konzipiert, mit automatischer Kameraerkennung und Einrichtung einer virtuellen Kamera zur Verwendung in anderen Anwendungen wie OBS. \nDieser Code wurde als Hauptprojekt für den Kurs Computer Vision an der THI entwickelt.',
      es: 'Este proyecto es una aplicación de visión por computadora en tiempo real construida con Python y OpenCV. Ofrece una variedad de funcionalidades, incluyendo el análisis estadístico de los canales de imagen, transformaciones lineales ajustables para brillo y contraste, y filtros avanzados como el desenfoque Gaussiano, el enfoque y la detección de bordes Canny. Una característica clave es la detección de manos en tiempo real mediante MediaPipe, que puede reconocer gestos específicos como el Saludo Vulcano, activando efectos especiales. La aplicación está diseñada para ser fácil de usar, con detección automática de la cámara y la configuración de una cámara virtual para su uso en otras aplicaciones como OBS. \nEste código fue desarrollado como el proyecto principal de la asignatura de Visión por Computadora, cursada en THI.',
      zh: '该项目是一款使用 Python 和 OpenCV 构建的实时计算机视觉应用程序。它提供了一系列功能，包括图像通道的统计分析、可调节的亮度和对比度线性变换，以及 Gaussian 模糊、锐化和 Canny 边缘检测等高级滤镜。其核心功能是使用 MediaPipe 进行实时手部检测，能够识别 Vulcan Salute 等特定手势并触发特效。该应用程序设计注重易用性，具备自动摄像头检测功能，并可设置虚拟摄像头以供 OBS 等其他应用程序使用。 \n这段代码是为在 THI 修读的计算机视觉课程开发的主要项目。',
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
      es: 'Proyecto Personal',
      zh: '个人项目',
    },
  },
  {
    id: 'digital-twin-research',
    title: {
      en: 'Digital Twin Research',
      pt: 'Pesquisa em Gêmeos Digitais',
      de: 'Digital-Twin-Forschung',
      es: 'Investigación sobre Gemelos Digitales',
      zh: '数字孪生研究',
    },
    description: {
      en: 'Scholarship recipient for the Program for Initiation in Technological Development and Innovation 2021, focusing on research innovation related to digital twins and their applications in aerospace projects in partnership with Airbus.',
      pt: 'Bolsista do Programa de Iniciação em Desenvolvimento Tecnológico e Inovação 2021, com foco em pesquisa de inovação relacionada a gêmeos digitais e suas aplicações em projetos aeroespaciais em parceria com a Airbus.',
      de: 'Stipendiat des Programms zur Einführung in die technologische Entwicklung und Innovation 2021, mit Schwerpunkt auf Innovationsforschung zu digitalen Zwillingen und ihren Anwendungen in Luft- und Raumfahrtprojekten in Partnerschaft mit Airbus.',
      es: 'Becario del Programa de Iniciación al Desarrollo Tecnológico y la Innovación 2021, centrado en la investigación e innovación relacionada con los gemelos digitales y sus aplicaciones en proyectos aeroespaciales en colaboración con Airbus.',
      zh: '2021 年技术开发与创新启蒙计划的奖学金获得者，专注于数字孪生及其在航空航天项目中应用的创新研究，并与 Airbus 合作开展。',
    },
    detailedDescription: {
      en: 'As a scholarship recipient for the Program for Initiation in Technological Development and Innovation 2021, I conducted research on digital twin technology and its applications in aerospace projects. This research was carried out in partnership with Airbus, providing valuable industry insights and real-world applications.\n\nDigital twins are virtual replicas of physical systems that can be used for simulation, analysis, and optimization. My research focused on developing methodologies for creating accurate digital twins of aerospace components and systems. This involved data collection strategies, sensor integration, real-time data processing, and visualization techniques.\n\nThe project contributed to advancing the understanding of how digital twins can improve design iterations, predict maintenance needs, and optimize performance in aerospace applications. I had the opportunity to work with advanced simulation software, data analytics tools, and collaborate with industry professionals from Airbus.',
      pt: 'Como bolsista do Programa de Iniciação em Desenvolvimento Tecnológico e Inovação 2021, conduzi pesquisas sobre tecnologia de gêmeos digitais e suas aplicações em projetos aeroespaciais. Esta pesquisa foi realizada em parceria com a Airbus, proporcionando valiosos insights da indústria e aplicações do mundo real.\n\nGêmeos digitais são réplicas virtuais de sistemas físicos que podem ser usados para simulação, análise e otimização. Minha pesquisa concentrou-se no desenvolvimento de metodologias para a criação de gêmeos digitais precisos de componentes e sistemas aeroespaciais. Isso envolveu estratégias de coleta de dados, integração de sensores, processamento de dados em tempo real e técnicas de visualização.\n\nO projeto contribuiu para avançar o entendimento de como os gêmeos digitais podem melhorar as iterações de design, prever necessidades de manutenção e otimizar o desempenho em aplicações aeroespaciais. Tive a oportunidade de trabalhar com software avançado de simulação, ferramentas de análise de dados e colaborar com profissionais da indústria da Airbus.',
      de: 'Als Stipendiat des Programms zur Einführung in die technologische Entwicklung und Innovation 2021 führte ich Forschungen zur Digital-Twin-Technologie und ihren Anwendungen in Luft- und Raumfahrtprojekten durch. Diese Forschung wurde in Partnerschaft mit Airbus durchgeführt, was wertvolle Einblicke in die Industrie und reale Anwendungen ermöglichte.\n\nDigitale Zwillinge sind virtuelle Repliken physischer Systeme, die für Simulation, Analyse und Optimierung verwendet werden können. Meine Forschung konzentrierte sich auf die Entwicklung von Methoden zur Erstellung genauer digitaler Zwillinge von Luft- und Raumfahrtkomponenten und -systemen. Dies umfasste Datenerfassungsstrategien, Sensorintegration, Echtzeit-Datenverarbeitung und Visualisierungstechniken.\n\nDas Projekt trug dazu bei, das Verständnis dafür zu verbessern, wie digitale Zwillinge Design-Iterationen verbessern, Wartungsbedarf vorhersagen und die Leistung in Luft- und Raumfahrtanwendungen optimieren können. Ich hatte die Gelegenheit, mit fortschrittlicher Simulationssoftware und Datenanalysetools zu arbeiten und mit Branchenfachleuten von Airbus zusammenzuarbeiten.',
      es: 'Como becario del Programa de Iniciación al Desarrollo Tecnológico y la Innovación 2021, realicé investigaciones sobre la tecnología de gemelos digitales y sus aplicaciones en proyectos aeroespaciales. Esta investigación se llevó a cabo en colaboración con Airbus, lo que proporcionó valiosas perspectivas de la industria y aplicaciones del mundo real.\n\nLos gemelos digitales son réplicas virtuales de sistemas físicos que pueden utilizarse para simulación, análisis y optimización. Mi investigación se centró en el desarrollo de metodologías para crear gemelos digitales precisos de componentes y sistemas aeroespaciales. Esto involucró estrategias de recopilación de datos, integración de sensores, procesamiento de datos en tiempo real y técnicas de visualización.\n\nEl proyecto contribuyó a avanzar en la comprensión de cómo los gemelos digitales pueden mejorar las iteraciones de diseño, predecir necesidades de mantenimiento y optimizar el rendimiento en aplicaciones aeroespaciales. Tuve la oportunidad de trabajar con software avanzado de simulación y herramientas de análisis de datos, y de colaborar con profesionales de la industria de Airbus.',
      zh: '作为 2021 年技术开发与创新启蒙计划的奖学金获得者，我开展了关于数字孪生技术及其在航空航天项目中应用的研究。这项研究与 Airbus 合作进行，提供了宝贵的行业洞见和实际应用经验。\n\n数字孪生是物理系统的虚拟复制品，可用于仿真、分析和优化。我的研究专注于开发用于创建精确的航空航天部件和系统数字孪生的方法。这涉及数据采集策略、传感器集成、实时数据处理和可视化技术。\n\n该项目有助于加深对数字孪生如何改进设计迭代、预测维护需求以及优化航空航天应用性能的理解。我有机会使用先进的仿真软件和数据分析工具，并与来自 Airbus 的行业专业人士合作。',
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
      es: 'Proyecto de Investigación',
      zh: '研究项目',
    },
  },
  {
    id: 'remote-inference-platform',
    title: {
      en: 'Remote Inference Platform',
      pt: 'Plataforma de Inferência Remota',
      de: 'Remote-Inferenzplattform',
      es: 'Plataforma de Inferencia Remota',
      zh: '远程推理平台',
    },
    description: {
      en: 'A full-stack platform for object detection and user management, built in collaboration with THI professors to serve as a foundation for a federated learning system.',
      pt: 'Uma plataforma full-stack para detecção de objetos e gerenciamento de usuários, construída em colaboração com professores da THI para servir como base para um sistema de aprendizado federado.',
      de: 'Eine Full-Stack-Plattform für Objekterkennung und Benutzerverwaltung, die in Zusammenarbeit mit Professoren der THI entwickelt wurde und als Grundlage für ein föderiertes Lernsystem dient.',
      es: 'Una plataforma full-stack para la detección de objetos y la gestión de usuarios, desarrollada en colaboración con profesores de THI para servir como base de un sistema de aprendizaje federado.',
      zh: '一个用于目标检测和用户管理的全栈平台，与 THI 的教授合作构建，旨在为联邦学习系统奠定基础。',
    },
    detailedDescription: {
      en: 'Developed in collaboration with professors at THI, this project is a full-stack solution for real-time object detection and AI model management. The high-performance backend is built with FastAPI, leveraging a Redis queue and GPU workers for asynchronous inference with YOLOv8 models. The Next.js frontend acts as a dashboard for managing users and API keys, providing the foundation for a future federated learning server.',
      pt: 'Desenvolvido em colaboração com professores da THI, este projeto é uma solução full-stack para detecção de objetos em tempo real e gerenciamento de modelos de IA. O backend de alto desempenho foi construído com FastAPI, utilizando uma fila Redis e workers de GPU para inferência assíncrona com modelos YOLOv8. O frontend em Next.js atua como um painel para gerenciar usuários e chaves de API, fornecendo a base para um futuro servidor de aprendizado federado.',
      de: 'Dieses in Zusammenarbeit mit Professoren der THI entwickelte Projekt ist eine Full-Stack-Lösung für die Echtzeit-Objekterkennung und das Management von KI-Modellen. Das hochleistungsfähige Backend basiert auf FastAPI und nutzt eine Redis-Warteschlange sowie GPU-Worker für die asynchrone Inferenz mit YOLOv8-Modellen. Das Next.js-Frontend fungiert als Dashboard zur Verwaltung von Benutzern und API-Schlüsseln und bildet die Grundlage für einen zukünftigen föderierten Lernserver.',
      es: 'Desarrollado en colaboración con profesores de THI, este proyecto es una solución full-stack para la detección de objetos en tiempo real y la gestión de modelos de IA. El backend de alto rendimiento está construido con FastAPI, aprovechando una cola Redis y workers de GPU para la inferencia asíncrona con modelos YOLOv8. El frontend en Next.js funciona como un panel de control para gestionar usuarios y claves de API, proporcionando la base para un futuro servidor de aprendizaje federado.',
      zh: '该项目与 THI 的教授合作开发，是一套用于实时目标检测和 AI 模型管理的全栈解决方案。高性能后端基于 FastAPI 构建，利用 Redis 队列和 GPU worker 通过 YOLOv8 模型实现异步推理。Next.js 前端作为管理用户和 API 密钥的仪表板，为未来的联邦学习服务器奠定了基础。',
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
      es: 'Colaboración Académica',
      zh: '学术合作',
    },
  },
  {
    id: 'sudoku-heuristica',
    title: {
      en: 'Heuristic Sudoku Solver',
      pt: 'Solucionador de Sudoku Heurístico',
      de: 'Heuristischer Sudoku-Löser',
      es: 'Solucionador de Sudoku Heurístico',
      zh: '启发式数独求解器',
    },
    description: {
      en: 'A Sudoku solver built with Pygame that visualizes and compares heuristic search algorithms like Greedy Search and A*.',
      pt: 'Um solucionador de Sudoku construído com Pygame que visualiza e compara algoritmos de busca heurística como Greedy Search e A*.',
      de: 'Ein mit Pygame erstellter Sudoku-Löser, der heuristische Suchalgorithmen wie Greedy Search und A* visualisiert und vergleicht.',
      es: 'Un solucionador de Sudoku construido con Pygame que visualiza y compara algoritmos de búsqueda heurística como Greedy Search y A*.',
      zh: '一个使用 Pygame 构建的数独求解器，可视化并比较 Greedy Search 和 A* 等启发式搜索算法。',
    },
    detailedDescription: {
      en: 'This project, developed for an Artificial Intelligence course, is a Sudoku solver that uses Python and Pygame to provide a visual interface. It implements and compares two different heuristic search algorithms: Greedy Search and A*. Users can watch the puzzle being solved step-by-step by each algorithm, offering a clear demonstration of their different approaches and efficiencies.',
      pt: 'Este projeto, desenvolvido para uma disciplina de Inteligência Artificial, é um solucionador de Sudoku que utiliza Python e Pygame para fornecer uma interface visual. Ele implementa e compara dois algoritmos de busca heurística diferentes: Greedy Search e A*. Os usuários podem assistir à resolução do quebra-cabeça passo a passo por cada algoritmo, oferecendo uma demonstração clara de suas diferentes abordagens e eficiências.',
      de: 'Dieses Projekt, das für einen Kurs in Künstlicher Intelligenz entwickelt wurde, ist ein Sudoku-Löser, der Python und Pygame verwendet, um eine visuelle Oberfläche bereitzustellen. Es implementiert und vergleicht zwei verschiedene heuristische Suchalgorithmen: Greedy Search und A*. Benutzer können zusehen, wie das Rätsel von jedem Algorithmus schrittweise gelöst wird, was eine klare Demonstration ihrer unterschiedlichen Ansätze und Effizienzen bietet.',
      es: 'Este proyecto, desarrollado para una asignatura de Inteligencia Artificial, es un solucionador de Sudoku que utiliza Python y Pygame para ofrecer una interfaz visual. Implementa y compara dos algoritmos de búsqueda heurística diferentes: Greedy Search y A*. Los usuarios pueden ver cómo cada algoritmo resuelve el rompecabezas paso a paso, lo que ofrece una demostración clara de sus distintos enfoques y eficiencias.',
      zh: '该项目为一门人工智能课程开发，是一个使用 Python 和 Pygame 提供可视化界面的数独求解器。它实现并比较了两种不同的启发式搜索算法：Greedy Search 和 A*。用户可以观看每种算法逐步求解谜题的过程，从而清晰地展示它们不同的方法和效率。',
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
      es: 'Proyecto Académico',
      zh: '学术项目',
    },
  },
  {
    id: 'bot-equipe-brigadeiro',
    title: {
      en: 'Brigadeiro Sales Bot',
      pt: 'Bot de Venda de Brigadeiro',
      de: 'Brigadeiro-Verkaufsbot',
      es: 'Bot de Ventas de Brigadeiro',
      zh: 'Brigadeiro 销售机器人',
    },
    description: {
      en: "A WhatsApp chatbot developed to streamline sales for the PUCPR Mobile Robotics Team's fundraising.",
      pt: 'Um chatbot de WhatsApp desenvolvido para otimizar as vendas da equipe de Robótica Móvel da PUCPR para arrecadação de fundos.',
      de: 'Ein WhatsApp-Chatbot, der entwickelt wurde, um den Verkauf für das Fundraising des PUCPR Mobile Robotics Teams zu optimieren.',
      es: 'Un chatbot de WhatsApp desarrollado para agilizar las ventas en la recaudación de fondos del Equipo de Robótica Móvil de la PUCPR.',
      zh: '一款 WhatsApp 聊天机器人，旨在简化 PUCPR 移动机器人团队筹款活动的销售流程。',
    },
    detailedDescription: {
      en: "This project was created to support the PUCPR Mobile Robotics Team's fundraising efforts. It's a WhatsApp chatbot, built with Node.js and the Twilio API, designed to manage the sale of brigadeiros. The bot allows team members to register as sellers, record sales by type and quantity, and manage sales data, which is stored in a PostgreSQL database. The system uses ngrok for local development and testing.",
      pt: 'Este projeto foi criado para apoiar os esforços de arrecadação de fundos da Equipe de Robótica Móvel da PUCPR. É um chatbot de WhatsApp, construído com Node.js e a API da Twilio, projetado para gerenciar a venda de brigadeiros. O bot permite que os membros da equipe se cadastrem como vendedores, registrem vendas por tipo e quantidade e gerenciem os dados das vendas, que são armazenados em um banco de dados PostgreSQL. O sistema utiliza ngrok para desenvolvimento e testes locais.',
      de: 'Dieses Projekt wurde erstellt, um die Spendenaktionen des PUCPR Mobile Robotics Teams zu unterstützen. Es handelt sich um einen WhatsApp-Chatbot, der mit Node.js und der Twilio-API erstellt wurde und für die Verwaltung des Verkaufs von Brigadeiros konzipiert ist. Der Bot ermöglicht es den Teammitgliedern, sich als Verkäufer zu registrieren, Verkäufe nach Art und Menge zu erfassen und Verkaufsdaten zu verwalten, die in einer PostgreSQL-Datenbank gespeichert werden. Das System verwendet ngrok für die lokale Entwicklung und das Testen.',
      es: 'Este proyecto fue creado para apoyar los esfuerzos de recaudación de fondos del Equipo de Robótica Móvil de la PUCPR. Es un chatbot de WhatsApp, construido con Node.js y la API de Twilio, diseñado para gestionar la venta de brigadeiros. El bot permite a los miembros del equipo registrarse como vendedores, registrar ventas por tipo y cantidad, y gestionar los datos de ventas, que se almacenan en una base de datos PostgreSQL. El sistema utiliza ngrok para el desarrollo y las pruebas locales.',
      zh: '该项目旨在支持 PUCPR 移动机器人团队的筹款工作。它是一款使用 Node.js 和 Twilio API 构建的 WhatsApp 聊天机器人，用于管理 brigadeiro 的销售。该机器人允许团队成员注册为销售员、按类型和数量记录销售，并管理存储在 PostgreSQL 数据库中的销售数据。系统使用 ngrok 进行本地开发和测试。',
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
      es: 'Proyecto de Equipo',
      zh: '团队项目',
    },
  },
  {
    id: 'reverso-anki',
    title: {
      en: 'Reverso Anki Helper',
      pt: 'Auxiliar Reverso Anki',
      de: 'Reverso Anki Helfer',
      es: 'Asistente Reverso Anki',
      zh: 'Reverso Anki 助手',
    },
    description: {
      en: 'A Node.js script I use for my German studies. It fetches translations and pronunciations for a list of words and formats them for Anki.',
      pt: 'Um script Node.js que uso para meus estudos de alemão. Ele busca traduções e pronúncias para uma lista de palavras e as formata para o Anki.',
      de: 'Ein Node.js-Skript, das ich für mein Deutschstudium verwende. Es ruft Übersetzungen und Aussprachen für eine Wortliste ab und formatiert sie für Anki.',
      es: 'Un script de Node.js que utilizo para mis estudios de alemán. Obtiene traducciones y pronunciaciones de una lista de palabras y las formatea para Anki.',
      zh: '我用于德语学习的一个 Node.js 脚本。它为一份单词列表获取翻译和发音，并将其格式化以便导入 Anki。',
    },
    detailedDescription: {
      en: 'This personal project is a Node.js script designed to streamline my German language studies. It takes a list of German words from an input file, uses the Reverso API for translation and the Forvo API to download pronunciations. The script then compiles this information into a format ready to be imported into Anki, automating the process of creating flashcards. I also keep track of all my words in a google sheet, where I add the words and their translations, and the script automatically updates the sheet with the new words and their translations.  ',
      pt: 'Este projeto pessoal é um script Node.js projetado para otimizar meus estudos da língua alemã. Ele pega uma lista de palavras em alemão de um arquivo de entrada, usa a API Reverso para tradução e a API Forvo para baixar as pronúncias. O script então compila essas informações em um formato pronto para ser importado para o Anki, automatizando o processo de criação de flashcards. Eu também mantenho um registro de todas as minhas palavras em uma planilha do Google, onde adiciono as palavras e suas traduções, e o script atualiza automaticamente a planilha com as novas palavras e suas traduções.',
      de: 'Dieses persönliche Projekt ist ein Node.js-Skript, das entwickelt wurde, um mein Deutschstudium zu optimieren. Es verwendet eine Liste deutscher Wörter aus einer Eingabedatei, nutzt die Reverso-API für die Übersetzung und die Forvo-API zum Herunterladen der Aussprache. Das Skript stellt diese Informationen dann in einem Format zusammen, das für den Import in Anki bereit ist, und automatisiert so den Prozess der Erstellung von Lernkarten. Ich halte auch ein Registrierung von allen meinen Wörtern in einer Google-Tabelle, wo ich die Wörter und ihre Übersetzungen hinzufüge und das Skript aktualisiert die Tabelle automatisch mit den neuen Wörtern und ihren Übersetzungen.',
      es: 'Este proyecto personal es un script de Node.js diseñado para optimizar mis estudios del idioma alemán. Toma una lista de palabras en alemán de un archivo de entrada, usa la API de Reverso para la traducción y la API de Forvo para descargar las pronunciaciones. Luego, el script compila esta información en un formato listo para importar a Anki, automatizando el proceso de creación de tarjetas de estudio. También llevo un registro de todas mis palabras en una hoja de cálculo de Google, donde añado las palabras y sus traducciones, y el script actualiza automáticamente la hoja con las nuevas palabras y sus traducciones.  ',
      zh: '这个个人项目是一个 Node.js 脚本，旨在优化我的德语学习。它从输入文件中读取一份德语单词列表，使用 Reverso API 进行翻译，并使用 Forvo API 下载发音。随后，该脚本将这些信息整理成可直接导入 Anki 的格式，从而自动化创建抽认卡的过程。我还在一个 Google 表格中记录我所有的单词，在其中添加单词及其翻译，脚本会自动用新单词及其翻译更新该表格。  ',
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
      es: 'Herramienta Personal',
      zh: '个人工具',
    },
  },
  {
    id: 'compiler-project',
    title: {
      en: 'Lexical and Syntactic Analyzer',
      pt: 'Analisador Léxico e Sintático',
      de: 'Lexikalischer und Syntaktischer Analysator',
      es: 'Analizador Léxico y Sintáctico',
      zh: '词法和语法分析器',
    },
    description: {
      en: 'A Python program that performs lexical and syntactic analysis on simple expressions, generating tokens and an abstract syntax tree.',
      pt: 'Um programa em Python que realiza análise léxica e sintática em expressões simples, gerando tokens e uma árvore sintática abstrata.',
      de: 'Ein Python-Programm, das eine lexikalische und syntaktische Analyse einfacher Ausdrücke durchführt und dabei Tokens und einen abstrakten Syntaxbaum generiert.',
      es: 'Un programa en Python que realiza análisis léxico y sintáctico de expresiones simples, generando tokens y un árbol de sintaxis abstracta.',
      zh: '一个 Python 程序，对简单表达式进行词法和语法分析，生成 token 和抽象语法树。',
    },
    detailedDescription: {
      en: 'Developed for a Compilers course, this project implements the first phases of a compiler. It reads simple mathematical expressions from a text file, performs lexical analysis using a state machine to generate tokens, and then uses a predictive parser to build an abstract syntax tree (AST) for each expression.',
      pt: 'Desenvolvido para uma disciplina de Compiladores, este projeto implementa as fases iniciais de um compilador. Ele lê expressões matemáticas simples de um arquivo de texto, realiza análise léxica usando uma máquina de estados para gerar tokens e, em seguida, usa um analisador preditivo para construir uma árvore sintática abstrata (AST) para cada expressão.',
      de: 'Dieses für einen Compilerbau-Kurs entwickelte Projekt implementiert die ersten Phasen eines Compilers. Es liest einfache mathematische Ausdrücke aus einer Textdatei, führt eine lexikalische Analyse mithilfe eines Zustandsautomaten durch, um Tokens zu generieren, und verwendet dann einen prädiktiven Parser, um für jeden Ausdruck einen abstrakten Syntaxbaum (AST) zu erstellen.',
      es: 'Desarrollado para una asignatura de Compiladores, este proyecto implementa las primeras fases de un compilador. Lee expresiones matemáticas simples de un archivo de texto, realiza un análisis léxico mediante una máquina de estados para generar tokens y, a continuación, utiliza un analizador predictivo para construir un árbol de sintaxis abstracta (AST) para cada expresión.',
      zh: '该项目为一门编译器课程开发，实现了编译器的前几个阶段。它从文本文件中读取简单的数学表达式，使用状态机进行词法分析以生成 token，然后使用预测分析器为每个表达式构建抽象语法树 (AST)。',
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
      es: 'Proyecto Académico',
      zh: '学术项目',
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
