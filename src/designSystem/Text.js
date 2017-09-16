import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Text = styled('p')([], props => ({
  lineHeight: '1.5'
}),
  space,
  fontSize,
  width,
  color
)

Text.defaultProps = {
  fontSize: 2,
  color: 'blue'
}

export default Text