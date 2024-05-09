import { PaymentMethodsContainerStyled } from './style'
import { PaymentMethodsContainerProps } from './type'

const PaymentMethodsLabel = ({
  label,
  labelColor = '#1c1c1c',
  icon,
}: PaymentMethodsContainerProps) => {
  return (
    <PaymentMethodsContainerStyled $labelColor={labelColor}>
      {icon}
      {label}
    </PaymentMethodsContainerStyled>
  )
}

export { PaymentMethodsLabel }
