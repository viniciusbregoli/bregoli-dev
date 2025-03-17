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
  // New Contact Page Translations
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
  // Projects Page Translations
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
  // Skills Section Translations
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
};
