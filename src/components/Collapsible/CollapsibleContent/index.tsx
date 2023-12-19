import { ReactNode, HTMLAttributes } from 'react'
import { StyledCollapsibleContent } from './style'

type CollapsibleContentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const CollapsibleContent = ({
  children,
  ...props
}: CollapsibleContentProps) => {
  return (
    <StyledCollapsibleContent {...props}>{children}</StyledCollapsibleContent>
  )
}

export { CollapsibleContent }
