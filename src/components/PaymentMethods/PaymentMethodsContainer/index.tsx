import { PaymentMethodsInput as PaymentInput } from '../PaymentMethodsInput/index'
import { PaymentMethodsLabel as PaymentLabel } from '../PaymentMethodsLabel/index'
import {
  ContainerCard,
  ContainerCardTitle,
  PaymentContainer,
  PaymentContainerItems,
  PaymentContainerInstallment,
  PaymentContainerInstallmentItems,
  PaymentContainerInstallmentsLink,
  LineDivisorContainer,
  LineDivisor,
} from './style'
import { PaymentMethodsProps } from './type'

const PaymentMethods = ({
  title = 'Cartão de crédito',
  children,
  id,
  icon,
  label = 'Novo Cartão de crédito',
  labelColor = '#585757',
  installment,
}: PaymentMethodsProps) => {
  return (
    <div>
      {title && <ContainerCardTitle>{title}</ContainerCardTitle>}
      <ContainerCard>
        <PaymentContainer key={id}>
          <PaymentContainerItems>
            <PaymentLabel icon={icon} labelColor={labelColor}>
              {label}
            </PaymentLabel>
            {installment && (
              <PaymentContainerInstallment>
                <PaymentContainerInstallmentItems>
                  <span>{installment}</span>
                </PaymentContainerInstallmentItems>
                <PaymentContainerInstallmentItems>
                  <PaymentContainerInstallmentsLink>
                    {children}
                  </PaymentContainerInstallmentsLink>
                </PaymentContainerInstallmentItems>
              </PaymentContainerInstallment>
            )}
            <PaymentInput />
          </PaymentContainerItems>
          <LineDivisorContainer>
            <LineDivisor $installment={installment} />
          </LineDivisorContainer>
        </PaymentContainer>
      </ContainerCard>
    </div>
  )
}

export { PaymentMethods }
