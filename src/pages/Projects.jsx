import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'

export default function Projects() {
  return (
    <>
      <SEO title="Project Gallery" description="Browse illustrative construction, residential, renovation and building improvement examples. Replace placeholders with verified company project photographs." />
      <section className="page-hero">
        <div className="container"><span className="eyebrow eyebrow-light">Project gallery</span><h1>Our work,<br /><span>as it takes shape.</span></h1><p>Project photos and updates will be added here as real project details are provided.</p></div>
      </section>
      <section className="section-pad">
        <div className="container"><div className="gallery-notice"><strong>Image note:</strong> These stock photos are visual examples only. They are not photographs of this company’s work and do not indicate completed or active projects. Replace them with verified project photos and accurate progress updates before presenting them as company projects.</div><SectionHeading eyebrow="Project examples" title="Browse by project type" text="These categories provide a gallery layout. Add your own project title, location (if appropriate), photos and current status in the project data." /><ProjectGallery /></div>
      </section>
    </>
  )
}
