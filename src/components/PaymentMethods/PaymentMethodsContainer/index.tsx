import {
  ContainerCard,
  PaymentContainer,
  PaymentMethodsContainerItems,
  PaymentMethodsInput,
} from './style'
import { PaymentMethodsProps } from './type'
import { Radio } from '../../Radio'

const PaymentMethods = ({
  label,
  labelColor,
  icon,
  children,
  installment,
}: PaymentMethodsProps) => {
  return (
    <ContainerCard $installment={installment}>
      <PaymentContainer>
        <PaymentMethodsContainerItems>
          {children}
          <PaymentMethodsInput>
            <Radio theme="light" />
          </PaymentMethodsInput>
        </PaymentMethodsContainerItems>
      </PaymentContainer>
    </ContainerCard>
  )
}

export { PaymentMethods }
