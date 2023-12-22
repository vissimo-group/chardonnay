import React from 'react'
import { BorderProps } from './type'
import { StyledBorder } from './style'

const Border: React.FC<BorderProps> = ({
  children,
  theme = 'light',
  bg = '#FFF',
  ...props
}) => {
  return (
    <StyledBorder theme={theme} bg={bg as string} {...props}>
      {children}
    </StyledBorder>
  )
}

export { Border }
