import React from 'react'
import { LineProps } from './type'
import { StyledLine } from './style'

const Line: React.FC<LineProps> = (props) => {
  return <StyledLine {...props} />
}

export { Line }
