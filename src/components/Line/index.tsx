import React from 'react'
import { LineProps } from './type'
import { StyledLine } from './style'

const Line: React.FC<LineProps> = ({ theme = 'light', ...props }) => (
  <StyledLine theme={theme} {...props} />
)

export { Line }
