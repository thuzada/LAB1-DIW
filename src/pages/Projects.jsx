import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/content'

// timeline dinâmica: ordenada por data, do mais antigo ao mais recente
const byDate = (list) => [...list].sort((a, b) => a.date.localeCompare(b.date))

function Timeline({ items, lang, t }) {
  return (
    <ol className="timeline">
      {items.map((p, i) => (
        <motion.li
          key={p.id}
          className="timeline__item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <time className="timeline__date">{p.date}</time>
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
  )
}

export default function Projects() {
  const { lang, t } = useLang()
  const pinned = byDate(projects.filter((p) => p.pinned))
  const others = byDate(projects.filter((p) => !p.pinned))

  return (
    <Section title={t.projects.title} subtitle={t.projects.subtitle}>
      <h2 className="group-title">{t.projects.pinned}</h2>
      <Timeline items={pinned} lang={lang} t={t} />
      {others.length > 0 && (
        <>
          <h2 className="group-title">{t.projects.others}</h2>
          <Timeline items={others} lang={lang} t={t} />
        </>
      )}
    </Section>
  )
}
