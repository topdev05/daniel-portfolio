import { PROFILE } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="section-pad border-t border-line bg-ink-soft/70">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Building reliable products from architecture to deployment
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
          <p>{PROFILE.bio}</p>
          <p>
            I focus on clean architecture, maintainable code, and shipping systems that hold up in
            production — CRM platforms, marketing tooling, AI assistants, and cloud-backed SaaS.
          </p>
        </div>
      </div>
    </section>
  )
}
