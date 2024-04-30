import styled from 'styled-components'
import { Colors } from '../../../tokens'

const SidePanelOverlayStyled = styled.div`
  background-color: ${Colors.light.neutral.neutral500};
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  pointer-events: all;
  z-index: 5;
  opacity: 0.3;
`

export { SidePanelOverlayStyled }
