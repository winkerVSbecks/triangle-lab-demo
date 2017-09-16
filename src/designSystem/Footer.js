import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Footer = styled('footer')([], props => ({
  height: '4rem',
  display: 'flex',
  alignItems: 'center'
}),
  space,
  fontSize,
  width,
  color
)

Footer.defaultProps = {
  bg: 'beige',
  color: 'blue'
}

export default Footer