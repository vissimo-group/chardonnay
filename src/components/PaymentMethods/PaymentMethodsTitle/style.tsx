import styled from 'styled-components'
import { mediaQueries } from '../../../tokens'

const NewPaymentMethodsItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  padding: 1rem;
  gap: 1rem;
  height: 4.25rem;

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    width: 90%;
  }
`

export { NewPaymentMethodsItems }
