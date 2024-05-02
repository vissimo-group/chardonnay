import {
  ContainerCard,
  PaymentContainer,
  PaymentMethodsContainerItems,
} from './style'
import { PaymentMethodsProps } from './type'

const PaymentMethods = ({ children, installment }: PaymentMethodsProps) => {
  return (
    <ContainerCard $installment={installment}>
      <PaymentContainer>
        <PaymentMethodsContainerItems>{children}</PaymentMethodsContainerItems>
      </PaymentContainer>
    </ContainerCard>
  )
}

export { PaymentMethods }
