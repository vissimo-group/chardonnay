import { useState, useMemo } from 'react'
import { CollapsibleContext } from '../../../contexts/CollapsibleContext'
import { CollapsibleRootProps } from './types'

const CollapsibleRoot = ({
  children,
  openByDefault = false,
}: CollapsibleRootProps) => {
  const [isCollapsed, setIsCollapsed] = useState(openByDefault)
  const toggleIsCollapsed = () => setIsCollapsed(!isCollapsed)

  const contextValue = useMemo(
    () => ({ isCollapsed, toggleIsCollapsed }),
    [isCollapsed],
  )

  return (
    <CollapsibleContext.Provider value={contextValue}>
      {children}
    </CollapsibleContext.Provider>
  )
}

export { CollapsibleRoot }
