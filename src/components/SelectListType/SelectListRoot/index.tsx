import React from 'react'
import { SelectListRootProp } from './type'
import { Card } from '../../Card'

const SelectListRoot: React.FC<SelectListRootProp> = ({
  children,
  ...props
}) => {
  return <Card {...props}>{children}</Card>
}

export { SelectListRoot }
