import React from 'react'
import { ModalAddressCardTitleStyled } from './style'
import { ModalAddressCardProps } from '../type'

const ModalAddressCardTitle: React.FC<ModalAddressCardProps> = ({
  children,
  ...restProps
}) => {
  return (
    <ModalAddressCardTitleStyled {...restProps}>
      {children}
    </ModalAddressCardTitleStyled>
  )
}

export { ModalAddressCardTitle }
