import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Main = styled('main')([], props => ({
  maxWidth: '64rem',
  display: 'flex',
  alignItems: 'center',
  flex: '1 1 auto'
}),
  space,
  fontSize,
  width,
  color
)

Main.defaultProps = {}

export default Main