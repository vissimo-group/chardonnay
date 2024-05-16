import React from 'react'
import { PaymentMethodsProps } from '../type'
import { NewPaymentMethodsItemsContainer } from './style'

const ContainteStyled: React.FC<PaymentMethodsProps> = ({ children }) => {
  return (
    <NewPaymentMethodsItemsContainer>
      {children}
    </NewPaymentMethodsItemsContainer>
  )
}

export { ContainteStyled }
