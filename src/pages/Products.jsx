import { ArrowUpRight, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { products } from '../data/company.js'

export default function Products() {
  return (
    <>
      <SEO title="Products & Supplies" description="Explore building material, project supply and general merchandise categories for enquiries and sourcing through Motloutsi Sammy Trading and Projects CC." />
      <section className="page-hero">
        <div className="container"><span className="eyebrow eyebrow-light">Trading &amp; sourcing</span><h1>Products and supplies<br /><span>for your requirements.</span></h1><p>Tell us what you need and enquire about sourcing for your project or business.</p></div>
      </section>
      <section className="section-pad product-page">
        <div className="container">
          <div className="gallery-notice"><strong>Photo and availability note:</strong> These are illustrative category photos, not confirmed product listings or current stock. Product specifications, brands, prices and availability have not been supplied. Please enquire to discuss your requirements.</div>
          <SectionHeading eyebrow="Supply categories" title="What are you looking for?" text="Browse the broad categories below. We can discuss sourcing based on your product list, quantities and project needs." />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-photo"><img src={product.image} alt={`Illustrative photo for ${product.title.toLowerCase()}; not a confirmed product listing`} loading="lazy" /><span className="example-label">Illustrative photo</span></div>
                <div className="product-info"><span className="product-icon"><PackageCheck size={19} /></span><h3>{product.title}</h3><p>{product.description}</p><Link className="text-link" to={`/quote?service=${encodeURIComponent('Buying and Selling')}`}>Enquire about sourcing <ArrowUpRight size={16} /></Link></div>
              </article>
            ))}
          </div>
          <div className="product-enquiry"><div><span className="eyebrow eyebrow-light">Looking for something specific?</span><h2>Send us your product list.</h2><p>Include item names, quantities and delivery location in your enquiry.</p></div><Link className="button button-orange" to={`/quote?service=${encodeURIComponent('General Trading')}`}>Make an enquiry <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </>
  )
}
