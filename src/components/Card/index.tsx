import React from 'react'
import { CardProps } from './type'
import { StyledCard } from './style'

const Card: React.FC<CardProps> = ({
  children,
  theme = 'light',
  borderRadius,
  ...props
}) => {
  return (
    <StyledCard theme={theme} borderRadius={borderRadius} {...props}>
      {children}
    </StyledCard>
  )
}

Card.displayName = 'Card'

export { Card }
