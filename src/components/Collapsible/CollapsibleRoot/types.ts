import { ReactNode } from 'react'

type CollapsibleRootProps = {
  children: ReactNode
  isCollapsed?: boolean
  onToggle?: () => void
}

export type { CollapsibleRootProps }
