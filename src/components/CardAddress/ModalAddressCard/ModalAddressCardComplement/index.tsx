import React from 'react'
import { ModalAddressCardComplementStyled } from './style'
import { ModalAddressCardProps } from '../type'

const ModalAddressCardComplement: React.FC<ModalAddressCardProps> = ({
  children,
  theme = 'light',
  ...resProps
}) => {
  return (
    <ModalAddressCardComplementStyled theme={theme} {...resProps}>
      {children}
    </ModalAddressCardComplementStyled>
  )
}

export { ModalAddressCardComplement }
