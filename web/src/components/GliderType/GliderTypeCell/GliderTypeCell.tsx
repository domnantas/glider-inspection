import type { FindGliderTypeById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GliderType from 'src/components/GliderType/GliderType'

export const QUERY = gql`
  query FindGliderTypeById($id: Int!) {
    gliderType: gliderType(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>GliderType not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ gliderType }: CellSuccessProps<FindGliderTypeById>) => {
  return <GliderType gliderType={gliderType} />
}
