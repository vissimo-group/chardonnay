import { useCallback, useContext } from 'react'
import { CollapsibleContext } from '../../../contexts/CollapsibleContext'
import { CollapsibleTriggerProps } from './types'
import { CollapsibleTriggerStyled } from './styles'

const CollapsibleTrigger = ({
  children,
  onToggle,
}: CollapsibleTriggerProps) => {
  const { toggleIsCollapsed } = useContext(CollapsibleContext)

  const toggleState = useCallback(() => {
    toggleIsCollapsed()
    onToggle?.()
  }, [toggleIsCollapsed, onToggle])

  return (
    <CollapsibleTriggerStyled type="button" onClick={toggleState}>
      {children}
    </CollapsibleTriggerStyled>
  )
}

export { CollapsibleTrigger }
