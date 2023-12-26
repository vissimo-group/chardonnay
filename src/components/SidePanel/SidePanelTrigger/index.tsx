import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelTriggerStyled } from './style'
import { SidePanelTriggerProps } from './type'

const SidePanelTrigger = ({
  children,
  className = '',
}: SidePanelTriggerProps) => {
  const [context] = useSidePanelContext()
  const { openPanel } = context

  return (
    <SidePanelTriggerStyled className={className} onClick={openPanel}>
      {children}
    </SidePanelTriggerStyled>
  )
}

export { SidePanelTrigger }
