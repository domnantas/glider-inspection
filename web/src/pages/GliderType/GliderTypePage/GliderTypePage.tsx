import GliderTypeCell from 'src/components/GliderType/GliderTypeCell'

type GliderTypePageProps = {
  id: number
}

const GliderTypePage = ({ id }: GliderTypePageProps) => {
  return <GliderTypeCell id={id} />
}

export default GliderTypePage
