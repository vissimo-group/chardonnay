import styled from 'styled-components'
import { Colors, mediaQueries } from '../../../tokens'

const PaymentMethodInstallmentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  margin-right: 1.5rem;

  @media screen and (max-width: ${mediaQueries.screenXs}) {
    display: flex;
    margin-top: 8rem;
    position: absolute;
    left: 2.45rem;
    width: 20.25rem;
    justify-content: space-between;
  }

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    display: flex;
    margin-top: 8.625rem;
    position: absolute;
    left: 2.45rem;
    width: 13.1875rem;
    gap: 0.0625rem;
  }

  span {
    font-size: 0.875rem;
  }

  a {
    text-decoration: underline;
    color: ${Colors.light.neutral.neutral500};
    font-weight: bold;
    font-size: 0.875rem;
  }
`

const PaymentContainerInstallmentItems = styled.div`
  font-size: 0.875rem;
  cursor: text;
`

const PaymentContainerInstallmentsLink = styled.div`
  color: ${Colors.light.neutral.neutral500};
  font-weight: 200;
`

export {
  PaymentMethodInstallmentContainer,
  PaymentContainerInstallmentItems,
  PaymentContainerInstallmentsLink,
}
