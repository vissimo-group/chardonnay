import { useContext } from 'react'
import { CollapsibleContext } from '../../../contexts/CollapsibleContext'
import { CollapsibleTriggerProps } from './types'

const CollapsibleTrigger = ({
  ifOpen = 'Ver menos',
  ifClosed = 'Ver mais',
}: CollapsibleTriggerProps) => {
  const { isCollapsed, toggleIsCollapsed } = useContext(CollapsibleContext)

  return (
    <button type="button" onClick={toggleIsCollapsed}>
      {isCollapsed ? ifOpen : ifClosed}
    </button>
  )
}

export { CollapsibleTrigger }
