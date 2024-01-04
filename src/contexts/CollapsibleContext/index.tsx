import { createContext, useEffect, useMemo, useState } from 'react'
import { CollapsibleContextProps, CollapsibleProviderProps } from './types'

const CollapsibleContext = createContext<CollapsibleContextProps>({
  isCollapsed: false,
  toggleIsCollapsed: () => {},
})

const CollapsibleProvider = ({
  children,
  isCollapsed: collapsed,
}: CollapsibleProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  const toggleIsCollapsed = () => {
    setIsCollapsed((state) => !state)
  }

  const value = useMemo(
    () => ({ isCollapsed, toggleIsCollapsed }),
    [isCollapsed],
  )

  useEffect(() => {
    setIsCollapsed(collapsed)
  }, [collapsed])

  return (
    <CollapsibleContext.Provider value={value}>
      {children}
    </CollapsibleContext.Provider>
  )
}

export { CollapsibleContext, CollapsibleProvider }
