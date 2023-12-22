import { HTMLAttributes, ReactNode } from 'react'

type SelectListRootProp = {
  children: ReactNode
} & HTMLAttributes<HTMLInputElement>

export { SelectListRootProp }
