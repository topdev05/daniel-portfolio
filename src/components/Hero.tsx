import { PROFILE } from '../data/portfolio'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grid-glow">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-warm/20 blur-3xl" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow animate-rise">
              {PROFILE.location} · {PROFILE.experienceYears} years
            </p>
            <h1 className="animate-rise-delay-1 mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              {PROFILE.name}
            </h1>
            <p className="animate-rise-delay-1 mt-4 font-display text-xl text-accent sm:text-2xl">
              {PROFILE.title}
            </p>
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              {PROFILE.headline}
            </p>

            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8">
              {PROFILE.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs tracking-wide text-mist uppercase">{item.label}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-float lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2.35rem] bg-gradient-to-br from-accent/25 via-transparent to-warm/20 blur-sm"
              aria-hidden
            />
            <div className="absolute inset-5 rounded-full border border-accent/20 animate-pulse-ring" />

            <figure className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_70px_rgba(20,35,27,0.14)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={PROFILE.avatar}
                  alt={`${PROFILE.name} — professional portrait`}
                  className="h-full w-full object-cover object-[center_12%]"
                  width={682}
                  height={968}
                />
                {/* soft light veil for bright style — no badge area */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              <figcaption className="relative border-t border-line bg-white/95 px-6 py-5 backdrop-blur-sm">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">
                      {PROFILE.shortName}
                    </p>
                    <p className="mt-0.5 text-sm text-mist">Available for remote & hybrid work</p>
                  </div>
                  <span className="mb-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(31,143,99,0.18)]" />
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
