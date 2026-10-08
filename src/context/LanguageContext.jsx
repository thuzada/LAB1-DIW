import { createContext, useContext, useEffect, useState } from 'react'
import { ui } from '../data/content'

const LanguageContext = createContext(null)

function initialLang() {
  try {
    return localStorage.getItem('lang') || 'pt'
  } catch {
    return 'pt'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: ui[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext)
