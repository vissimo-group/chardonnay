import styled from 'styled-components'
import { Colors } from '../../../tokens'

const NewPaymentMethodsContainer = styled.div<{
  installment?: string
}>`
  display: flex;
  flex-direction: column;
  color: ${Colors.light.neutral.neutral500};
  background-color: ${Colors.light.neutral.neutral100};
  width: 100%;
  position: relative;
`

export { NewPaymentMethodsContainer }
