import React from 'react'
import { RadioContentProps } from './type'
import { RadioStyle } from './style'

const Radio: React.FC<RadioContentProps> = ({ ...props }) => (
  <RadioStyle {...props} type="radio" />
)

Radio.displayName = 'Radio'

export { Radio }
