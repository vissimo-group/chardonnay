type ButtonType = 'PRIMARY' | 'DESTRUCTIVE' | 'FEEDBACK'

type ButtonVariant = 'FILLED' | 'OUTLINED' | 'NOT_FILLED'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  type?: ButtonType
  large?: boolean
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export type { ButtonProps, ButtonVariant, ButtonType }
