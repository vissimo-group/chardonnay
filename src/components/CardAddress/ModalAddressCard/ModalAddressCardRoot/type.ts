import { HTMLAttributes, ReactNode } from 'react'

interface ModalAddressCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  theme?: string
  selected?: boolean
}

export type { ModalAddressCardProps }
