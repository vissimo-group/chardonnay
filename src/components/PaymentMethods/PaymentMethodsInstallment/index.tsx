import React from 'react'
import { PaymentMethodsProps } from '../type'
import { NewPaymentMethodsInstallment } from './style'

const InstallmentStyle: React.FC<PaymentMethodsProps> = ({ children }) => {
  return <NewPaymentMethodsInstallment>{children}</NewPaymentMethodsInstallment>
}

export { InstallmentStyle }
