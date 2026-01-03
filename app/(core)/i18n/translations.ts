export type Language = 'en' | 'pt' | 'de';

export type Translations = {
  [key: string]: {
    [key in Language]?: string;
  };
};

export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    pt: 'Início',
    de: 'Startseite',
  },
  'nav.about': {
    en: 'About me',
    pt: 'Sobre mim',
    de: 'Über mich',
  },
  'nav.projects': {
    en: 'Projects',
    pt: 'Projetos',
    de: 'Projekte',
  },
  'nav.contact': {
    en: 'Contact',
    pt: 'Contato',
    de: 'Kontakt',
  },

  // Hero Section
  'hero.greeting': {
    en: 'Hello!',
    pt: 'Olá!',
    de: 'Hallo!',
  },
  'hero.name': {
    en: "I'm Vinícius",
    pt: 'Meu nome é Vinícius',
    de: 'Ich bin Vinícius',
  },
  'hero.professionalClaim': {
    en: 'Building innovative solutions through technology',
    pt: 'Construindo soluções inovadoras através da tecnologia',
    de: 'Innovative Lösungen durch Technologie entwickeln',
  },
  'hero.description': {
    en: 'I am a Computer Engineer with hands-on experience in programming, fullstack development, IT infrastructure and AI. Skilled in tools like Python, React, source control and SQL, with a strong foundation in Linux and robotics. I also completed an exchange program at Technische Hochschule Ingolstadt, focusing on Computer Science and AI.',
    pt: 'Sou Engenheiro de Computação com experiência prática em programação, desenvolvimento fullstack, infraestrutura de TI e IA. Habilidades em ferramentas como Python, React, controle de versão e SQL, com uma base sólida em Linux e robótica. Também conclui um programa de intercâmbio na Technische Hochschule Ingolstadt, focado em Ciência da Computação e IA.',
    de: 'Ich bin Informatikingenieur mit praktischer Erfahrung in Programmierung, Fullstack-Entwicklung, IT-Infrastruktur und KI. Kenntnisse in Tools wie Python, React, Quellcodeverwaltung und SQL, mit einer soliden Grundlage in Linux und Robotik. Ich habe außerdem ein Austauschprogramm an der Technischen Hochschule Ingolstadt mit Schwerpunkt Informatik und KI absolviert.',
  },
  'hero.cta': {
    en: 'Download Resume',
    pt: 'Baixar Currículo',
    de: 'Lebenslauf Herunterladen',
  },
  'hero.viewExperience': {
    en: 'View Experience',
    pt: 'Ver Experiência',
    de: 'Erfahrung Ansehen',
  },

  // Goals Section
  'goals.title': {
    en: 'My Mission',
    pt: 'Minha Missão',
    de: 'Meine Mission',
  },
  'goals.shortTerm': {
    en: 'Vision',
    pt: 'Visão',
    de: 'Vision',
  },
  'goals.shortTermDesc': {
    en: 'Build useful tools. Solve real problems. Keep learning. I enjoy taking on technical challenges and finding solutions that actually work, not just in theory.',
    pt: 'Construir ferramentas úteis. Resolver problemas reais. Continuar aprendendo. Gosto de encarar desafios técnicos e encontrar soluções que realmente funcionam, não apenas na teoria.',
    de: 'Nützliche Tools bauen. Echte Probleme lösen. Weiter lernen. Ich mag es, technische Herausforderungen anzunehmen und Lösungen zu finden, die wirklich funktionieren, nicht nur in der Theorie.',
  },
  'goals.longTerm': {
    en: 'Approach',
    pt: 'Abordagem',
    de: 'Ansatz',
  },
  'goals.longTermDesc': {
    en: 'I prefer working close to the code - debugging, experimenting, and iterating until things work right. Currently exploring AI and computer vision, always looking for the next thing to learn.',
    pt: 'Prefiro trabalhar perto do código - debugando, experimentando e iterando até que as coisas funcionem. Atualmente explorando IA e visão computacional, sempre buscando a próxima coisa para aprender.',
    de: 'Ich arbeite am liebsten nah am Code - debuggen, experimentieren und iterieren, bis alles richtig funktioniert. Aktuell erforsche ich KI und Computer Vision, immer auf der Suche nach dem nächsten Lernziel.',
  },

  // About Section
  'about.title': {
    en: 'About me',
    pt: 'Sobre mim',
    de: 'Über mich',
  },

  // Experience Section
  'experience.title': {
    en: 'Experience',
    pt: 'Experiência',
    de: 'Erfahrung',
  },

  // Education Section
  'education.title': {
    en: 'Education',
    pt: 'Educação',
    de: 'Bildung',
  },

  // Skills Section
  'skills.title': {
    en: 'My Skills',
    pt: 'Minhas Habilidades',
    de: 'Meine Fähigkeiten',
  },
  'skills.technical': {
    en: 'Technical Skills',
    pt: 'Habilidades Técnicas',
    de: 'Technische Fähigkeiten',
  },
  'skills.soft': {
    en: 'Soft Skills',
    pt: 'Habilidades Interpessoais',
    de: 'Soziale Kompetenzen',
  },
  'skills.soft.communication': {
    en: 'Communication',
    pt: 'Comunicação',
    de: 'Kommunikation',
  },
  'skills.soft.leadership': {
    en: 'Leadership',
    pt: 'Liderança',
    de: 'Führung',
  },
  'skills.soft.innovation': {
    en: 'Innovation',
    pt: 'Inovação',
    de: 'Innovation',
  },
  'skills.soft.professional': {
    en: 'Professional',
    pt: 'Profissional',
    de: 'Beruflich',
  },
  'skills.soft.teamCollaboration': {
    en: 'Team Collaboration',
    pt: 'Colaboração em Equipe',
    de: 'Teamarbeit',
  },
  'skills.soft.clientCommunication': {
    en: 'Client Communication',
    pt: 'Comunicação com Clientes',
    de: 'Kundenkommunikation',
  },
  'skills.soft.problemSolving': {
    en: 'Problem Solving',
    pt: 'Resolução de Problemas',
    de: 'Problemlösung',
  },
  'skills.soft.projectManagement': {
    en: 'Project Management',
    pt: 'Gerenciamento de Projetos',
    de: 'Projektmanagement',
  },
  'skills.soft.teamLeadership': {
    en: 'Team Leadership',
    pt: 'Liderança de Equipe',
    de: 'Teamführung',
  },
  'skills.soft.strategicPlanning': {
    en: 'Strategic Planning',
    pt: 'Planejamento Estratégico',
    de: 'Strategische Planung',
  },
  'skills.soft.creativeThinking': {
    en: 'Creative Thinking',
    pt: 'Pensamento Criativo',
    de: 'Kreatives Denken',
  },
  'skills.soft.processOptimization': {
    en: 'Process Optimization',
    pt: 'Otimização de Processos',
    de: 'Prozessoptimierung',
  },
  'skills.soft.technicalInnovation': {
    en: 'Technical Innovation',
    pt: 'Inovação Técnica',
    de: 'Technische Innovation',
  },
  'skills.soft.agileMethodologies': {
    en: 'Agile Methodologies',
    pt: 'Metodologias Ágeis',
    de: 'Agile Methoden',
  },
  'skills.soft.riskManagement': {
    en: 'Risk Management',
    pt: 'Gerenciamento de Riscos',
    de: 'Risikomanagement',
  },
  'skills.soft.qualityAssurance': {
    en: 'Quality Assurance',
    pt: 'Garantia de Qualidade',
    de: 'Qualitätssicherung',
  },
  'skills.languages': {
    en: 'Languages',
    pt: 'Idiomas',
    de: 'Sprachen',
  },

  // Projects Section
  'projects.title': {
    en: 'My Projects',
    pt: 'Meus Projetos',
    de: 'Meine Projekte',
  },
  'projects.subtitle': {
    en: 'A selection of my technical work and contributions',
    pt: 'Uma seleção do meu trabalho técnico e contribuições',
    de: 'Eine Auswahl meiner technischen Arbeiten und Beiträge',
  },
  'projects.viewDetails': {
    en: 'View details',
    pt: 'Ver detalhes',
    de: 'Details anzeigen',
  },
  'projects.viewProject': {
    en: 'View Project',
    pt: 'Ver Projeto',
    de: 'Projekt Ansehen',
  },
  'projects.project': {
    en: 'Project',
    pt: 'Projeto',
    de: 'Projekt',
  },
  'projects.backToProjects': {
    en: 'Back to Projects',
    pt: 'Voltar para Projetos',
    de: 'Zurück zu Projekten',
  },
  'projects.aboutProject': {
    en: 'About this Project',
    pt: 'Sobre este Projeto',
    de: 'Über dieses Projekt',
  },
  'projects.projectInfo': {
    en: 'Project Information',
    pt: 'Informações do Projeto',
    de: 'Projektinformationen',
  },
  'projects.projectType': {
    en: 'Project Type',
    pt: 'Tipo de Projeto',
    de: 'Projekttyp',
  },
  'projects.timeline': {
    en: 'Timeline',
    pt: 'Período',
    de: 'Zeitraum',
  },
  'projects.technologies': {
    en: 'Technologies',
    pt: 'Tecnologias',
    de: 'Technologien',
  },
  'projects.notFound': {
    en: 'Project Not Found',
    pt: 'Projeto Não Encontrado',
    de: 'Projekt Nicht Gefunden',
  },
  'projects.notFoundDesc': {
    en: 'The project you are looking for does not exist.',
    pt: 'O projeto que você está procurando não existe.',
    de: 'Das gesuchte Projekt existiert nicht.',
  },

  // Contact Section
  'contact.title': {
    en: 'Contact Me',
    pt: 'Entre em Contato',
    de: 'Kontaktiere Mich',
  },
  'contact.getInTouch': {
    en: 'Get in Touch',
    pt: 'Entre em Contato',
    de: 'Kontaktaufnahme',
  },
  'contact.description': {
    en: 'Feel free to reach out to me for job opportunities, collaborations, or just to say hello!',
    pt: 'Sinta-se à vontade para entrar em contato comigo para oportunidades de trabalho, colaborações ou apenas para dizer olá!',
    de: 'Kontaktieren Sie mich gerne für Jobangebote, Kooperationen oder einfach nur, um Hallo zu sagen!',
  },
  'contact.email': {
    en: 'Email',
    pt: 'E-mail',
    de: 'E-Mail',
  },
  'contact.location': {
    en: 'Location',
    pt: 'Localização',
    de: 'Standort',
  },
  'contact.social': {
    en: 'Social Profiles',
    pt: 'Perfis Sociais',
    de: 'Soziale Profile',
  },
  'contact.sendMessage': {
    en: 'Send Me a Message',
    pt: 'Envie-me uma Mensagem',
    de: 'Sende mir eine Nachricht',
  },
  'contact.name': {
    en: 'Your Name',
    pt: 'Seu Nome',
    de: 'Ihr Name',
  },
  'contact.emailField': {
    en: 'Your Email',
    pt: 'Seu E-mail',
    de: 'Ihre E-Mail',
  },
  'contact.message': {
    en: 'Your Message',
    pt: 'Sua Mensagem',
    de: 'Ihre Nachricht',
  },
  'contact.send': {
    en: 'Send Message',
    pt: 'Enviar Mensagem',
    de: 'Nachricht Senden',
  },
  'contact.sending': {
    en: 'Sending...',
    pt: 'Enviando...',
    de: 'Senden...',
  },
  'contact.submitSuccess': {
    en: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
    pt: 'Obrigado! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.',
    de: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich bald bei Ihnen melden.',
  },
  'contact.submitError': {
    en: 'There was a problem sending your message. Please try again later.',
    pt: 'Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.',
    de: 'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es später erneut.',
  },
  'contact.validation.nameRequired': {
    en: 'Name is required',
    pt: 'Nome é obrigatório',
    de: 'Name ist erforderlich',
  },
  'contact.validation.emailRequired': {
    en: 'Email is required',
    pt: 'Email é obrigatório',
    de: 'E-Mail ist erforderlich',
  },
  'contact.validation.emailInvalid': {
    en: 'Please enter a valid email address',
    pt: 'Por favor, insira um endereço de email válido',
    de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  },
  'contact.validation.messageRequired': {
    en: 'Message is required',
    pt: 'Mensagem é obrigatória',
    de: 'Nachricht ist erforderlich',
  },
  'contact.validation.messageTooShort': {
    en: 'Message must be at least 10 characters long',
    pt: 'A mensagem deve ter pelo menos 10 caracteres',
    de: 'Die Nachricht muss mindestens 10 Zeichen lang sein',
  },
  'contact.placeholder.name': {
    en: 'Your name',
    pt: 'Seu nome',
    de: 'Ihr Name',
  },
  'contact.placeholder.email': {
    en: 'your-email@example.com',
    pt: 'seu-email@exemplo.com',
    de: 'ihre-email@beispiel.de',
  },
  'contact.placeholder.message': {
    en: 'Your message here...',
    pt: 'Sua mensagem aqui...',
    de: 'Ihre Nachricht hier...',
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    pt: 'Todos os direitos reservados.',
    de: 'Alle Rechte vorbehalten.',
  },

  // Common
  'time.present': {
    en: 'Present',
    pt: 'Presente',
    de: 'Aktuell',
  },
};
