import { HTMLAttributes } from 'react'

type NewPaymentMethodsProps = {
  label: string
  labelColor?: string
  icon?: JSX.Element
  installment?: string
  argsFlag?: boolean
  children?: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export type { NewPaymentMethodsProps }
