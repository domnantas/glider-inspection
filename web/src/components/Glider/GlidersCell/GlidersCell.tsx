import type { FindGliders } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Gliders from 'src/components/Glider/Gliders'

export const QUERY = gql`
  query FindGliders {
    gliders {
      id
      gliderTypeId
      callsign
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No gliders yet. '}
      <Link
        to={routes.newGlider()}
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

export const Success = ({ gliders }: CellSuccessProps<FindGliders>) => {
  return <Gliders gliders={gliders} />
}
