import { HeartHandshake, ShieldCheck, Target, Eye, Award, HardHat } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { company } from '../data/company.js'

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'We value honest communication and responsible business practices.' },
  { icon: Award, title: 'Quality', text: 'We aim for careful workmanship and thoughtful attention to detail.' },
  { icon: HeartHandshake, title: 'Customer commitment', text: 'We listen to our customers and work towards practical solutions.' },
  { icon: HardHat, title: 'Safety and reliability', text: 'We recognise the importance of safe, reliable work practices.' },
]

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about the mission, values and commitment of Motloutsi Sammy Trading and Projects CC." />
      <section className="page-hero">
        <div className="container"><span className="eyebrow eyebrow-light">Who we are</span><h1>Built on service.<br /><span>Driven by possibility.</span></h1><p>Quality workmanship, reliable services and practical solutions for South African customers.</p></div>
      </section>
      <section className="section-pad">
        <div className="container about-intro-grid">
          <div className="about-image"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Modern building exterior representing construction and development" loading="lazy" /></div>
          <div className="about-copy"><span className="eyebrow">About our company</span><h2>One company. A practical range of services.</h2><p>{company.name} is a South African company providing professional construction, building, renovation, buying and selling, and general trading services.</p><p>We aim to deliver quality workmanship, reliable services, affordable solutions and customer satisfaction. Every project begins with understanding what matters to the customer and responding with a considered approach.</p><p>We do not claim a project history, registration details or certifications that have not been provided. Our focus is on serving each enquiry with professionalism and care.</p></div>
        </div>
      </section>
      <section className="purpose-section section-pad">
        <div className="container purpose-grid">
          <article><span className="purpose-icon"><Target size={23} /></span><span className="eyebrow">Our mission</span><h2>Deliver meaningful value through dependable service.</h2><p>To provide quality construction, building, renovation and trading services with care, reliability and practical solutions that meet customer needs.</p></article>
          <article><span className="purpose-icon"><Eye size={23} /></span><span className="eyebrow">Our vision</span><h2>Build a trusted name through the work we do.</h2><p>To grow as a reliable South African business, creating opportunities and delivering excellence through customer-focused service.</p></article>
        </div>
      </section>
      <section className="section-pad">
        <div className="container"><SectionHeading eyebrow="What guides us" title="Our core values" text="The principles we aim to bring to every customer relationship and service enquiry." centered /><div className="values-grid about-values">{values.map(({ icon: Icon, title, text }) => <article className="about-value-card" key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>
      <section className="quality-band"><div className="container quality-band-inner"><div><span className="eyebrow eyebrow-light">Our commitment</span><h2>Quality in the work.<br />Respect in the relationship.</h2></div><p>We strive to understand the scope, communicate clearly and keep customer satisfaction, safety and reliability in view throughout our work.</p></div></section>
    </>
  )
}
