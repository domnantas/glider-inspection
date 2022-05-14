import GliderCell from 'src/components/Glider/GliderCell'

type GliderPageProps = {
  id: number
}

const GliderPage = ({ id }: GliderPageProps) => {
  return <GliderCell id={id} />
}

export default GliderPage
