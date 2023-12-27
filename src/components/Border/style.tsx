import styled from 'styled-components'
import { BorderProps } from './type'
import { Colors } from '../../tokens'

const StyledBorder = styled.div<BorderProps>`
  border: 1px solid
    ${({ color, theme }) => color || Colors[theme].neutral.neutral200};
  border-radius: ${(props) => props.radius || '8px'};
  background: ${({ bg, theme }) =>
    bg || Colors[theme].background.background100};
  ${(props) =>
    props.borderType &&
    props.borderType.map((type) => `border-${type}: 1px solid;`).join('')}
`
export { StyledBorder }
