import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import GliderTypeForm from 'src/components/GliderType/GliderTypeForm'

const CREATE_GLIDER_TYPE_MUTATION = gql`
  mutation CreateGliderTypeMutation($input: CreateGliderTypeInput!) {
    createGliderType(input: $input) {
      id
    }
  }
`

const NewGliderType = () => {
  const [createGliderType, { loading, error }] = useMutation(CREATE_GLIDER_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('GliderType created')
      navigate(routes.gliderTypes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createGliderType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New GliderType</h2>
      </header>
      <div className="rw-segment-main">
        <GliderTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGliderType
