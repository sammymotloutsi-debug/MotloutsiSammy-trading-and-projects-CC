import { ArrowUpRight, Building2, Handshake, HardHat, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = { HardHat, Building2, Handshake, PackageCheck }

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon]
  return (
    <article className="service-card">
      <div className="service-image-wrap">
        <img src={service.image} alt="" loading="lazy" />
        <span className="service-icon"><Icon size={22} strokeWidth={1.8} /></span>
      </div>
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link className="text-link" to={`/quote?service=${encodeURIComponent(service.title)}`}>
          Enquire about this service <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  )
}
