import React from 'react'
import { NewPaymentMethodsContainer } from './style'
import { NewPaymentMethodsProps } from '../type'

const PaymentMethodsContainer: React.FC<NewPaymentMethodsProps> = ({
  children,
}) => {
  return <NewPaymentMethodsContainer>{children}</NewPaymentMethodsContainer>
}

export { PaymentMethodsContainer }
