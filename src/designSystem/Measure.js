import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Measure = styled('div')([], props => ({
  maxWidth: '30em'
}),
  space,
  fontSize,
  width,
  color
)

Measure.defaultProps = {}

export default Measure