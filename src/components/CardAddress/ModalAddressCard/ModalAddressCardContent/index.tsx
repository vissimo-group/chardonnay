import React from 'react'
import { ModalAddressCardContentStyled } from './style'
import { ModalAddressCardProps } from '../type'

const ModalAddressCardContent: React.FC<ModalAddressCardProps> = ({
  children,
  ...restProps
}) => {
  return (
    <ModalAddressCardContentStyled {...restProps}>
      {children}
    </ModalAddressCardContentStyled>
  )
}

export { ModalAddressCardContent }
