'use client';

import Image from 'next/image';
import { useLanguage } from '../../(core)/i18n/context';
import ExperienceCard from './experience/ExperienceCard';
import { getExperienceData } from './experience/experienceData';
import SectionTitle from '../common/SectionTitle';

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const experiences = getExperienceData();

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{t('experience.title')}</SectionTitle>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 transform -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-2 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 top-1/2 z-10"></div>

              <div className="md:grid md:grid-cols-2 md:gap-8 group-hover:scale-[1.02] transition-transform duration-200">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-start-1">
                      <div className="ml-12 md:ml-0 transition-all duration-200 group-hover:translate-x-2">
                        <ExperienceCard experience={experience} currentLanguage={language} />
                      </div>
                    </div>

                    {experience.image && (
                      <div className="hidden md:block md:col-start-2">
                        <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg transition-all duration-200 group-hover:-translate-x-2">
                          <Image
                            src={experience.image}
                            alt={`${experience.company} illustration`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {experience.image && (
                      <div className="hidden md:block md:col-start-1">
                        <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg transition-all duration-200 group-hover:translate-x-2">
                          <Image
                            src={experience.image}
                            alt={`${experience.company} illustration`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    )}

                    <div className="md:col-start-2">
                      <div className="ml-12 md:ml-0 transition-all duration-200 group-hover:-translate-x-2">
                        <ExperienceCard experience={experience} currentLanguage={language} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
