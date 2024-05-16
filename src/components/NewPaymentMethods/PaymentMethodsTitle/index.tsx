import React from 'react'
import { NewPaymentMethodsProps } from '../type'
import { NewPaymentMethodsItems } from './style'

const PaymentMethodsTitle: React.FC<NewPaymentMethodsProps> = ({
  children,
}) => {
  return <NewPaymentMethodsItems>{children}</NewPaymentMethodsItems>
}

export { PaymentMethodsTitle }
