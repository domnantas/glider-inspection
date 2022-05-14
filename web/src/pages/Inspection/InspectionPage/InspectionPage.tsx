import InspectionCell from 'src/components/Inspection/InspectionCell'

type InspectionPageProps = {
  id: number
}

const InspectionPage = ({ id }: InspectionPageProps) => {
  return <InspectionCell id={id} />
}

export default InspectionPage
