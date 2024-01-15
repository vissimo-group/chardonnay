import type { ReactNode } from 'react'

type CollapsibleContextProps = {
  isCollapsed: boolean
  toggleIsCollapsed: () => void
}

type CollapsibleProviderProps = {
  isCollapsed: boolean
  children: ReactNode
}

export type { CollapsibleContextProps, CollapsibleProviderProps }
