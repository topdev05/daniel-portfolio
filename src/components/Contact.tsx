import { useState, type FormEvent } from 'react'
import { PROFILE } from '../data/portfolio'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || 'Portfolio inquiry').trim()
    const message = String(data.get('message') || '').trim()

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    window.location.href = mailto
    setSent(true)
    form.reset()
  }

  return (
    <section id="contact" className="section-pad border-t border-line bg-ink-soft/50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-md text-mist">
            Have a project in mind? Want to collaborate or just say hi? Send a message — I&apos;ll
            get back as soon as possible.
          </p>

          <div className="mt-8 space-y-3 text-sm sm:text-base">
            <a
              href={`mailto:${PROFILE.email}`}
              className="block font-medium text-ink transition hover:text-accent"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="block text-mist transition hover:text-accent"
            >
              github.com/{PROFILE.githubHandle}
            </a>
            <p className="text-mist">{PROFILE.location}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-ink">Send a message</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-sm text-mist">Your name *</span>
              <input
                required
                name="name"
                className="w-full rounded-xl border border-line bg-snow px-3.5 py-2.5 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-sm text-mist">Email address *</span>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-xl border border-line bg-snow px-3.5 py-2.5 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm text-mist">Subject</span>
              <input
                name="subject"
                className="w-full rounded-xl border border-line bg-snow px-3.5 py-2.5 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm text-mist">Message *</span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-y rounded-xl border border-line bg-snow px-3.5 py-2.5 text-ink outline-none transition focus:border-accent"
              />
            </label>
          </div>
          <button type="submit" className="btn-primary mt-6">
            Send message
          </button>
          {sent && (
            <p className="mt-3 text-sm text-accent">
              Opening your email client… If nothing opens, write to {PROFILE.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
