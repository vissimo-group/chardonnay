import React, { useContext } from 'react'
import { CollapsibleContentStyled } from './style'
import { CollapsibleContext } from '../../../contexts/CollapsibleContext'
import { CollapsibleContentProps } from './types'

const CollapsibleContent = ({
  children,
  ...props
}: CollapsibleContentProps) => {
  const { isCollapsed } = useContext(CollapsibleContext)

  return (
    <CollapsibleContentStyled $open={isCollapsed} {...props}>
      {children}
    </CollapsibleContentStyled>
  )
}

export { CollapsibleContent }
