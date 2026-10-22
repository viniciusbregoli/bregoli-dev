'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import {
  ContactFormData,
  ContactFormErrors,
  submitContact,
  validateContact,
} from '../contact/contactApi';
import RetroWindow from './RetroWindow';

const EMPTY: ContactFormData = { name: '', email: '', message: '' };

export default function RetroContact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    const found = validateContact(form, t);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    try {
      await submitContact(form);
      setSubmitted(true);
      setForm(EMPTY);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: 'name',
      type: 'text',
      label: t('contact.name'),
      placeholder: t('contact.placeholder.name'),
    },
    {
      name: 'email',
      type: 'email',
      label: t('contact.emailField'),
      placeholder: t('contact.placeholder.email'),
    },
  ] as const;

  return (
    <>
      <RetroWindow title={`${t('retro.guestbook')}.exe`}>
        <h2>📖 {t('retro.signGuestbook')}</h2>
        <p>
          <small>{t('retro.guestbookNote')}</small>
        </p>

        {submitted ? (
          <p className="mt-3" role="status">
            <b style={{ color: '#008000' }}>✔ {t('contact.submitSuccess')}</b>
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-3">
            <table className="w-full">
              <tbody>
                {fields.map((field) => (
                  <tr key={field.name}>
                    <td className="py-1 pr-3 align-top whitespace-nowrap">
                      <label htmlFor={`gb-${field.name}`}>{field.label}:</label>
                    </td>
                    <td className="py-1 w-full">
                      <input
                        id={`gb-${field.name}`}
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        aria-invalid={Boolean(errors[field.name])}
                        className="retro-input"
                      />
                      {errors[field.name] && (
                        <span className="retro-field-error">{errors[field.name]}</span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-1 pr-3 align-top whitespace-nowrap">
                    <label htmlFor="gb-message">{t('contact.message')}:</label>
                  </td>
                  <td className="py-1">
                    <textarea
                      id="gb-message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('contact.placeholder.message')}
                      aria-invalid={Boolean(errors.message)}
                      className="retro-input"
                    />
                    {errors.message && <span className="retro-field-error">{errors.message}</span>}
                  </td>
                </tr>
                <tr>
                  <td />
                  <td className="py-2">
                    <span className="flex flex-wrap gap-2">
                      <button type="submit" className="retro-btn" disabled={submitting}>
                        {t(submitting ? 'contact.sending' : 'contact.send')}
                      </button>
                      <button
                        type="button"
                        className="retro-btn"
                        disabled={submitting}
                        onClick={() => {
                          setForm(EMPTY);
                          setErrors({});
                        }}
                      >
                        {t('retro.reset')}
                      </button>
                    </span>
                    {submitError && (
                      <p className="retro-field-error mt-2" role="alert">
                        {t('contact.submitError')}
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        )}
      </RetroWindow>

      <RetroWindow title={t('contact.getInTouch')}>
        <p>{t('contact.description')}</p>
        <ul className="retro-list mt-2">
          <li>
            {t('contact.email')}: <a href="mailto:me@viniciusbregoli.dev">me@viniciusbregoli.dev</a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/viniciusbregoli
            </a>
          </li>
          <li>{t('contact.location')}: Curitiba, PR - Brazil</li>
        </ul>
      </RetroWindow>
    </>
  );
}
