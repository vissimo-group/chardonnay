import styled from 'styled-components'
import { Colors } from '../../../tokens'

const SidePanelOverlayStyled = styled.div`
  background-color: ${Colors.light.neutral.neutral500};
  opacity: 0.3;
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  pointer-events: all;

  /** ANIMATIONS */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.3;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 0;
    }
  }

  &[data-state='open'] {
    animation: fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: fadeOut 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`

export { SidePanelOverlayStyled }
