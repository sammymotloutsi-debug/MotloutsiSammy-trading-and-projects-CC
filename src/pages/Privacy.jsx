import SEO from '../components/SEO.jsx'
import { company } from '../data/company.js'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy information for visitors to the Motloutsi Sammy Trading and Projects CC website." />
      <section className="page-hero"><div className="container"><span className="eyebrow eyebrow-light">Your information</span><h1>Privacy<br /><span>policy.</span></h1><p>How this website handles information you choose to provide.</p></div></section>
      <section className="section-pad"><article className="container legal-content">
        <p><strong>Last updated:</strong> 21 October 2026</p>
        <h2>Information submitted through forms</h2><p>This website does not have a form-processing backend. Quote and contact forms validate the information you enter, then open a draft email in your device’s email application. The email is not sent until you choose to send it there. This website does not collect or store those form details.</p>
        <h2>Third-party services</h2><p>Some page images are loaded from Unsplash, fonts are loaded from Google Fonts, and the Contact page embeds Google Maps for the supplied business address. When your browser loads these services, they may receive standard technical information such as your IP address. Review their privacy policies for more information.</p>
        <h2>Contact</h2><p>For privacy questions, contact {company.name} using the contact details published on this website. Contact information currently shown is placeholder data and must be replaced before launch.</p>
        <h2>Policy updates</h2><p>This policy may be updated when website functionality or information practices change.</p>
      </article></section>
    </>
  )
}
