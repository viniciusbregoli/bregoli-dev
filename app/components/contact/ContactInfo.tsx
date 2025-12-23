'use client';

import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../(core)/i18n/context';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="glass-morphism rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 relative overflow-hidden h-full">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <FaEnvelope className="w-32 h-32" />
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        <span className="text-gradient-rose">{t('contact.getInTouch')}</span>
      </h2>
      <p className="mb-12 text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-medium">
        {t('contact.description')}
      </p>

      <div className="space-y-10">
        {[
          {
            icon: <FaEnvelope className="h-7 w-7" />,
            title: t('contact.email'),
            value: 'me@viniciusbregoli.dev',
            href: 'mailto:me@viniciusbregoli.dev',
            color: 'text-primary',
            bgColor: 'bg-primary/10',
          },
          {
            icon: <FaLinkedin className="h-7 w-7" />,
            title: 'LinkedIn',
            value: 'linkedin.com/in/viniciusbregoli',
            href: 'https://linkedin.com/in/viniciusbregoli',
            color: 'text-secondary',
            bgColor: 'bg-secondary/10',
          },
          {
            icon: <FaMapMarkerAlt className="h-7 w-7" />,
            title: t('contact.location'),
            value: 'Curitiba, PR - Brazil',
            href: null,
            color: 'text-accent',
            bgColor: 'bg-accent/10',
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center group">
            <div className={`${item.bgColor} ${item.color} p-5 rounded-[1.5rem] mr-6 shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xs uppercase font-black tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                {item.title}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
