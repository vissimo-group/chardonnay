import React from 'react'
import { SelectListRootProp } from './type'
import { Card } from '../../Card'

const SelectListRoot: React.FC<SelectListRootProp> = ({
  theme = 'light',
  children,
  ...props
}) => {
  return (
    <Card theme={theme} {...props}>
      {children}
    </Card>
  )
}

export { SelectListRoot }
