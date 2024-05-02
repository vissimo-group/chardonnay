import { PaymentsMethodsItemProps } from './type'
import {
  PaymentMethodInstallmentContainer,
  PaymentContainerInstallmentItems,
  PaymentContainerInstallmentsLink,
} from './style'

const PaymentContainerInstallment = ({
  installment,
  children,
}: PaymentsMethodsItemProps) => {
  return (
    <PaymentMethodInstallmentContainer>
      <PaymentContainerInstallmentItems>
        {installment}
      </PaymentContainerInstallmentItems>
      <PaymentContainerInstallmentItems>
        <PaymentContainerInstallmentsLink>
          {children}
        </PaymentContainerInstallmentsLink>
      </PaymentContainerInstallmentItems>
    </PaymentMethodInstallmentContainer>
  )
}

export { PaymentContainerInstallment }
