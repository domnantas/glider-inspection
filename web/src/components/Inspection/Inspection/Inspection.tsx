import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_INSPECTION_MUTATION = gql`
  mutation DeleteInspectionMutation($id: Int!) {
    deleteInspection(id: $id) {
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

const Inspection = ({ inspection }) => {
  const [deleteInspection] = useMutation(DELETE_INSPECTION_MUTATION, {
    onCompleted: () => {
      toast.success('Inspection deleted')
      navigate(routes.inspections())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete inspection ' + id + '?')) {
      deleteInspection({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Inspection {inspection.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inspection.id}</td>
            </tr><tr>
              <th>Date</th>
              <td>{timeTag(inspection.date)}</td>
            </tr><tr>
              <th>Glider id</th>
              <td>{inspection.gliderId}</td>
            </tr><tr>
              <th>Inspector name</th>
              <td>{inspection.inspectorName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInspection({ id: inspection.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(inspection.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Inspection
