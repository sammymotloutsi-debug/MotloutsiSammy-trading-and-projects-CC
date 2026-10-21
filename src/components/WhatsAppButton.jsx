import { MessageCircle } from 'lucide-react'
import { company } from '../data/company.js'

export default function WhatsAppButton() {
  const number = company.whatsappNumber.replace(/\D/g, '')

  if (!number) {
    return (
      <span className="whatsapp-float is-disabled" title="Add your WhatsApp number in src/data/company.js">
        <MessageCircle size={23} />
        <span className="sr-only">WhatsApp contact is not configured yet</span>
      </span>
    )
  }

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={23} />
    </a>
  )
}
