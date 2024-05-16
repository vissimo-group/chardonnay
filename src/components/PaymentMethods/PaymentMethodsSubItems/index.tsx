import { PaymentMethodsSubItemsStyled } from './style'
import { PaymentMethodsProps } from '../type'

const PaymentMethodsSubItems: React.FC<PaymentMethodsProps> = ({
  children,
}) => {
  return <PaymentMethodsSubItemsStyled>{children}</PaymentMethodsSubItemsStyled>
}

export { PaymentMethodsSubItems }
