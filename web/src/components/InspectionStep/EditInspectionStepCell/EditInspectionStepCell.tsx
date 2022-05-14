import type { EditInspectionStepById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import InspectionStepForm from 'src/components/InspectionStep/InspectionStepForm'

export const QUERY = gql`
  query EditInspectionStepById($id: Int!) {
    inspectionStep: inspectionStep(id: $id) {
      id
      description
      gliderTypeId
    }
  }
`
const UPDATE_INSPECTION_STEP_MUTATION = gql`
  mutation UpdateInspectionStepMutation($id: Int!, $input: UpdateInspectionStepInput!) {
    updateInspectionStep(id: $id, input: $input) {
      id
      description
      gliderTypeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ inspectionStep }: CellSuccessProps<EditInspectionStepById>) => {
  const [updateInspectionStep, { loading, error }] = useMutation(UPDATE_INSPECTION_STEP_MUTATION, {
    onCompleted: () => {
      toast.success('InspectionStep updated')
      navigate(routes.inspectionSteps())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { gliderTypeId: parseInt(input.gliderTypeId), })
    updateInspectionStep({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit InspectionStep {inspectionStep.id}</h2>
      </header>
      <div className="rw-segment-main">
        <InspectionStepForm inspectionStep={inspectionStep} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
