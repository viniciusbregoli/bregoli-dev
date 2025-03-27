'use client';

import Image from 'next/image';
import { Language } from '../../(core)/i18n/translations';

interface ProjectGalleryProps {
  gallery: string[];
  projectTitle: {
    en: string;
    pt: string;
    de: string;
  };
  language: Language;
}

export default function ProjectGallery({ gallery, projectTitle, language }: ProjectGalleryProps) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const title = projectTitle[language] || projectTitle.en;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-blue-300">
        {language === 'en'
          ? 'Project Gallery'
          : language === 'pt'
            ? 'Galeria do Projeto'
            : 'Projektgalerie'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-700 transform transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative w-full h-auto">
              <Image
                src={image}
                alt={`${title} image ${index + 1}`}
                width={600}
                height={400}
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                className="transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/api/placeholder/600/400';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
