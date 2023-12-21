import type { ReactNode } from 'react'

type SidePanelMeasures = `${number}px` | `${number}%`

type SidePanelContextProps = {
  /**
   * prop that notice whether side panel is "open" or "closed"
   */
  open: boolean
  /**
   * prop that notice whether side panel is fullscreen
   */
  fullscreen: boolean
  /**
   * function what toggles between "open" and "closed"
   */
  openPanel?(): void
  /**
   * function what closes the panel
   */
  closePanel?(): void
  minWidth?: SidePanelMeasures
  maxWidth?: SidePanelMeasures
  isOpening?: boolean
}

type SidePanelProviderProps = {
  children?: ReactNode
  open?: boolean
  fullscreen?: boolean
  minWidth?: SidePanelMeasures
  maxWidth?: SidePanelMeasures
}

export type { SidePanelContextProps, SidePanelMeasures, SidePanelProviderProps }
