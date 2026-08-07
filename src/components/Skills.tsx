import { useMemo, useState } from 'react'
import { SKILL_FILTERS, SKILL_ITEMS, type SkillCategory, type SkillItem } from '../data/portfolio'

const CATEGORY_TONE: Record<Exclude<SkillCategory, 'All'>, string> = {
  Languages: '#3f7a4c',
  Frontend: '#0d9488',
  Backend: '#7c3aed',
  Databases: '#db2777',
  AI: '#ca8a04',
  APIs: '#0284c7',
  Cloud: '#ea580c',
}

function SkillCard({ skill }: { skill: SkillItem }) {
  const tone = CATEGORY_TONE[skill.category]
  const markColor = skill.color === '#F7DF1E' || skill.color === '#61DAFB' ? '#14231b' : '#fff'

  return (
    <article className="skill-card group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className="skill-card-mark"
            style={{ background: skill.color, color: markColor }}
            aria-hidden
          >
            {skill.mark}
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-display text-base font-semibold text-ink sm:text-lg">
              {skill.name}
            </h3>
            <span className="skill-card-badge" style={{ color: tone, background: `${tone}18` }}>
              {skill.category}
            </span>
          </div>
        </div>
        <p className="shrink-0 text-sm font-semibold tabular-nums" style={{ color: tone }}>
          {skill.level}%
        </p>
      </div>

      <div className="skill-card-bar" aria-hidden>
        <span style={{ width: `${skill.level}%`, background: tone }} />
      </div>
    </article>
  )
}

export function Skills() {
  const [active, setActive] = useState<SkillCategory>('All')

  const visible = useMemo(() => {
    if (active === 'All') return SKILL_ITEMS
    return SKILL_ITEMS.filter((skill) => skill.category === active)
  }, [active])

  return (
    <section id="skills" className="section-pad border-t border-line bg-ink-soft/50">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Tech stack</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Skills & expertise
          </h2>
          <p className="mt-4 text-mist">
            Click a tag to filter — each card shows a skill with proficiency.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {SKILL_FILTERS.map((filter) => {
            const isActive = active === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'border-accent bg-white text-accent shadow-sm'
                    : 'border-line bg-white/80 text-mist hover:border-accent/40 hover:text-ink'
                }`}
              >
                {filter === 'All' ? 'ALL' : filter}
              </button>
            )
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-8 text-center text-mist">No skills in this category.</p>
        )}
      </div>
    </section>
  )
}
