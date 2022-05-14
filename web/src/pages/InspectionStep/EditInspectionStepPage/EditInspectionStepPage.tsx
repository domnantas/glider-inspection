import EditInspectionStepCell from 'src/components/InspectionStep/EditInspectionStepCell'

type InspectionStepPageProps = {
  id: number
}

const EditInspectionStepPage = ({ id }: InspectionStepPageProps) => {
  return <EditInspectionStepCell id={id} />
}

export default EditInspectionStepPage
