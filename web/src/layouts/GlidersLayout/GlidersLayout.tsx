import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type GliderLayoutProps = {
  children: React.ReactNode
}

const GlidersLayout = ({ children }: GliderLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.gliders()}
            className="rw-link"
          >
            Gliders
          </Link>
        </h1>
        <Link
          to={routes.newGlider()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Glider
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default GlidersLayout
