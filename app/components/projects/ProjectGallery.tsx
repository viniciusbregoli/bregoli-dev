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

const labels: Record<Language, string> = {
  en: 'Gallery',
  pt: 'Galeria',
  de: 'Galerie',
};

export default function ProjectGallery({ gallery, projectTitle, language }: ProjectGalleryProps) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const title = projectTitle[language] || projectTitle.en;

  return (
    <div className="panel p-8 md:p-10">
      <h2 className="mono-label mb-6">{labels[language]}</h2>

      <div className={`grid gap-5 ${gallery.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {gallery.map((image, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden border border-line bg-foreground/5"
          >
            <Image
              src={image}
              alt={`${title} image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
