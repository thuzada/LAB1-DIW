import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { about, profile, skillGroups } from '../data/content'

export default function About() {
  const { lang, t } = useLang()
  const other = lang === 'pt' ? 'en' : 'pt'

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <header className="cover">
        <p className="kicker">{t.cover.kicker}</p>
        <h1 className="cover__title">
          {t.cover.lines.map((l, i) => (
            <span key={l} className={i === 1 ? 'cover__line cover__line--em' : 'cover__line'}>{l}</span>
          ))}
        </h1>
        <p className="cover__byline">
          {t.hello} <strong>{profile.name}</strong> — {about[lang].role}
        </p>
      </header>

      <div className="spread">
        <aside className="spread__side">
          <h2 className="label">{about[lang].skillsTitle}</h2>
          {skillGroups.map((g) => (
            <div key={g.name.en} className="glossary">
              <h3>{g.name[lang]}</h3>
              <p>{g.items.join(' · ')}</p>
            </div>
          ))}
          <p className="education">{about[lang].education}</p>
        </aside>

        <div className="spread__main">
          <h2 className="label">{about[lang].title}</h2>
          <div className="prose dropcap">
            {about[lang].text.map((p) => <p key={p}>{p}</p>)}
          </div>

          {/* Versão no outro idioma, sempre visível (requisito: PT e EN) */}
          <blockquote className="pull" lang={other}>
            <span className="label">{about[other].title} · {other.toUpperCase()}</span>
            {about[other].text.map((p) => <p key={p}>{p}</p>)}
            <footer>{about[other].education}</footer>
          </blockquote>

          <div className="actions">
            <Link to="/projetos" className="textlink">{t.seeProjects} →</Link>
            <Link to="/contato" className="textlink">{t.contactMe} →</Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
