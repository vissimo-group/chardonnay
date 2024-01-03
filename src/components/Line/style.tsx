import styled from 'styled-components'
import { LineProps } from './type'
import { Colors } from '../../tokens'

const StyledLine = styled.div<LineProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => (props.thickness ? `${props.thickness}px` : '1px')};
  border: none;
  border-top: ${(props) =>
    props.dashed
      ? `${props.thickness || 1}px dashed`
      : `${props.thickness || 1}px solid`};
  border-color: ${({ color, theme }) =>
    color || Colors[theme].neutral.neutral200};
`

export { StyledLine }
