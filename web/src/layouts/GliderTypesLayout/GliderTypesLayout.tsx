import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type GliderTypeLayoutProps = {
  children: React.ReactNode
}

const GliderTypesLayout = ({ children }: GliderTypeLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.gliderTypes()}
            className="rw-link"
          >
            GliderTypes
          </Link>
        </h1>
        <Link
          to={routes.newGliderType()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New GliderType
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default GliderTypesLayout
