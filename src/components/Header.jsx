import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { company } from '../data/company.js'

const links = [
  ['Home', '/'],
  ['About us', '/about'],
  ['Services', '/services'],
  ['Products', '/products'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span>Construction · Building · General Trading</span>
          <span className="topline-region">Proudly serving South Africa</span>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link className="brand" to="/" onClick={close} aria-label={`${company.name} home`}>
          <span className="brand-mark" aria-hidden="true"><span>M</span></span>
          <span className="brand-copy">
            <strong>Motloutsi Sammy</strong>
            <small>TRADING &amp; PROJECTS CC</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link className="button button-orange nav-quote" to="/quote" onClick={close}>
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
