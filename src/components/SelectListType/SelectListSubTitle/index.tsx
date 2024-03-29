import React from 'react'
import { Text } from '../../Text'
import { SelectListSubTitleProp } from './type'
import { Colors } from '../../../tokens'

const SelectListSubTitle: React.FC<SelectListSubTitleProp> = ({
  children,
  theme = 'light',
}) => {
  const Color = Colors[theme].neutral.neutral400
  return (
    <Text color={Color} as="span" weight="medium" autosize>
      {children}
    </Text>
  )
}

export { SelectListSubTitle }
