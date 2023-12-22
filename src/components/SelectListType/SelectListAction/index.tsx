import React from 'react'
import * as Icons from 'semillon'
import { StyledButton } from './style'
import { Colors } from '../../../tokens'
import { SelectListActionProps } from './type'

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
