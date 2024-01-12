import React from 'react'
import { CollapsibleProvider } from '../../../contexts/CollapsibleContext'
import { CollapsibleRootProps } from './types'

const CollapsibleRoot = ({
  children,
  isCollapsed = false,
}: CollapsibleRootProps) => {
  return (
    <CollapsibleProvider isCollapsed={isCollapsed}>
      {children}
    </CollapsibleProvider>
  )
}

export { CollapsibleRoot }
