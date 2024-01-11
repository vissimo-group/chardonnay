import { useContext } from 'react'
import { SidePanelContext, SidePanelProvider } from './context'
import { SidePanelContextProps } from './type'

const useSidePanelContext = (): [
  SidePanelContextProps,
  typeof SidePanelProvider,
] => {
  return [useContext(SidePanelContext), SidePanelProvider]
}

export { useSidePanelContext }
