import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
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
    <Section title={t.projects.title} subtitle={t.projects.subtitle}>
      <ol className="timeline">
        {timeline.map((p, i) => (
          <motion.li
            key={p.id}
            className="timeline__item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="timeline__meta">
              <time className="timeline__date" dateTime={p.date}>{formatDate(p.date, lang)}</time>
              {p.pinned && <span className="tag">{t.projects.pinned}</span>}
            </div>
            <article className="card project">
              <h2>{p.name[lang]}</h2>
              <p>{p.description[lang]}</p>
              <ul className="chips">
                {p.tech.map((x) => <li key={x} className="chip">{x}</li>)}
              </ul>
              <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <FaGithub /> {t.projects.repo}
              </a>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
