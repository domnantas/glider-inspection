import InspectionStepCell from 'src/components/InspectionStep/InspectionStepCell'

type InspectionStepPageProps = {
  id: number
}

const InspectionStepPage = ({ id }: InspectionStepPageProps) => {
  return <InspectionStepCell id={id} />
}

export default InspectionStepPage
