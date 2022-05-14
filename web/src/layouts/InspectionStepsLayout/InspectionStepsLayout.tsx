import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type InspectionStepLayoutProps = {
  children: React.ReactNode
}

const InspectionStepsLayout = ({ children }: InspectionStepLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.inspectionSteps()}
            className="rw-link"
          >
            InspectionSteps
          </Link>
        </h1>
        <Link
          to={routes.newInspectionStep()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New InspectionStep
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default InspectionStepsLayout
