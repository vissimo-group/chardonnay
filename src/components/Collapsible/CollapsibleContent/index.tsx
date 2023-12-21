import { useContext } from 'react'
import { StyledCollapsibleContent } from './style'
import { CollapsibleContext } from '../../../contexts/CollapsibleContext'
import { CollapsibleContentProps } from './types'

const CollapsibleContent = ({
  children,
  ...props
}: CollapsibleContentProps) => {
  const { isCollapsed } = useContext(CollapsibleContext)

  return (
    <StyledCollapsibleContent $open={isCollapsed} {...props}>
      {children}
    </StyledCollapsibleContent>
  )
}

export { CollapsibleContent }
