import { motion } from 'framer-motion'
import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/content'

// timeline dinâmica: ordenada por data, do mais antigo ao mais recente
const byDate = (list) => [...list].sort((a, b) => a.date.localeCompare(b.date))

function Works({ items, start, lang, t }) {
  return (
    <ol className="works">
      {items.map((p, i) => (
        <motion.li
          key={p.id}
          className="work"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="work__num" aria-label={`${t.cover.work} ${start + i}`}>
            {String(start + i).padStart(2, '0')}
          </span>
          <div className="work__body">
            <time className="work__date">{p.date}</time>
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
  )
}

export default function Projects() {
  const { lang, t } = useLang()
  const pinned = byDate(projects.filter((p) => p.pinned))
  const others = byDate(projects.filter((p) => !p.pinned))

  return (
    <Section kicker={`II · ${t.cover.work}s`} title={t.projects.title} subtitle={t.projects.subtitle}>
      <h2 className="group-title">{t.projects.pinned}</h2>
      <Works items={pinned} start={1} lang={lang} t={t} />
      {others.length > 0 && (
        <>
          <h2 className="group-title">{t.projects.others}</h2>
          <Works items={others} start={pinned.length + 1} lang={lang} t={t} />
        </>
      )}
    </Section>
  )
}
