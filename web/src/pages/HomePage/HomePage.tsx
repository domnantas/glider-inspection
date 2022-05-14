import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Sklandymas</h1>
      <Link to={routes.inspection()}>Antžeminis patikrinimas</Link>
    </>
  )
}

export default HomePage
