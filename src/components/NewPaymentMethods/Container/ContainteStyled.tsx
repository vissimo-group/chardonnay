import styled from 'styled-components'
import { NewPaymentMethodsProps } from '../type'

const NewPaymentMethodsItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const ContainteStyled = ({ children }: NewPaymentMethodsProps) => {
  return (
    <NewPaymentMethodsItemsContainer>
      {children}
    </NewPaymentMethodsItemsContainer>
  )
}

export { ContainteStyled }
