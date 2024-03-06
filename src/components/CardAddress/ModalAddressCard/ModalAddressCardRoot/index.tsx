import React from 'react'
import { ModalAddressCardRootStyled } from './style'
import { ModalAddressCardProps } from './type'

const ModalAddressCardRoot: React.FC<ModalAddressCardProps> = ({
  children,
  theme = 'light',
  selected = false,
  ...restProps
}) => {
  return (
    <ModalAddressCardRootStyled
      theme={theme}
      selected={selected}
      {...restProps}
    >
      {children}
    </ModalAddressCardRootStyled>
  )
}

export { ModalAddressCardRoot }
