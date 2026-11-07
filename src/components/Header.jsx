import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { profile } from '../data/content'

const links = [
  ['/', 'about', 'I'],
  ['/projetos', 'projects', 'II'],
  ['/experiencias', 'experience', 'III'],
  ['/contato', 'contact', 'IV'],
]

const NOW = new Date()

function initialTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [theme, setTheme] = useState(initialTheme) // null = segue o sistema

  useEffect(() => {
    const root = document.documentElement
    if (theme) root.dataset.theme = theme
    else delete root.dataset.theme
    try {
      if (theme) localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  function toggleTheme() {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const current = theme ?? (systemDark ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  const date = NOW.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead__top">
          <span>{t.cover.issue} Nº 01 · {date}</span>
          <span className="masthead__controls">
            <button type="button" className="ctl" onClick={toggleTheme} aria-label={t.cover.theme}>
              ◐
            </button>
            <button
              type="button"
              className="ctl"
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              aria-label="Switch language"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </span>
        </div>

        <NavLink to="/" className="nameplate">{profile.name}</NavLink>

        <nav className="toc" aria-label={t.cover.toc}>
          {links.map(([to, key, num]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `toc__link ${isActive ? 'toc__link--active' : ''}`}
            >
              <span className="toc__num">{num}.</span> {t.nav[key]}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
