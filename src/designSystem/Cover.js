import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Cover = styled('div')([], props => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}),
  space,
  fontSize,
  width,
  color
)

Cover.defaultProps = {}

export default Cover