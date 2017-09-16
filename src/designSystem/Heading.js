import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Heading = styled('h1')([], props => ({
  fontWeight: 'bold',
  lineHeight: 1.25
}),
  space,
  fontSize,
  width,
  color
)

Heading.defaultProps = {
  fontSize: null,
  m: 0,
  color: 'blue'
}

export default Heading