import { HTMLAttributes } from 'react'

type LineProps = {
  maxWidth?: string
  dashed?: boolean
  color?: string
} & HTMLAttributes<HTMLDivElement>

export { LineProps }
