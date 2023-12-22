import React from 'react'
import { Text } from '../../Text'
import { Colors } from '../../../tokens'
import { SelectListPriceProp } from './type'

const SelectListPrice: React.FC<SelectListPriceProp> = ({
  children,
  theme = 'light',
}) => {
  const Color = Colors[theme].neutral.neutral500
  return (
    <Text color={Color} as="span" weight="regular" autosize>
      {children}
    </Text>
  )
}

export { SelectListPrice }
