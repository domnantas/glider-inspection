import EditGliderTypeCell from 'src/components/GliderType/EditGliderTypeCell'

type GliderTypePageProps = {
  id: number
}

const EditGliderTypePage = ({ id }: GliderTypePageProps) => {
  return <EditGliderTypeCell id={id} />
}

export default EditGliderTypePage
