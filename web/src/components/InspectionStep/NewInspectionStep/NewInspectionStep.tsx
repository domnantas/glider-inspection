import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import InspectionStepForm from 'src/components/InspectionStep/InspectionStepForm'

const CREATE_INSPECTION_STEP_MUTATION = gql`
  mutation CreateInspectionStepMutation($input: CreateInspectionStepInput!) {
    createInspectionStep(input: $input) {
      id
    }
  }
`

const NewInspectionStep = () => {
  const [createInspectionStep, { loading, error }] = useMutation(CREATE_INSPECTION_STEP_MUTATION, {
    onCompleted: () => {
      toast.success('InspectionStep created')
      navigate(routes.inspectionSteps())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { gliderTypeId: parseInt(input.gliderTypeId), })
    createInspectionStep({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New InspectionStep</h2>
      </header>
      <div className="rw-segment-main">
        <InspectionStepForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInspectionStep
