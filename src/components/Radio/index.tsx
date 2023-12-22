import React from 'react'
import { RadioContentProps } from './type'
import { RadioStyle } from './style'

const Radio: React.FC<RadioContentProps> = ({
  color,
  theme,
  checked,
  ...props
}) => (
  <RadioStyle
    color={color}
    theme={theme}
    checked={checked}
    {...props}
    type="radio"
  />
)

Radio.displayName = 'Radio'

export { Radio }
