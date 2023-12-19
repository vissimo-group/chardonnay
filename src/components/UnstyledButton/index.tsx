import { HTMLAttributes, ReactNode } from 'react'
import { StyledUnstyledButton } from './styles'

type UnstyledButtonComponentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLButtonElement>

const UnstyledButton = ({
  children,
  ...props
}: UnstyledButtonComponentProps) => {
  return <StyledUnstyledButton {...props}>{children}</StyledUnstyledButton>
}

export { UnstyledButton }
