import React from 'react'
import { NewPaymentMethodsProps } from '../type'
import { NewPaymentMethodsItemsContainer } from './style'

const ContainteStyled: React.FC<NewPaymentMethodsProps> = ({ children }) => {
  return (
    <NewPaymentMethodsItemsContainer>
      {children}
    </NewPaymentMethodsItemsContainer>
  )
}

export { ContainteStyled }
