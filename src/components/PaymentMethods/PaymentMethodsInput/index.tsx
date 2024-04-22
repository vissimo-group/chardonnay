import React from 'react'
import { PaymentMethodsInputFormGroup, PaymentMethodInputStyled } from './style'
import { CheckboxProps } from './type'

const PaymentMethodsInput: React.FC<CheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <PaymentMethodsInputFormGroup>
      <PaymentMethodInputStyled checked={checked} onChange={onChange} />
    </PaymentMethodsInputFormGroup>
  )
}

export { PaymentMethodsInput }
