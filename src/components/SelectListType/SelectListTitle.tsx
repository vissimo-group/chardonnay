import React from 'react'
import { Text } from '../Text'
import { SelectListTitleProp } from './type'
import { Colors } from '../../tokens'

const SelectListTitle: React.FC<SelectListTitleProp> = ({
  children,
  theme = 'light',
}) => {
  const Color = Colors[theme].neutral.neutral500
  return (
    <Text color={Color} as="span" autosize weight="bold">
      {children}
    </Text>
  )
}

export { SelectListTitle }
