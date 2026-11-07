import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { profile } from '../data/content'

const { VITE_EMAILJS_SERVICE_ID: SERVICE, VITE_EMAILJS_TEMPLATE_ID: TEMPLATE, VITE_EMAILJS_PUBLIC_KEY: KEY } =
  import.meta.env

const socials = [
  { label: 'E-mail', href: `mailto:${profile.email}` },
  { label: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
]

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [status, setStatus] = useState(null) // 'ok' | 'fail' | 'config'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    if (!SERVICE || !TEMPLATE || !KEY) return setStatus('config')
    try {
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        // nomes usados pelo template "Contact Us" do EmailJS ({{name}}, {{email}}, {{title}}, {{message}})
        { name: data.name, email: data.email, title: 'mensagem pelo portfólio', message: data.message },
        { publicKey: KEY },
      )
      setStatus('ok')
      reset()
    } catch {
      setStatus('fail')
    }
  }

  const messages = { ok: c.ok, fail: c.fail, config: c.notConfigured }

  return (
    <Section kicker={`IV · ${c.title}`} title={t.cover.lead} subtitle={c.subtitle}>
      <div className="contact">
        <div>
          <h2 className="label">{t.cover.elsewhere}</h2>
          <ul className="links">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label">{t.cover.write}</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          {c.name}
          <input
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register('name', { required: c.required })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>

        <label>
          {c.email}
          <input
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email', {
              required: c.required,
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: c.invalidEmail },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>

        <label>
          {c.message}
          <textarea
            rows={5}
            aria-invalid={!!errors.message}
            {...register('message', {
              required: c.required,
              minLength: { value: 10, message: c.minMessage },
            })}
          />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </label>

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? c.sending : c.send}
        </button>

        {status && (
          <p role="status" className={status === 'ok' ? 'success' : 'error'}>
            {messages[status]}
          </p>
        )}
      </form>
        </div>
      </div>
    </Section>
  )
}
