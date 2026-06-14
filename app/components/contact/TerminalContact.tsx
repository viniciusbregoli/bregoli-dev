'use client';

import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import CommandLine from '../terminal/CommandLine';

export default function TerminalContact() {
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
