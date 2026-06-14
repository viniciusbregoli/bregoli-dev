'use client';

import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../(core)/i18n/context';

export default function ContactInfo() {
  const { t } = useLanguage();

  const items = [
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      title: t('contact.email'),
      value: 'me@viniciusbregoli.dev',
      href: 'mailto:me@viniciusbregoli.dev',
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/viniciusbregoli',
      href: 'https://linkedin.com/in/viniciusbregoli',
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5" />,
      title: t('contact.location'),
      value: 'Curitiba, PR - Brazil',
      href: null,
    },
  ];

  return (
    <div className="panel p-8 md:p-10 h-full">
      <h2 className="mono-label mb-4">{t('contact.getInTouch')}</h2>
      <p className="mb-10 text-muted leading-relaxed">{t('contact.description')}</p>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="mono-label text-muted mb-0.5">{item.title}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
