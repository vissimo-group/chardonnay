import React from 'react'
import { ModalAddressCardActionStyled } from './style'
import { ModalAddressCardActionProps } from './type'

const ModalAddressCardAction: React.FC<ModalAddressCardActionProps> = ({
  children,
  ...restProps
}) => {
  return (
    <ModalAddressCardActionStyled {...restProps}>
      {children}
    </ModalAddressCardActionStyled>
  )
}

export { ModalAddressCardAction }
