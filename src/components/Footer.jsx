import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/company.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand brand-light" to="/">
            <span className="brand-mark" aria-hidden="true"><span>M</span></span>
            <span className="brand-copy">
              <strong>Motloutsi Sammy</strong>
              <small>TRADING &amp; PROJECTS CC</small>
            </span>
          </Link>
          <p>{company.slogan}</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/products">Products &amp; supplies</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/privacy">Privacy policy</Link>
        </div>
        <div className="footer-column footer-contact">
          <h3>Get in touch</h3>
          <p><Phone size={16} /> <span>{company.phone}</span></p>
          <p><Mail size={16} /> <span>{company.email}</span></p>
          <p><MapPin size={16} /> <span>{company.address}</span></p>
        </div>
        <div className="footer-cta">
          <h3>Have a project in mind?</h3>
          <p>Tell us what you need and we’ll help you explore the next step.</p>
          <Link to="/quote" className="footer-link">Start an enquiry <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>South Africa</span>
        </div>
      </div>
    </footer>
  )
}
