import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelTriggerStyled } from './style'
import { SidePanelTriggerProps } from './type'

const SidePanelTrigger = ({ children }: SidePanelTriggerProps) => {
  const [context] = useSidePanelContext()
  const { openPanel } = context

  return (
    <SidePanelTriggerStyled onClick={openPanel}>
      {children}
    </SidePanelTriggerStyled>
  )
}

export { SidePanelTrigger }
