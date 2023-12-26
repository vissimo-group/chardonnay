import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelRootProps } from './type'

const SidePanelRoot = ({
  children,
  onOpenChange,
  open,
  fullscreen,
  maxWidth,
  minWidth,
}: SidePanelRootProps) => {
  const [, SidePanelProvider] = useSidePanelContext()

  return (
    <SidePanelProvider
      maxWidth={maxWidth}
      minWidth={minWidth}
      fullscreen={fullscreen}
      open={open}
      onOpenChange={onOpenChange}
    >
      {children}
    </SidePanelProvider>
  )
}

export { SidePanelRoot }
