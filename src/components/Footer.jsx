import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLang } from '../context/LanguageContext'
import { profile } from '../data/content'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. {t.footer}
        </span>
        <span className="footer__icons">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </span>
      </div>
    </footer>
  )
}
