import styled from 'styled-components'
import { BorderRadius, Colors } from '../../../tokens'

const SidePanelCloseStyled = styled.button`
  background-color: transparent;
  border: none;
  border-color: transparent;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:focus {
    border: 1px solid ${Colors.light.neutral.neutral400};

    border-radius: ${BorderRadius['3']};
  }
`

export { SidePanelCloseStyled }
