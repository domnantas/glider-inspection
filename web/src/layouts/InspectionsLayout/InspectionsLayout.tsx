import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type InspectionLayoutProps = {
  children: React.ReactNode
}

const InspectionsLayout = ({ children }: InspectionLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.inspections()}
            className="rw-link"
          >
            Inspections
          </Link>
        </h1>
        <Link
          to={routes.newInspection()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Inspection
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default InspectionsLayout
