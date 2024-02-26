import React from 'react'
import { ModalAddressCardStyled } from './style'
import { ModalAddressCardProps } from './type'

const ModalAddressCardRoot: React.FC<ModalAddressCardProps> = ({
  children,
  theme = 'light',
  selected = false,
  ...restProps
}) => {
  return (
    <ModalAddressCardStyled theme={theme} selected={selected} {...restProps}>
      {children}
    </ModalAddressCardStyled>
  )
}

export { ModalAddressCardRoot }
