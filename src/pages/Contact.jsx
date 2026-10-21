import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { company } from '../data/company.js'

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Contact Motloutsi Sammy Trading and Projects CC about construction, building and general trading services." />
      <section className="page-hero">
        <div className="container"><span className="eyebrow eyebrow-light">We’re here to help</span><h1>Let’s make your<br /><span>next step clearer.</span></h1><p>Reach out to discuss a project, service or supply requirement.</p></div>
      </section>
      <section className="section-pad contact-section">
        <div className="container contact-layout">
          <div className="contact-aside"><span className="eyebrow">Contact details</span><h2>We look forward to hearing from you.</h2><p>Our business contact details will be updated as soon as they are provided.</p>
            <div className="contact-detail"><span><Phone size={19} /></span><div><small>Phone</small><p>{company.phone}</p></div></div>
            <div className="contact-detail"><span><Mail size={19} /></span><div><small>Email</small><p>{company.email}</p></div></div>
            <div className="contact-detail"><span><MapPin size={19} /></span><div><small>Address</small><p>{company.address}</p></div></div>
            <div className="contact-detail"><span><Clock3 size={19} /></span><div><small>Business hours</small><p>{company.businessHours}</p></div></div>
            <div className="map-embed">
              <iframe
                title={`Google Maps location for ${company.address}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${company.address}, South Africa`)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a className="map-directions" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.address}, South Africa`)}`} target="_blank" rel="noreferrer">
              Open this address in Google Maps
            </a>
            <p className="placeholder-note">Email and business hours are still placeholders. Update them in <code>src/data/company.js</code> before publishing.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
