import styled from 'styled-components'
import { Colors, BorderRadius } from '../../../tokens'

const PaymentMethodsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 53rem;
  background-color: ${Colors.light.neutral.neutral100};
  padding: 0 1rem 1rem 1rem;
  border-radius: ${BorderRadius[3]};
  border: 0.063rem solid ${Colors.light.neutral.neutral200};
`

const PaymentMethodsContainerChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PaymentMethodsContainerItems = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`

const PaymentMethodsContainerTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${Colors.light.neutral.neutral500};
`

const PaymentMethodsContainerNewCreditCard = styled.span`
  color: ${Colors.light.neutral.neutral400};
  font-size: 1rem;
`

const PaymentMethodsContainerInstallment = styled.div``

const PaymmentMethodsContainerSpan = styled.span`
  color: ${Colors.light.neutral.neutral500};
`

const PaymentMethodsContainerLink = styled.a`
  color: ${Colors.light.neutral.neutral500};
  font-weight: bold;
`

export {
  PaymentMethodsContainerStyled,
  PaymentMethodsContainerChildren,
  PaymentMethodsContainerItems,
  PaymentMethodsContainerTitle,
  PaymentMethodsContainerNewCreditCard,
  PaymentMethodsContainerInstallment,
  PaymmentMethodsContainerSpan,
  PaymentMethodsContainerLink,
}
