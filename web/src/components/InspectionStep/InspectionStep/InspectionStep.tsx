import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_INSPECTION_STEP_MUTATION = gql`
  mutation DeleteInspectionStepMutation($id: Int!) {
    deleteInspectionStep(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const InspectionStep = ({ inspectionStep }) => {
  const [deleteInspectionStep] = useMutation(DELETE_INSPECTION_STEP_MUTATION, {
    onCompleted: () => {
      toast.success('InspectionStep deleted')
      navigate(routes.inspectionSteps())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete inspectionStep ' + id + '?')) {
      deleteInspectionStep({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">InspectionStep {inspectionStep.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inspectionStep.id}</td>
            </tr><tr>
              <th>Description</th>
              <td>{inspectionStep.description}</td>
            </tr><tr>
              <th>Glider type id</th>
              <td>{inspectionStep.gliderTypeId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInspectionStep({ id: inspectionStep.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(inspectionStep.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InspectionStep
