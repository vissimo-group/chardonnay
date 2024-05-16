import React from 'react'
import { NewPaymentMethodsProps } from '../type'
import { NewPaymentMethodsInstallment } from './style'

const InstallmentStyle: React.FC<NewPaymentMethodsProps> = ({ children }) => {
  return <NewPaymentMethodsInstallment>{children}</NewPaymentMethodsInstallment>
}

export { InstallmentStyle }
