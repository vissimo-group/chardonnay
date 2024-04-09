import styled from 'styled-components'
import { Colors } from '../../../tokens'

const PaymentMethodsContainerStyled = styled.label`
  color: ${Colors.light.neutral.neutral500};
  font-size: 1rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
`

export { PaymentMethodsContainerStyled }
