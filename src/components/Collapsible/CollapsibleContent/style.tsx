import styled from 'styled-components'
import { Colors } from '../../../tokens'

const StyledCollapsibleContent = styled.div<{ $open?: boolean }>`
  height: ${({ $open }) => ($open ? 'fit-content' : '0px')};
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  overflow: hidden;
  color: ${Colors.light.neutral.neutral400};
  transition: 0.3s ease-out;
`

export { StyledCollapsibleContent }
