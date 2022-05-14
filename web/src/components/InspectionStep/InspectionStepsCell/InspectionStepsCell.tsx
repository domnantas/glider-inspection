import type { FindInspectionSteps } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import InspectionSteps from 'src/components/InspectionStep/InspectionSteps'

export const QUERY = gql`
  query FindInspectionSteps {
    inspectionSteps {
      id
      description
      gliderTypeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No inspectionSteps yet. '}
      <Link
        to={routes.newInspectionStep()}
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

export const Success = ({ inspectionSteps }: CellSuccessProps<FindInspectionSteps>) => {
  return <InspectionSteps inspectionSteps={inspectionSteps} />
}
