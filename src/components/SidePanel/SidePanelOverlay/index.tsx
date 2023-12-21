import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelOverlayStyled } from './style'

const SidePanelOverlay = () => {
  const [context] = useSidePanelContext()
  const { open, closePanel } = context

  return open ? (
    <SidePanelOverlayStyled
      data-state={open ? 'open' : 'closed'}
      onClick={closePanel}
    />
  ) : null
}

export { SidePanelOverlay }
