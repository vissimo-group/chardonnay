import React from 'react'
import { CardProps } from './type'
import { StyledCard } from './style'

const Card: React.FC<CardProps> = ({ children, theme = 'light', ...props }) => {
  return (
    <StyledCard theme={theme} {...props}>
      {children}
    </StyledCard>
  )
}

Card.displayName = 'Card'

export { Card }
