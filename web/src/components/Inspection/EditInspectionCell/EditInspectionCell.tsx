import type { EditInspectionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import InspectionForm from 'src/components/Inspection/InspectionForm'

export const QUERY = gql`
  query EditInspectionById($id: Int!) {
    inspection: inspection(id: $id) {
      id
      date
      gliderId
      inspectorName
    }
  }
`
const UPDATE_INSPECTION_MUTATION = gql`
  mutation UpdateInspectionMutation($id: Int!, $input: UpdateInspectionInput!) {
    updateInspection(id: $id, input: $input) {
      id
      date
      gliderId
      inspectorName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ inspection }: CellSuccessProps<EditInspectionById>) => {
  const [updateInspection, { loading, error }] = useMutation(UPDATE_INSPECTION_MUTATION, {
    onCompleted: () => {
      toast.success('Inspection updated')
      navigate(routes.inspections())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { gliderId: parseInt(input.gliderId), })
    updateInspection({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Inspection {inspection.id}</h2>
      </header>
      <div className="rw-segment-main">
        <InspectionForm inspection={inspection} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
