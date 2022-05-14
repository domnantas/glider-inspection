import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import GliderForm from 'src/components/Glider/GliderForm'

const CREATE_GLIDER_MUTATION = gql`
  mutation CreateGliderMutation($input: CreateGliderInput!) {
    createGlider(input: $input) {
      id
    }
  }
`

const NewGlider = () => {
  const [createGlider, { loading, error }] = useMutation(CREATE_GLIDER_MUTATION, {
    onCompleted: () => {
      toast.success('Glider created')
      navigate(routes.gliders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { gliderTypeId: parseInt(input.gliderTypeId), })
    createGlider({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Glider</h2>
      </header>
      <div className="rw-segment-main">
        <GliderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGlider
