import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { services } from '../data/company.js'

export default function Services() {
  return (
    <>
      <SEO title="Our Services" description="Explore construction, building, buying and selling, and general trading services in South Africa." />
      <section className="page-hero">
        <div className="container"><span className="eyebrow eyebrow-light">What we can help with</span><h1>Services for projects<br /><span>of every scale.</span></h1><p>Reliable, practical support across construction, building and general trading.</p></div>
      </section>
      <section className="section-pad">
        <div className="container"><SectionHeading eyebrow="Our services" title="The support you need, in one place" text="Explore our service areas and send us an enquiry to discuss your requirements." /><div className="service-grid services-page-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div></div>
      </section>
      <section className="service-detail-section section-pad">
        <div className="container">
          {services.map((service, index) => (
            <article className={`service-detail${index % 2 ? ' reverse' : ''}`} key={service.id} id={service.id}>
              <div className="service-detail-image"><img src={service.image} alt="" loading="lazy" /></div>
              <div className="service-detail-copy"><span className="eyebrow">0{index + 1} / Service area</span><h2>{service.title}</h2><p>{service.description}</p><ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><Link className="button button-navy" to={`/quote?service=${encodeURIComponent(service.title)}`}>Enquire about this service <ArrowRight size={16} /></Link></div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
