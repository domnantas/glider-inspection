import type { FindGliderTypes } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import GliderTypes from 'src/components/GliderType/GliderTypes'

export const QUERY = gql`
  query FindGliderTypes {
    gliderTypes {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No gliderTypes yet. '}
      <Link
        to={routes.newGliderType()}
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

export const Success = ({ gliderTypes }: CellSuccessProps<FindGliderTypes>) => {
  return <GliderTypes gliderTypes={gliderTypes} />
}
