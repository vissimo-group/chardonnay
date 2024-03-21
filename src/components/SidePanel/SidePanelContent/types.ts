import React, { ReactNode } from 'react'

import { SidePanelMeasures } from '../../../contexts/SidePanel/type'

type SidePanelContentProps = {
  children?: ReactNode
  minWidth?: SidePanelMeasures
  maxWidth?: SidePanelMeasures
  fullscreen?: boolean
}

type SidePanelContentPropsDiv = {
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export type { SidePanelContentProps, SidePanelContentPropsDiv }
