import React from 'react'
import { ModalAddressCardStyled } from './style'
import { ModalAddressCardActionProps } from './type'

const ModalAddressCardAction: React.FC<ModalAddressCardActionProps> = ({
  children,
  ...restProps
}) => {
  return (
    <ModalAddressCardStyled {...restProps}>{children}</ModalAddressCardStyled>
  )
}

export { ModalAddressCardAction }
