import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelCloseStyled } from './style'
import { SidePanelCloseProps } from './type'

const SidePanelClose = ({ children, className = '' }: SidePanelCloseProps) => {
  const [context] = useSidePanelContext()
  const { closePanel } = context

  return (
    <SidePanelCloseStyled className={className} onClick={closePanel}>
      {children}
    </SidePanelCloseStyled>
  )
}

export { SidePanelClose }
