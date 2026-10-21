import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Projects from './pages/Projects.jsx'
import Quote from './pages/Quote.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow">404 — Page not found</span><h1>This page couldn’t be found.</h1><Link className="button button-orange" to="/">Return home</Link></div></section>
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
