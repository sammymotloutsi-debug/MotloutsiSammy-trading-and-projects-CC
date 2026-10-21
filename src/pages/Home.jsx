import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, ClipboardCheck, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { company, products, projects, services } from '../data/company.js'

const values = [
  { icon: BadgeCheck, title: 'Quality workmanship', text: 'Care and attention at every stage of the work.' },
  { icon: ShieldCheck, title: 'Reliable service', text: 'Clear communication and a dependable approach.' },
  { icon: ClipboardCheck, title: 'Practical solutions', text: 'Services guided by your requirements and budget.' },
  { icon: Sparkles, title: 'Customer focused', text: 'Your needs and satisfaction remain at the centre.' },
]

export default function Home() {
  return (
    <>
      <SEO title="Construction, Building & General Trading" description="Discover construction, building, renovation and trading services from Motloutsi Sammy Trading and Projects CC in South Africa." />
      <section className="hero">
        <div className="hero-backdrop" />
        <div className="container hero-content">
          <span className="hero-kicker"><span /> South African construction &amp; trading</span>
          <h1>Welcome to <span>Motloutsi Sammy</span> Trading and Projects CC</h1>
          <p>Your Trusted Partner in Construction, Building and General Trading.</p>
          <div className="hero-actions">
            <Link className="button button-orange" to="/services">Our services <ArrowRight size={17} /></Link>
            <Link className="button button-outline-light" to="/quote">Request a quote <ArrowUpRight size={17} /></Link>
          </div>
          <a className="hero-scroll" href="#intro"><ArrowDown size={15} /> Discover more</a>
        </div>
        <div className="hero-caption">Building quality. Creating opportunity.</div>
      </section>

      <section className="intro-section section-pad" id="intro">
        <div className="container intro-grid">
          <div className="intro-photo">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" alt="Construction professional reviewing a project on site" loading="lazy" />
            <div className="photo-note"><span>MS</span><p>Building quality,<br />creating opportunities.</p></div>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">A partner you can build with</span>
            <h2>Practical expertise.<br /><span>Dependable service.</span></h2>
            <p>{company.name} is a South African company providing construction, building, renovation, buying and selling, and general trading services.</p>
            <p>We aim to deliver quality workmanship, reliable service and affordable solutions, with customer satisfaction at the heart of every enquiry.</p>
            <Link className="text-link" to="/about">Get to know us <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Services built around your needs" text="From construction and renovations to sourcing and trading, we bring practical support to every enquiry." />
          <div className="service-grid">
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
          <div className="section-action"><Link className="button button-navy" to="/services">Explore all services <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="products-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading eyebrow="Trading &amp; supplies" title="Looking for materials or goods?" text="Browse broad sourcing categories and tell us what your project needs." />
            <Link className="text-link" to="/products">Explore product categories <ArrowUpRight size={16} /></Link>
          </div>
          <div className="product-grid home-product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-photo"><img src={product.image} alt={`Illustrative photo for ${product.title.toLowerCase()}; not a confirmed product listing`} loading="lazy" /><span className="example-label">Illustrative photo</span></div>
                <div className="product-info"><h3>{product.title}</h3><p>{product.description}</p></div>
              </article>
            ))}
          </div>
          <p className="product-disclaimer">Photos illustrate product categories only; they do not represent confirmed stock or current availability.</p>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <div className="values-intro">
            <div><span className="eyebrow eyebrow-light">Why work with us</span><h2>A straightforward approach.<br />A standard you can trust.</h2></div>
            <p>We believe good work starts with listening, clear expectations and a commitment to doing the job with care.</p>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }, index) => (
              <div className="value-card" key={title}><span className="value-number">0{index + 1}</span><Icon size={24} /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading eyebrow="Project gallery" title="See projects take shape" text="Illustrative placeholder photos only. Add verified company project images and progress details when available." />
            <Link className="text-link" to="/projects">View project gallery <ArrowUpRight size={16} /></Link>
          </div>
          <div className="project-grid home-projects">
            {projects.slice(0, 3).map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-photo"><img src={project.image} alt={`Placeholder example image for ${project.title.toLowerCase()}`} loading="lazy" /><span className="example-label">Example image</span></div>
                <div className="project-info"><span>{project.category} · {project.status}</span><h3>{project.title}</h3><small>Illustrative placeholder — not a company project photograph.</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div><span className="eyebrow eyebrow-light">Let’s get started</span><h2>Have a project in mind?</h2><p>Share your requirements and request a no-obligation discussion.</p></div>
          <Link className="button button-orange" to="/quote">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  )
}
