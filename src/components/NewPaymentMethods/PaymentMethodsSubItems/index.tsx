import { PaymentMethodsSubItemsStyled } from './style'
import { NewPaymentMethodsProps } from '../type'

const PaymentMethodsSubItems: React.FC<NewPaymentMethodsProps> = ({
  children,
}) => {
  return <PaymentMethodsSubItemsStyled>{children}</PaymentMethodsSubItemsStyled>
}

export { PaymentMethodsSubItems }
