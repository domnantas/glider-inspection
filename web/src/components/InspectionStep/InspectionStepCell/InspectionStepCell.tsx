import type { FindInspectionStepById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InspectionStep from 'src/components/InspectionStep/InspectionStep'

export const QUERY = gql`
  query FindInspectionStepById($id: Int!) {
    inspectionStep: inspectionStep(id: $id) {
      id
      description
      gliderTypeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InspectionStep not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ inspectionStep }: CellSuccessProps<FindInspectionStepById>) => {
  return <InspectionStep inspectionStep={inspectionStep} />
}
