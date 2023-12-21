import { ReactNode } from 'react'

import { SidePanelMeasures } from '../../../contexts/SidePanel/type'

type SidePanelContentProps = {
  children?: ReactNode
  minWidth?: SidePanelMeasures
  maxWidth?: SidePanelMeasures
  fullscreen?: boolean
}

export type { SidePanelContentProps }
