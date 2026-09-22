import { useMemo, useState } from 'react'
import { PROJECTS, type ProjectStatus } from '../data/portfolio'

const FILTERS: Array<'All' | ProjectStatus> = [
  'All',
  'Featured',
  'Completed',
  'In Progress',
  'Archived',
]

export function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')

  const visible = useMemo(() => {
    if (active === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.status.includes(active))
  }, [active])

  return (
    <section id="projects" className="section-pad border-t border-line bg-snow">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-4 text-mist">
            Selected e-commerce, medtech, auction, and architecture platforms — from retail and
            fragrance to BIM studios and creative portfolios.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={active === filter ? 'filter-chip-active' : 'filter-chip'}
            >
              {filter === 'Featured' ? '★ Featured' : filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_32px_rgba(20,35,27,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,35,27,0.1)]"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-ink-soft"
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.status.map((status) => (
                      <span
                        key={status}
                        className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-ink uppercase shadow-sm backdrop-blur-sm"
                      >
                        {status}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              <div className="flex flex-1 flex-col bg-white p-4">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist">
                  {project.summary}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-ink-soft px-2 py-0.5 text-[11px] font-medium text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex pt-4 text-sm font-semibold text-accent transition group-hover:text-accent-soft"
                >
                  Visit →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
