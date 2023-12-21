import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react'

import {
  SidePanelContextProps,
  SidePanelMeasures,
  SidePanelProviderProps,
} from './type'

const SidePanelContext = createContext<SidePanelContextProps>({
  open: false,
  fullscreen: false,
})

const SidePanelProvider = ({
  children,
  open: defaultOpen,
  fullscreen: isFullscreen,
  minWidth: defaultMinWidth,
  maxWidth: defaultMaxWidth,
}: SidePanelProviderProps) => {
  const [open, setOpen] = useState<boolean>(defaultOpen ?? false)
  const [maxWidth, setMaxWidth] = useState<SidePanelMeasures>(
    defaultMaxWidth ?? '80%',
  )
  const [minWidth, setMinWidth] = useState<SidePanelMeasures>(
    defaultMinWidth ?? '100px',
  )
  const [fullscreen, setFullscreen] = useState<boolean>(isFullscreen ?? false)
  const [isOpening, startTransition] = useTransition()

  //* only opens panel
  const openPanel = useCallback(() => {
    startTransition(() => {
      setOpen((prev) => !prev)
    })
  }, [setOpen])

  //* only closes the panel
  const closePanel = useCallback(() => {
    startTransition(() => {
      setOpen(false)
    })
  }, [setOpen])

  useEffect(() => {
    if (defaultOpen !== undefined) setOpen(defaultOpen)
    if (isFullscreen !== undefined) setFullscreen(isFullscreen)
    if (defaultMinWidth) setMinWidth(defaultMinWidth)
    if (defaultMaxWidth) setMaxWidth(defaultMaxWidth)
  }, [defaultOpen, isFullscreen, defaultMinWidth, defaultMaxWidth])

  //* only re-memoize when some prop changes
  const value = useMemo<SidePanelContextProps>(
    () => ({
      open,
      openPanel,
      closePanel,
      fullscreen,
      minWidth,
      maxWidth,
      isOpening,
    }),
    [open, openPanel, closePanel, fullscreen, minWidth, maxWidth, isOpening],
  )

  return (
    <SidePanelContext.Provider value={value}>
      {children}
    </SidePanelContext.Provider>
  )
}

export { SidePanelContext, SidePanelProvider }
