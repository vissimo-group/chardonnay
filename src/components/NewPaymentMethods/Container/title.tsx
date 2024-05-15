import styled from 'styled-components'
import { NewPaymentMethodsProps } from '../type'

const NewPaymentMethodsItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  padding: 16px;
  gap: 1rem;
`

const TitleStyled = ({ children }: NewPaymentMethodsProps) => {
  return <NewPaymentMethodsItems>{children}</NewPaymentMethodsItems>
}

export { TitleStyled }
