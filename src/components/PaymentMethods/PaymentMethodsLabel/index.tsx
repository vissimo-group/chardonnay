import { PaymentMethodsContainerStyled } from './style'
import { PaymentMethodsContainerProps } from './type'

const PaymentMethodsLabel = ({
  labelColor,
  children,
}: PaymentMethodsContainerProps) => {
  return (
    <PaymentMethodsContainerStyled $labelColor={labelColor}>
      {children}
    </PaymentMethodsContainerStyled>
  )
}

export { PaymentMethodsLabel }
