import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { company, services } from '../data/company.js'

export default function QuoteForm() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState('')
  const requestedService = searchParams.get('service') || ''

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const fields = [
      ['Full name', data.get('name')],
      ['Phone number', data.get('phone')],
      ['Email address', data.get('email')],
      ['Service', data.get('service')],
      ['Project location', data.get('location')],
      ['Project description', data.get('description')],
      ['Estimated budget', data.get('budget') || 'Not provided'],
      ['Preferred start date', data.get('startDate') || 'Not provided'],
    ]
    const body = encodeURIComponent(fields.map(([label, value]) => `${label}: ${value}`).join('\n'))
    const subject = encodeURIComponent(`Quote request — ${data.get('service')}`)
    window.location.href = `mailto:${company.quoteEmail}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with your quote request. It is not sent until you review and send the email.')
    event.currentTarget.reset()
  }

  return (
    <form className="form-card quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name <span>*</span><input name="name" autoComplete="name" required /></label>
        <label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" pattern="[0-9+() .-]{7,20}" title="Enter a phone number using 7–20 digits, spaces or phone punctuation." required /></label>
        <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required /></label>
        <label>Type of service <span>*</span>
          <select name="service" defaultValue={requestedService} required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="full-field">Project location <span>*</span><input name="location" autoComplete="address-level2" placeholder="Town, city or area" required /></label>
        <label className="full-field">Project description <span>*</span><textarea name="description" rows="5" required minLength="10" placeholder="Tell us what you need and any details that will help us understand your project." /></label>
        <label>Estimated budget <small>(optional)</small>
          <select name="budget" defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under R25,000</option><option>R25,000 – R100,000</option>
            <option>R100,000 – R500,000</option><option>Over R500,000</option>
            <option>To be discussed</option>
          </select>
        </label>
        <label>Preferred project start date <input name="startDate" type="date" /></label>
      </div>
      <button className="button button-orange" type="submit">Prepare quote request</button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-note">Your email application will open with your details. Nothing is sent or stored on this website; review the message and press Send in your email app.</p>
    </form>
  )
}
