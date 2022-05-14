import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Inspection/InspectionsCell'

const DELETE_INSPECTION_MUTATION = gql`
  mutation DeleteInspectionMutation($id: Int!) {
    deleteInspection(id: $id) {
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

const InspectionsList = ({ inspections }) => {
  const [deleteInspection] = useMutation(DELETE_INSPECTION_MUTATION, {
    onCompleted: () => {
      toast.success('Inspection deleted')
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
    if (confirm('Are you sure you want to delete inspection ' + id + '?')) {
      deleteInspection({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Glider id</th>
            <th>Inspector name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inspections.map((inspection) => (
            <tr key={inspection.id}>
              <td>{truncate(inspection.id)}</td>
              <td>{timeTag(inspection.date)}</td>
              <td>{truncate(inspection.gliderId)}</td>
              <td>{truncate(inspection.inspectorName)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.inspection({ id: inspection.id })}
                    title={'Show inspection ' + inspection.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInspection({ id: inspection.id })}
                    title={'Edit inspection ' + inspection.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete inspection ' + inspection.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(inspection.id)}
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

export default InspectionsList
