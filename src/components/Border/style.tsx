import styled from 'styled-components'
import { BorderProps } from './type'

const StyledBorder = styled.div<BorderProps>`
  border: 1px solid ${(props) => props.color || '#000'};
  border-radius: ${(props) => props.radius || '4px'};
  ${(props) =>
    props.borderType
      ? `border-${props.borderType}: 1px solid;`
      : 'border: 1px solid;'}
`

export { StyledBorder }
