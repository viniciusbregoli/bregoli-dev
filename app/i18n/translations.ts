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
  'about.title': {
    en: 'About me',
    pt: 'Sobre mim',
    de: 'Über mich',
  },
};
