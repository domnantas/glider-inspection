import EditInspectionCell from 'src/components/Inspection/EditInspectionCell'

type InspectionPageProps = {
  id: number
}

const EditInspectionPage = ({ id }: InspectionPageProps) => {
  return <EditInspectionCell id={id} />
}

export default EditInspectionPage
