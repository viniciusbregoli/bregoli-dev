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
    <div className="glass-morphism rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 relative">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        <span className="text-gradient-rose">
          {language === 'en'
            ? 'Project Gallery'
            : language === 'pt'
              ? 'Galeria do Projeto'
              : 'Projektgalerie'}
        </span>
      </h2>

      <div className={`grid gap-10 ${gallery.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {gallery.map((image, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-white/5 border border-white/20 dark:border-white/10"
          >
            <Image
              src={image}
              alt={`${title} image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="text-white font-bold tracking-widest text-xs uppercase">View Full Scale</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
