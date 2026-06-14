// app/components/home/education/educationData.ts
import { Language } from '../../../(core)/i18n/translations';

export interface EducationType {
  institution: string;
  program: {
    [key in Language]?: string;
  };
  period: {
    [key in Language]?: string;
  };
  location: string;
  logo: string;
}

export function getEducationData(): EducationType[] {
  return [
    {
      institution: 'Technische Hochschule Ingolstadt',
      program: {
        en: 'Computer Science and AI (Exchange Program)',
        pt: 'Ciência da Computação e IA (Programa de Intercâmbio)',
        de: 'Informatik und KI (Austauschprogramm)',
        es: 'Ciencias de la Computación e IA (Programa de Intercambio)',
        zh: '计算机科学与人工智能（交换项目）',
      },
      period: {
        en: '10/2024 - 07/2025',
        pt: '10/2024 - 07/2025',
        de: '10/2024 - 07/2025',
      },
      location: 'Ingolstadt, Bavaria, Germany',
      logo: '/images/thi-logo.png',
    },
    {
      institution: 'Pontifical Catholic University of Paraná',
      program: {
        en: 'Computer Engineering',
        pt: 'Engenharia da Computação',
        de: 'Technische Informatik',
        es: 'Ingeniería en Computación',
        zh: '计算机工程',
      },
      period: {
        en: '2020 - 2025',
        pt: '2020 - 2025',
        de: '2020 - 2025',
      },
      location: 'Curitiba, Brazil',
      logo: '/images/pucpr-logo.png',
    },
  ];
}
