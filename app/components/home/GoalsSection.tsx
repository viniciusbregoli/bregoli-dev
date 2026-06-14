'use client';

import { useLanguage } from '../../(core)/i18n/context';
import SectionTitle from '../common/SectionTitle';
import { FiTarget, FiCompass } from 'react-icons/fi';

export default function GoalsSection() {
  const { t } = useLanguage();

  const goals = [
    {
      icon: FiTarget,
      label: '01',
      title: t('goals.shortTerm'),
      desc: t('goals.shortTermDesc'),
    },
    {
      icon: FiCompass,
      label: '02',
      title: t('goals.longTerm'),
      desc: t('goals.longTermDesc'),
    },
  ];

  return (
    <section id="goals" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle eyebrow="goals">{t('goals.title')}</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {goals.map(({ icon: Icon, label, title, desc }) => (
            <div
              key={label}
              className="group panel p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="mono-label text-muted">{label}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
