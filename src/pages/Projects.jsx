import { motion } from 'framer-motion'
import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/content'

// timeline dinâmica: ordenada por data, do mais antigo ao mais recente
const timeline = [...projects].sort((a, b) => a.date.localeCompare(b.date))

// '2024-04' -> 'abr/2024' (pt) ou 'Apr 2024' (en)
function formatDate(date, lang) {
  const [year, month] = date.split('-').map(Number)
  const name = new Date(year, month - 1).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { month: 'short' })
  return lang === 'pt' ? `${name.replace('.', '')}/${year}` : `${name} ${year}`
}

export default function Projects() {
  const { lang, t } = useLang()

  return (
    <Section kicker={`II · ${t.cover.work}s`} title={t.projects.title} subtitle={t.projects.subtitle}>
      <ol className="works">
        {timeline.map((p, i) => (
          <motion.li
            key={p.id}
            className="work"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="work__num" aria-label={`${t.cover.work} ${i + 1}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="work__body">
              <p className="work__meta">
                <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
                {p.pinned && <span className="badge">{t.projects.pinned}</span>}
              </p>
              <h3 className="work__name">{p.name[lang]}</h3>
              <p className="work__desc">{p.description[lang]}</p>
              <ul className="tags">
                {p.tech.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <a href={p.repo} target="_blank" rel="noreferrer" className="work__link">
              {t.projects.repo} ↗
            </a>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
