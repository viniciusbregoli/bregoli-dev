'use client';

import { useLanguage } from '../../(core)/i18n/context';

export default function ContactInfo() {
  const { t } = useLanguage();

  const items = [
    { key: 'email', label: t('contact.email'), value: 'me@viniciusbregoli.dev', href: 'mailto:me@viniciusbregoli.dev' },
    { key: 'linkedin', label: 'linkedin', value: 'linkedin.com/in/viniciusbregoli', href: 'https://linkedin.com/in/viniciusbregoli' },
    { key: 'location', label: t('contact.location'), value: 'Curitiba, PR - Brazil', href: null },
  ];

  return (
    <div className="space-y-3">
      <p className="text-foreground">{t('contact.description')}</p>
      <div className="space-y-1">
        {items.map((item) => (
          <p key={item.key} className="flex flex-wrap items-baseline gap-2 text-sm">
            <span className="text-secondary w-24 shrink-0">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-foreground/90 hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-foreground/90">{item.value}</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
