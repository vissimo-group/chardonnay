import styled from 'styled-components'
import { Colors } from '../../../tokens'

const NewPaymentMethodsInstallment = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;

  a {
    color: ${Colors.light.neutral.neutral500};
    font-weight: bold;
    margin-right: 1rem;
  }
`
export { NewPaymentMethodsInstallment }
