import { PaymentMethodsContainerStyled } from './style'
import { PaymentMethodsContainerProps } from './type'

const PaymentMethodsLabel = ({
  labelColor,
  children,
  icon,
}: PaymentMethodsContainerProps) => {
  return (
    <PaymentMethodsContainerStyled $labelColor={labelColor}>
      {icon}
      {children}
    </PaymentMethodsContainerStyled>
  )
}

export { PaymentMethodsLabel }
