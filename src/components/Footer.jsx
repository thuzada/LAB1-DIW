import { useLang } from '../context/LanguageContext'
import { profile } from '../data/content'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="colophon">
      <div className="container colophon__inner">
        <p>
          © {YEAR} {profile.name}. {t.footer}
        </p>
        <p className="colophon__note">{t.cover.colophon}</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          {' · '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </p>
      </div>
    </footer>
  )
}
