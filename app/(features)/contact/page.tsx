'use client';

import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import CommandLine from '../../components/terminal/CommandLine';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="leading-relaxed space-y-10">
      <CommandLine command="cat contact.txt">
        <ContactInfo />
      </CommandLine>

      <CommandLine command="./send-message.sh">
        <div className="mt-2">
          <p className="text-muted mb-5 text-sm">{t('contact.sendMessage')}</p>
          <ContactForm />
        </div>
      </CommandLine>
    </div>
  );
}
