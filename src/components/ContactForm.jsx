import { useState } from 'react'
import { company } from '../data/company.js'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent(`Website enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${company.quoteEmail}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with this enquiry. It will only be sent when you press Send there.')
    event.currentTarget.reset()
  }

  return (
    <form className="form-card contact-form" onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <p className="form-intro">Share a few details and we’ll be ready to discuss your enquiry.</p>
      <div className="form-grid">
        <label>Full name <span>*</span><input name="name" autoComplete="name" required /></label>
        <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="full-field">Your message <span>*</span><textarea name="message" rows="5" required /></label>
      </div>
      <button className="button button-orange" type="submit">Prepare email enquiry</button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-note">This form opens your email app; it does not send a message automatically.</p>
    </form>
  )
}
