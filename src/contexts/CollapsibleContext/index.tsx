import { createContext } from 'react'

const CollapsibleContext = createContext({
  isCollapsed: false,
  toggleIsCollapsed: () => {},
})

export { CollapsibleContext }
