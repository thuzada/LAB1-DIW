import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/experiencias" element={<Experience />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
