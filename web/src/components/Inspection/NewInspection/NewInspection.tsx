import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import InspectionForm from 'src/components/Inspection/InspectionForm'

const CREATE_INSPECTION_MUTATION = gql`
  mutation CreateInspectionMutation($input: CreateInspectionInput!) {
    createInspection(input: $input) {
      id
    }
  }
`

const NewInspection = () => {
  const [createInspection, { loading, error }] = useMutation(CREATE_INSPECTION_MUTATION, {
    onCompleted: () => {
      toast.success('Inspection created')
      navigate(routes.inspections())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { gliderId: parseInt(input.gliderId), })
    createInspection({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Inspection</h2>
      </header>
      <div className="rw-segment-main">
        <InspectionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInspection
