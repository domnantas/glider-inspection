import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InspectionPage = () => {
  return (
    <>
      <MetaTags title="Inspection" description="Inspection page" />

      <h1>InspectionPage</h1>
      <p>
        Find me in <code>./web/src/pages/InspectionPage/InspectionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>inspection</code>, link to me with `
        <Link to={routes.inspection()}>Inspection</Link>`
      </p>
    </>
  )
}

export default InspectionPage
