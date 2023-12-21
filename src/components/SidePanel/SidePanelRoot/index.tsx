import { useSidePanelContext } from '../../../contexts/SidePanel'
import { SidePanelRootProps } from './type'

const SidePanelRoot = ({
  children,
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
    >
      {children}
    </SidePanelProvider>
  )
}

export { SidePanelRoot }
