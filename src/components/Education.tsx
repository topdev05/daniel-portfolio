import { EDUCATION } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="section-pad border-t border-line bg-snow">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Academic</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Education background
          </h2>
        </div>

        <div className="grid gap-5">
          {EDUCATION.map((item) => (
            <article key={item.id} className="surface rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-mist">{item.period}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{item.degree}</h3>
              <p className="mt-1 text-accent">{item.school}</p>
              <p className="mt-4 max-w-3xl text-mist">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
