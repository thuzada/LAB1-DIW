import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLang } from '../context/LanguageContext'
import { profile } from '../data/content'

const links = [
  ['/', 'about'],
  ['/projetos', 'projects'],
  ['/experiencias', 'experience'],
  ['/contato', 'contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          {'<'}{profile.name.split(' ')[0]}{' />'}
        </NavLink>

        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map(([to, key]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {t.nav[key]}
            </NavLink>
          ))}
          <button
            className="lang-btn"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label="Switch language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      </div>
    </header>
  )
}
