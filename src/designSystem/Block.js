import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Block = styled('div')([], props => ({}),
  space,
  fontSize,
  width,
  color
)

Block.defaultProps = {
  color: 'blue'
}

export default Block