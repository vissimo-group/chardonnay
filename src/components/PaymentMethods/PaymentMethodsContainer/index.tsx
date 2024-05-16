import React from 'react'
import { NewPaymentMethodsContainer } from './style'
import { PaymentMethodsProps } from '../type'

const PaymentMethodsContainer: React.FC<PaymentMethodsProps> = ({
  children,
}) => {
  return <NewPaymentMethodsContainer>{children}</NewPaymentMethodsContainer>
}

export { PaymentMethodsContainer }
