import styled, { css } from 'styled-components'
import { Colors, mediaQueries } from '../../../tokens'

const ContainerCard = styled.div<{
  $installment?: string
}>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${Colors.light.neutral.neutral500};
  width: 100%;

  ${(props) =>
    props.$installment &&
    css`
      @media screen and (max-width: ${mediaQueries.screenXs}) {
        height: 130px;
      }

      @media screen and (max-width: ${mediaQueries.screenXxs}) {
        height: 150px;
      }
    `};
`

const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  background-color: ${Colors.light.neutral.neutral100};
  border: none;
`

const PaymentMethodsContainerItems = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${Colors.light.neutral.neutral100};
  border: none;
  cursor: pointer;
`

const PaymentContainerInstallmentsLink = styled.span`
  color: ${Colors.light.neutral.neutral500};
  font-weight: 200;
`

const PaymentContainerInstallmentItems = styled.div`
  font-size: 0.875rem;
  cursor: text;
`

const PaymentMethodsInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export {
  ContainerCard,
  PaymentContainer,
  PaymentMethodsContainerItems,
  PaymentContainerInstallmentItems,
  PaymentContainerInstallmentsLink,
  PaymentMethodsInput,
}
