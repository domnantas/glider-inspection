import type { EditGliderTypeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import GliderTypeForm from 'src/components/GliderType/GliderTypeForm'

export const QUERY = gql`
  query EditGliderTypeById($id: Int!) {
    gliderType: gliderType(id: $id) {
      id
      name
    }
  }
`
const UPDATE_GLIDER_TYPE_MUTATION = gql`
  mutation UpdateGliderTypeMutation($id: Int!, $input: UpdateGliderTypeInput!) {
    updateGliderType(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ gliderType }: CellSuccessProps<EditGliderTypeById>) => {
  const [updateGliderType, { loading, error }] = useMutation(UPDATE_GLIDER_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('GliderType updated')
      navigate(routes.gliderTypes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateGliderType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit GliderType {gliderType.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GliderTypeForm gliderType={gliderType} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
