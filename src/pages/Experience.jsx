import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { experiences } from '../data/content'

export default function Experience() {
  const { lang, t } = useLang()
  return (
    <Section title={t.experience.title} subtitle={t.experience.subtitle}>
      <div className="grid">
        {experiences.map((e) => (
          <article key={e.id} className="card">
            <h2>{e.role[lang]}</h2>
            <p className="org">{e.org}</p>
            <p className="muted">{e.period[lang]}</p>
            <p>{e.description[lang]}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
