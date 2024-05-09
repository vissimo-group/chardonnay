import {
  ContainerCard,
  PaymentContainer,
  PaymentMethodsContainerItems,
  PaymentMethodsInput,
} from './style'
import { PaymentMethodsProps } from './type'
import { Radio } from '../../Radio'
import { Card } from '../../Card'
import { PaymentMethodsLabel } from '../PaymentMethodsLabel'

const PaymentMethods = ({
  label,
  labelColor,
  icon,
  children,
  installment,
}: PaymentMethodsProps) => {
  return (
    <Card theme="light" maxWidth="824px" borderRadius="8px">
      <ContainerCard $installment={installment}>
        <PaymentContainer>
          <PaymentMethodsContainerItems>
            <PaymentMethodsLabel
              label={label}
              labelColor={labelColor}
              icon={icon}
            />
            {children}
            <PaymentMethodsInput>
              <Radio theme="light" />
            </PaymentMethodsInput>
          </PaymentMethodsContainerItems>
        </PaymentContainer>
      </ContainerCard>
    </Card>
  )
}

export { PaymentMethods }
