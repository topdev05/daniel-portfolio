import { PROFILE } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-snow py-10">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mist">
          © {year} {PROFILE.shortName}. Built with React + Vite.
        </p>
        <p className="text-sm text-mist">
          Designed & developed by {PROFILE.shortName.split(' ')[0]}
        </p>
      </div>
    </footer>
  )
}
