import { ReactNode } from 'react'
import { SidePanelMeasures } from '../../../contexts/SidePanel/type'

type SidePanelRootProps = {
  children?: ReactNode
  open?: boolean
  fullscreen?: boolean
  minWidth?: SidePanelMeasures
  maxWidth?: SidePanelMeasures
}

export type { SidePanelRootProps }
