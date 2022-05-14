import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/InspectionStep/InspectionStepsCell'

const DELETE_INSPECTION_STEP_MUTATION = gql`
  mutation DeleteInspectionStepMutation($id: Int!) {
    deleteInspectionStep(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const InspectionStepsList = ({ inspectionSteps }) => {
  const [deleteInspectionStep] = useMutation(DELETE_INSPECTION_STEP_MUTATION, {
    onCompleted: () => {
      toast.success('InspectionStep deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete inspectionStep ' + id + '?')) {
      deleteInspectionStep({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Glider type id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inspectionSteps.map((inspectionStep) => (
            <tr key={inspectionStep.id}>
              <td>{truncate(inspectionStep.id)}</td>
              <td>{truncate(inspectionStep.description)}</td>
              <td>{truncate(inspectionStep.gliderTypeId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.inspectionStep({ id: inspectionStep.id })}
                    title={'Show inspectionStep ' + inspectionStep.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInspectionStep({ id: inspectionStep.id })}
                    title={'Edit inspectionStep ' + inspectionStep.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete inspectionStep ' + inspectionStep.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(inspectionStep.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InspectionStepsList
