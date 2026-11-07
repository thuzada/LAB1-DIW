import { motion } from 'framer-motion'

export default function Section({ kicker, title, subtitle, children }) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <header className="section__head">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1 className="section__title">{title}</h1>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
      </header>
      {children}
    </motion.section>
  )
}
