import React from 'react'
import * as Icons from 'semillon'
import { SelectListActionProps } from './type'
import { StyledButton } from './style'
import { Colors } from '../../tokens'

const SelectListAction: React.FC<SelectListActionProps> = ({
  theme = 'light',
  props,
}) => {
  const Color = Colors[theme].neutral.neutral400
  return (
    <StyledButton {...props}>
      <Icons.More color={Color} size="24" />
    </StyledButton>
  )
}

export { SelectListAction }
