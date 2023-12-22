import React from 'react'
import { BorderProps } from './type'
import { StyledBorder } from './style'

const Border: React.FC<BorderProps> = ({ children, ...props }) => {
  return <StyledBorder {...props}>{children}</StyledBorder>
}

export { Border }
