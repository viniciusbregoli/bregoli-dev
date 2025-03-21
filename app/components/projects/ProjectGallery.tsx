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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
        {language === 'en'
          ? 'Project Gallery'
          : language === 'pt'
            ? 'Galeria do Projeto'
            : 'Projektgalerie'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-700"
          >
            <div className="relative w-full h-auto">
              <Image
                src={image}
                alt={`${title} image ${index + 1}`}
                width={600}
                height={400}
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                className="hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/api/placeholder/600/400';
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
