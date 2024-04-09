import styled from 'styled-components'
import { Colors } from '../../../tokens'

const PaymentMethodsInputFormGroup = styled.div`
  display: flex;
  align-items: center;
`

const PaymentMethodInputStyled = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
  border-radius: 50%;
  border: 0.125rem solid ${Colors.light.neutral.neutral300};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    padding: 4px;
    background-color: ${Colors.light.action.action100};
    border-radius: 50%;
    opacity: 0;
  }

  &:checked:before {
    opacity: 1;
  }
`

export { PaymentMethodInputStyled, PaymentMethodsInputFormGroup }
