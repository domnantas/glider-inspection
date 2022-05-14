import type { FindInspectionById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Inspection from 'src/components/Inspection/Inspection'

export const QUERY = gql`
  query FindInspectionById($id: Int!) {
    inspection: inspection(id: $id) {
      id
      date
      gliderId
      inspectorName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Inspection not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ inspection }: CellSuccessProps<FindInspectionById>) => {
  return <Inspection inspection={inspection} />
}
