import styled from 'styled-components'
import { NewPaymentMethodsProps } from '../type'

const NewPaymentMethodsInstallment = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
`

const InstallmentStyle = ({ children }: NewPaymentMethodsProps) => {
  return <NewPaymentMethodsInstallment>{children}</NewPaymentMethodsInstallment>
}

export { InstallmentStyle }
