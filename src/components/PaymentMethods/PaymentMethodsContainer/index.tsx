import {
  PaymentMethodsContainerStyled,
  PaymentMethodsContainerChildren,
} from './style'
import { PaymentMethodsContainerProps } from './type'

const PaymentMethodsContainer = ({
  children,
}: PaymentMethodsContainerProps) => {
  return (
    <PaymentMethodsContainerStyled>
      <PaymentMethodsContainerChildren>
        {children}
      </PaymentMethodsContainerChildren>
    </PaymentMethodsContainerStyled>
  )
}

export { PaymentMethodsContainer }
