import React from 'react'
import { RadioContentProps } from './type'
import { RadioStyle } from './style'

const Radio: React.FC<RadioContentProps> = ({ theme = 'light', ...props }) => (
  <RadioStyle {...props} type="radio" theme={theme} />
)

Radio.displayName = 'Radio'

export { Radio }
