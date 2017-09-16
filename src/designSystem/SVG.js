import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const SVG = styled('svg')([], props => ({
  verticalAlign: 'middle',
  display: 'inline',
  width: '16px',
  height: '16px'
}),
  space,
  fontSize,
  width,
  color
)

SVG.defaultProps = {
  color: 'inherit'
}

export default SVG