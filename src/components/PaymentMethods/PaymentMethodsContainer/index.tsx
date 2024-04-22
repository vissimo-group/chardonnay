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
  LineDivisor,
} from './style'
import { PaymentMethodsProps } from './type'

const PaymentMethods = ({
  title,
  children,
  paymentData,
}: PaymentMethodsProps) => {
  return (
    <div>
      {title && <ContainerCardTitle>{title}</ContainerCardTitle>}
      <ContainerCard>
        {paymentData.map(
          (
            { id, icon, label, installment: itemInstallment, isNewCard },
            index,
          ) => (
            <PaymentContainer key={id}>
              <PaymentContainerItems>
                <PaymentLabel icon={icon}>
                  {isNewCard ? (
                    <span className="new-card-label">{label}</span>
                  ) : (
                    label
                  )}
                </PaymentLabel>
                {itemInstallment && (
                  <PaymentContainerInstallment>
                    <PaymentContainerInstallmentItems>
                      <span>{itemInstallment}</span>
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
              {index !== paymentData.length - 1 && (
                <LineDivisor $installment={itemInstallment} />
              )}
            </PaymentContainer>
          ),
        )}
      </ContainerCard>
    </div>
  )
}

export { PaymentMethods }
