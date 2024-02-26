import React from 'react'
import { IconStyled } from './style'
import { ModalAddressCardProps } from '../type'

const ModalAddressCardIcon: React.FC<ModalAddressCardProps> = ({
  children,
}) => <IconStyled>{children}</IconStyled>

export { ModalAddressCardIcon }
