import React from 'react'
import { PaymentMethodsProps } from '../type'
import { NewPaymentMethodsItems } from './style'

const PaymentMethodsTitle: React.FC<PaymentMethodsProps> = ({ children }) => {
  return <NewPaymentMethodsItems>{children}</NewPaymentMethodsItems>
}

export { PaymentMethodsTitle }
