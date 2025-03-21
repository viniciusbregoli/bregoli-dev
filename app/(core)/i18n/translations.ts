export type Language = 'en' | 'pt' | 'de';

export type Translations = {
  [key: string]: {
    [key in Language]?: string;
  };
};

export const translations: Translations = {
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
  'hero.description': {
    en: 'I am a Computer Engineering student with hands-on experience in programming, fullstack development, workflow optimization, and IT infrastructure. Skilled in tools like Python, Java, Full-stack development, source control and SQL, with a strong foundation in Linux and robotics. Currently enrolled at an exchange program at Technische Hochschule Ingolstadt at the Computer Science and AI course.',
    pt: 'Sou estudante de Engenharia da Computação com experiência prática em programação, desenvolvimento fullstack, otimização de fluxo de trabalho e infraestrutura de TI. Habilidades em ferramentas como Python, Java, desenvolvimento Full-stack, controle de versão e SQL, com uma base sólida em Linux e robótica. Atualmente matriculado em um programa de intercâmbio na Technische Hochschule Ingolstadt no curso de Ciência da Computação e IA.',
    de: 'Ich bin ein Student der Informatik mit praktischer Erfahrung in Programmierung, Fullstack-Entwicklung, Workflow-Optimierung und IT-Infrastruktur. Kenntnisse in Tools wie Python, Java, Full-Stack-Entwicklung, Quellcodeverwaltung und SQL, mit einer soliden Grundlage in Linux und Robotik. Derzeit eingeschrieben in einem Austauschprogramm an der Technischen Hochschule Ingolstadt im Studiengang Informatik und KI.',
  },
  'hero.cta': {
    en: 'Download Resume',
    pt: 'Baixar Currículo',
    de: 'Lebenslauf Herunterladen',
  },
  'about.title': {
    en: 'About me',
    pt: 'Sobre mim',
    de: 'Über mich',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    pt: 'Todos os direitos reservados.',
    de: 'Alle Rechte vorbehalten.',
  },
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
  'projects.links': {
    en: 'Links',
    pt: 'Links',
    de: 'Links',
  },
  'projects.viewOnGithub': {
    en: 'View on GitHub',
    pt: 'Ver no GitHub',
    de: 'Auf GitHub ansehen',
  },
  'projects.liveDemo': {
    en: 'Live Demo',
    pt: 'Demo ao Vivo',
    de: 'Live-Demo',
  },
  'projects.visitWebsite': {
    en: 'Visit Website',
    pt: 'Visitar Website',
    de: 'Website besuchen',
  },
  'projects.gallery': {
    en: 'Project Gallery',
    pt: 'Galeria do Projeto',
    de: 'Projektgalerie',
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
  'skills.languages': {
    en: 'Languages',
    pt: 'Idiomas',
    de: 'Sprachen',
  },
  'skills.technical.javascript': {
    en: 'JavaScript',
    pt: 'JavaScript',
    de: 'JavaScript',
  },
  'skills.technical.python': {
    en: 'Python',
    pt: 'Python',
    de: 'Python',
  },
  'skills.technical.htmlcss': {
    en: 'HTML/CSS',
    pt: 'HTML/CSS',
    de: 'HTML/CSS',
  },
  'skills.technical.reactjs': {
    en: 'ReactJS',
    pt: 'ReactJS',
    de: 'ReactJS',
  },
  'skills.technical.vuejs': {
    en: 'VueJS',
    pt: 'VueJS',
    de: 'VueJS',
  },
  'skills.technical.sql': {
    en: 'SQL',
    pt: 'SQL',
    de: 'SQL',
  },
  'skills.technical.git': {
    en: 'Git',
    pt: 'Git',
    de: 'Git',
  },
  'skills.technical.linux': {
    en: 'Linux',
    pt: 'Linux',
    de: 'Linux',
  },
  'skills.technical.java': {
    en: 'Java',
    pt: 'Java',
    de: 'Java',
  },
  'skills.technical.cpp': {
    en: 'C/C++',
    pt: 'C/C++',
    de: 'C/C++',
  },

  // Soft Skills
  'skills.soft.proactiveLearning': {
    en: 'Proactive Learning',
    pt: 'Aprendizado Proativo',
    de: 'Proaktives Lernen',
  },
  'skills.soft.communication': {
    en: 'Effective Communication',
    pt: 'Comunicação Eficaz',
    de: 'Effektive Kommunikation',
  },
  'skills.soft.teamwork': {
    en: 'Teamwork',
    pt: 'Trabalho em Equipe',
    de: 'Teamarbeit',
  },
  'skills.soft.problemSolving': {
    en: 'Problem-Solving',
    pt: 'Resolução de Problemas',
    de: 'Problemlösung',
  },
  'skills.soft.adaptability': {
    en: 'Adaptability',
    pt: 'Adaptabilidade',
    de: 'Anpassungsfähigkeit',
  },
  'skills.soft.criticalThinking': {
    en: 'Critical Thinking',
    pt: 'Pensamento Crítico',
    de: 'Kritisches Denken',
  },
  'skills.soft.accountability': {
    en: 'Accountability',
    pt: 'Responsabilidade',
    de: 'Verantwortlichkeit',
  },

  'skills.languages.english': {
    en: 'English',
    pt: 'Inglês',
    de: 'Englisch',
  },
  'skills.languages.portuguese': {
    en: 'Portuguese',
    pt: 'Português',
    de: 'Portugiesisch',
  },
  'skills.languages.spanish': {
    en: 'Spanish',
    pt: 'Espanhol',
    de: 'Spanisch',
  },
  'skills.languages.german': {
    en: 'German',
    pt: 'Alemão',
    de: 'Deutsch',
  },

  'skills.level.fluent': {
    en: 'Fluent',
    pt: 'Fluente',
    de: 'Fließend',
  },
  'skills.level.intermediate': {
    en: 'Intermediate',
    pt: 'Intermediário',
    de: 'Mittelstufe',
  },
  'skills.level.beginner': {
    en: 'Beginner',
    pt: 'Iniciante',
    de: 'Anfänger',
  },
  'education.title': {
    en: 'Education',
    pt: 'Educação',
    de: 'Bildung',
  },

  'technologies.title': {
    en: 'Technologies',
    pt: 'Tecnologias',
    de: 'Technologien',
  },

  'time.present': {
    en: 'Present',
    pt: 'Presente',
    de: 'Aktuell',
  },
};
