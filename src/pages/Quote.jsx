import { ClipboardList, LockKeyhole } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import QuoteForm from '../components/QuoteForm.jsx'

export default function Quote() {
  return (
    <>
      <SEO title="Request a Quote" description="Tell us about your construction, building, renovation or trading requirements using our quote request form." />
      <section className="page-hero">
        <div className="container"><span className="eyebrow eyebrow-light">Start a conversation</span><h1>Let’s talk about<br /><span>your next project.</span></h1><p>Tell us a little about what you need. We’ll help you take the next step.</p></div>
      </section>
      <section className="section-pad quote-section">
        <div className="container quote-layout">
          <div className="quote-aside"><span className="eyebrow">Request a quote</span><h2>Every good project starts with a conversation.</h2><p>Share your project details, location and preferred timing. Fields marked with an asterisk are required.</p><div className="aside-note"><ClipboardList size={21} /><p>Include as much detail as you can so we can better understand what you have in mind.</p></div><div className="aside-note"><LockKeyhole size={21} /><p>Your details are placed into an email draft. This website does not store or send form submissions.</p></div></div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
