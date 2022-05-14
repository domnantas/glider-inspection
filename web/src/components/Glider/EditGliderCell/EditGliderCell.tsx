import type { EditGliderById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import GliderForm from 'src/components/Glider/GliderForm'

export const QUERY = gql`
  query EditGliderById($id: Int!) {
    glider: glider(id: $id) {
      id
      gliderTypeId
      callsign
    }
  }
`
const UPDATE_GLIDER_MUTATION = gql`
  mutation UpdateGliderMutation($id: Int!, $input: UpdateGliderInput!) {
    updateGlider(id: $id, input: $input) {
      id
      gliderTypeId
      callsign
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ glider }: CellSuccessProps<EditGliderById>) => {
  const [updateGlider, { loading, error }] = useMutation(UPDATE_GLIDER_MUTATION, {
    onCompleted: () => {
      toast.success('Glider updated')
      navigate(routes.gliders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { gliderTypeId: parseInt(input.gliderTypeId), })
    updateGlider({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Glider {glider.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GliderForm glider={glider} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
