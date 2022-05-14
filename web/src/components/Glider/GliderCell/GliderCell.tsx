import type { FindGliderById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Glider from 'src/components/Glider/Glider'

export const QUERY = gql`
  query FindGliderById($id: Int!) {
    glider: glider(id: $id) {
      id
      gliderTypeId
      callsign
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Glider not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ glider }: CellSuccessProps<FindGliderById>) => {
  return <Glider glider={glider} />
}
