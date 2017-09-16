import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Link = styled('a')([], props => ({
  transition: 'opacity .15s ease-in',
  '&:hover': {
    backfaceVisibility: 'hidden',
    opacity: 0.5
  }
}),
  space,
  fontSize,
  width,
  color
)

Link.defaultProps = {
  color: 'blue'
}

export default Link