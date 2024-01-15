import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelContentStyled, SidePanelScrollableStyled } from './style'
import { SidePanelContentProps } from './types'

const SidePanelContent = ({ children }: SidePanelContentProps) => {
  const [context] = useSidePanelContext()
  const { open, minWidth, maxWidth, fullscreen } = context

  return open ? (
    <SidePanelContentStyled
      data-state={open ? 'open' : 'closed'}
      maxWidth={maxWidth}
      minWidth={minWidth}
      fullscreen={fullscreen}
    >
      <SidePanelScrollableStyled>{children}</SidePanelScrollableStyled>
    </SidePanelContentStyled>
  ) : null
}

export { SidePanelContent }
