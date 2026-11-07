import { motion } from 'framer-motion'
import Section from '../components/Section'
import { useLang } from '../context/LanguageContext'
import { experiences } from '../data/content'

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

export default function Experience() {
  const { lang, t } = useLang()
  return (
    <Section kicker={`III · ${t.cover.chapter}s`} title={t.experience.title} subtitle={t.experience.subtitle}>
      <div className="chapters">
        {experiences.map((e, i) => (
          <motion.article
            key={e.id}
            className="chapter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="chapter__no">{t.cover.chapter} {roman[i]}</p>
            <div>
              <h2 className="chapter__org">{e.org}</h2>
              <p className="chapter__role">{e.role[lang]} <span>· {e.period[lang]}</span></p>
              <p className="chapter__text">{e.description[lang]}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
