import { ComponentProps, ElementType } from 'react'
import styled from 'styled-components'
import { Colors, Spacing } from '../../tokens'

interface ButtonStyledProps {
  size?: 'big' | 'small'
}

const Button = styled.button<ButtonStyledProps>`
  max-width: 300px;
  width: 100%;
  background-color: ${Colors.light.action.action200};
  color: ${Colors.light.background.background100};
  cursor: pointer;
  font-weight: 30;
  font-family: Arial, serif;
  border-radius: 8px;

  &:hover {
    background-color: ${Colors.light.action.action300};
  }

  ${(props) =>
    props.size === 'big' &&
    `
    font-size: 32px;
    padding: ${Spacing['3']};
  `}

  ${(props) =>
    props.size === 'small' &&
    `
    font-size: 12px;
    padding: ${Spacing['1']};
  `}
`

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'

export { Button }
