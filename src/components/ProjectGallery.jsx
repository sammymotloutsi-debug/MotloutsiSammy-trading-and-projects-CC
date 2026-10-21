import { useState } from 'react'
import { projects } from '../data/company.js'

const categories = ['All examples', 'Construction', 'Renovation', 'Improvements']

export default function ProjectGallery() {
  const [active, setActive] = useState('All examples')
  const visible = active === 'All examples' ? projects : projects.filter((project) => project.category === active)

  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter project examples">
        {categories.map((category) => (
          <button key={category} type="button" className={active === category ? 'filter-chip active' : 'filter-chip'} aria-pressed={active === category} onClick={() => setActive(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-photo">
              <img src={project.image} alt={`Placeholder example image for ${project.title.toLowerCase()}`} loading="lazy" />
              <span className="example-label">Example image</span>
            </div>
            <div className="project-info">
              <span>{project.category} · {project.status}</span>
              <h3>{project.title}</h3>
              <small>Illustrative photo only — not a company project or progress update.</small>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
