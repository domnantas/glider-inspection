import EditGliderCell from 'src/components/Glider/EditGliderCell'

type GliderPageProps = {
  id: number
}

const EditGliderPage = ({ id }: GliderPageProps) => {
  return <EditGliderCell id={id} />
}

export default EditGliderPage
