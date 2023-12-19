import styled from 'styled-components'
import { Colors } from '../../tokens'

const StyledUnstyledButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  color: ${Colors.light.action.action100};
  transition: 0.3s;

  &:hover:not(:disabled) {
    color: ${Colors.light.action.action200};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${Colors.light.neutral.neutral200};
  }
`

export { StyledUnstyledButton }
