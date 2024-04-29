import styled from 'styled-components'
import { Colors } from '../../../tokens'

const PaymentMethodsContainerStyled = styled.label<{
  $labelColor?: string
}>`
  color: ${(props) => props.$labelColor || Colors.light.neutral.neutral500};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: 100%;
`

export { PaymentMethodsContainerStyled }
