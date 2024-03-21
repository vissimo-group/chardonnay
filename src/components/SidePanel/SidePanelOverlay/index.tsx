import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelOverlayStyled } from './style'
import { SidePanelContentPropsDiv } from '../SidePanelContent/types'

const SidePanelOverlay = (props: SidePanelContentPropsDiv) => {
  const [context] = useSidePanelContext()
  const { open, closePanel } = context

  return open ? (
    <SidePanelOverlayStyled
      data-state={open ? 'open' : 'closed'}
      onClick={closePanel}
      {...props}
    />
  ) : null
}

export { SidePanelOverlay }
