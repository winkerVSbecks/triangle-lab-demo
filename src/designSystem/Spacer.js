import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Spacer = styled('div')([], props => ({
  flex: '1 1 auto',
  minWidth: 0,
  minHeight: 0
}),
  space,
  fontSize,
  width,
  color
)

Spacer.defaultProps = {}

export default Spacer