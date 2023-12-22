import React from 'react'
import { Radio } from '../Radio'
import { SelectListRadioProp } from './type'

const SelectListRadio: React.FC<SelectListRadioProp> = ({
  theme = 'light',
  checked,
  props,
}) => {
  return <Radio theme={theme} checked={checked} {...props} />
}

export { SelectListRadio }
