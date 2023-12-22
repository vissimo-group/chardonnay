import styled from 'styled-components'
import { LineProps } from './type'

const StyledLine = styled.div<LineProps>`
  width: 100%;
  max-width: ${(props: LineProps) => props.maxWidth};
  height: ${(props) => (props.dashed ? '1px' : '1px')};
  border: none;
  border-top: ${(props) => (props.dashed ? '1px dashed' : '1px solid')};
  border-color: ${(props) => props.color || '#E7E7E7'};
`

export { StyledLine }
