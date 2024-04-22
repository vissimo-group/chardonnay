import { PaymentMethodsContainerStyled } from './style'
import { PaymentMethodsContainerProps } from './type'

const PaymentMethodsLabel = ({
  children,
  icon,
}: PaymentMethodsContainerProps) => {
  return (
    <PaymentMethodsContainerStyled>
      {icon && icon}
      {children}
    </PaymentMethodsContainerStyled>
  )
}

export { PaymentMethodsLabel }
