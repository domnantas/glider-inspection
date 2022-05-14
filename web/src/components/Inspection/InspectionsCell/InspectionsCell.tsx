import type { FindInspections } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Inspections from 'src/components/Inspection/Inspections'

export const QUERY = gql`
  query FindInspections {
    inspections {
      id
      date
      gliderId
      inspectorName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No inspections yet. '}
      <Link
        to={routes.newInspection()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ inspections }: CellSuccessProps<FindInspections>) => {
  return <Inspections inspections={inspections} />
}
