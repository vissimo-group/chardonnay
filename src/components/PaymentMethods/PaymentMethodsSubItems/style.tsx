import styled from 'styled-components'
import { mediaQueries } from '../../../tokens'

const PaymentMethodsSubItemsStyled = styled.div`
    display: flex;
    gap: 1rem;

    @media screen and (max-width: ${mediaQueries.screenXs}) {
      margin-top: 8rem;
      position: absolute;
      width: 22.85rem;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }

    @media screen and (max-width: ${mediaQueries.screenXxs}) {
      margin-top: 8.625rem;
      position: absolute;
      width: 16.85rem;
      gap: 0.0625rem;
    }
  }
`
export { PaymentMethodsSubItemsStyled }
