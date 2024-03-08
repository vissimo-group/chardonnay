import React from 'react'
import { WizardItemPointStyled } from './style'
import { WizardItemPointProps } from './type'

const WizardItemPoint = ({
  children,
  variant = 'INACTIVE',
  customColor,
}: WizardItemPointProps) => {
  return (
    <WizardItemPointStyled $variant={variant} $customColor={customColor}>
      {children}
    </WizardItemPointStyled>
  )
}

export { WizardItemPoint }
