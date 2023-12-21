import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelCloseStyled } from './style'
import { SidePanelCloseProps } from './type'

const SidePanelClose = ({ children }: SidePanelCloseProps) => {
  const [context] = useSidePanelContext()
  const { closePanel } = context

  return (
    <SidePanelCloseStyled onClick={closePanel}>{children}</SidePanelCloseStyled>
  )
}

export { SidePanelClose }
