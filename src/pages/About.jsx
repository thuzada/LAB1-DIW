import { Link } from 'react-router-dom'
import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { about, profile, skills } from '../data/content'

export default function About() {
  const { lang, t } = useLang()
  const other = lang === 'pt' ? 'en' : 'pt'

  return (
    <Section title={`${t.hello} ${profile.name}`}>
      <p className="role">{about[lang].role}</p>

      <div className="card">
        <h2>{about[lang].title}</h2>
        {about[lang].text.map((p) => <p key={p}>{p}</p>)}
        <p className="muted">{about[lang].education}</p>
      </div>

      {/* Versão no outro idioma, sempre visível (requisito: PT e EN) */}
      <div className="card card--alt" lang={other}>
        <h2>{about[other].title} <span className="tag">{other.toUpperCase()}</span></h2>
        {about[other].text.map((p) => <p key={p}>{p}</p>)}
        <p className="muted">{about[other].education}</p>
      </div>

      <h2>{about[lang].skillsTitle}</h2>
      <ul className="chips">
        {skills.map((s) => <li key={s} className="chip">{s}</li>)}
      </ul>

      <div className="actions">
        <Link to="/projetos" className="btn">{t.seeProjects}</Link>
        <Link to="/contato" className="btn btn--ghost">{t.contactMe}</Link>
      </div>
    </Section>
  )
}
