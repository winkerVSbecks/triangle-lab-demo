import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Container = styled('div')([], props => ({
  fontFamily: 'Menlo, monospace'
}),
  space,
  fontSize,
  width,
  color
)

Container.defaultProps = {
  bg: 'beige',
  color: 'blue'
}

export default Container