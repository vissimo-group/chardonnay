import styled from 'styled-components'
import { Colors, BorderRadius, mediaQueries } from '../../../tokens'

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${Colors.light.neutral.neutral100};
  padding: 1.1875rem;
  border-radius: ${BorderRadius[3]};
  border: 1px solid ${Colors.light.neutral.neutral200};

  color: ${Colors.light.neutral.neutral500};
`

const ContainerCardTitle = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.light.neutral.neutral500};
  margin-bottom: 0.5rem;
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
const LineDivisorContainer = styled.div`
  &:last-child {
    hr {
      display: none;
    }
  }
`

const PaymentContainerItems = styled.button`
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

const PaymentContainerInstallment = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  margin-right: 1.5rem;

  @media screen and (max-width: ${mediaQueries.screenXs}) {
    display: flex;
    margin-top: 6rem;
    position: absolute;
    left: 2.75rem;
    width: 20.25rem;
    justify-content: space-between;
  }

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    display: flex;
    margin-top: 7.625rem;
    position: absolute;
    left: 2.75rem;
    width: 11.1875rem;
    justify-content: flex-start;
    gap: 0.0625rem;
  }

  span {
    font-size: 0.875rem;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    color: ${Colors.light.neutral.neutral500};
    font-weight: bold;
    font-size: 0.875rem;
  }
`

const LineDivisor = styled.hr<{
  $installment?: string
}>`
  width: 100%;
  background-color: ${Colors.light.neutral.neutral200};
  height: 1px;
  border: none;

  @media screen and (max-width: ${mediaQueries.screenXs}) {
    margin-top: ${(props) => (props.$installment ? '3.5rem' : '0.625rem')};
  }

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    margin-top: ${(props) => (props.$installment ? '4.375rem' : '0.625rem')};
  }
`

const PaymentContainerInstallmentItems = styled.div`
  font-size: 0.875rem;
  cursor: text;
`

export {
  ContainerCard,
  ContainerCardTitle,
  PaymentContainer,
  PaymentContainerItems,
  PaymentContainerInstallment,
  PaymentContainerInstallmentItems,
  PaymentContainerInstallmentsLink,
  LineDivisorContainer,
  LineDivisor,
}
