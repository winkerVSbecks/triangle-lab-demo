import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Toolbar = styled('div')([], props => ({
  display: 'flex',
  minHeight: '64px',
  alignItems: 'center'
}),
  space,
  fontSize,
  width,
  color
)

Toolbar.defaultProps = {
  pl: 3,
  pr: 3,
  color: 'beige',
  bg: 'blue'
}

export default Toolbar