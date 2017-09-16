import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const IconButton = styled('button')([], props => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '0px',
  borderStyle: 'solid',
  cursor: 'pointer'
}),
  space,
  fontSize,
  width,
  color
)

IconButton.defaultProps = {
  bg: 'transparent',
  pl: 3,
  pr: 3,
  pt: 3,
  pb: 3,
  color: 'beige',
  fontSize: 2
}

export default IconButton