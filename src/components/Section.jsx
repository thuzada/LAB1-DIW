import { motion } from 'framer-motion'

export default function Section({ title, subtitle, children }) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="section__title">{title}</h1>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {children}
    </motion.section>
  )
}
