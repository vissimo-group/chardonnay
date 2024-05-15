import styled from 'styled-components'
import React from 'react'
import { NewPaymentMethodsProps } from '../type'

const NewPaymentMethodsContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NewPaymentMethodsContainerStyled = ({
  children,
}: NewPaymentMethodsProps) => {
  return <NewPaymentMethodsContainer>{children}</NewPaymentMethodsContainer>
}

export { NewPaymentMethodsContainerStyled }
