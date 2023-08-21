import { ComponentProps, ElementType } from 'react'
import styled from 'styled-components';
import { spacing, colors } from "../../tokens";

type ButtonStyledProps = {
    size?: 'big' | 'small';
};

export const Button = styled.button<ButtonStyledProps>`
  max-width: 300px;
  width: 100%;
  background-color: ${colors.light.action.action200};
  color: ${colors.light.background.background100};
  cursor: pointer;
  font-weight: 30;
  font-family: Arial,serif;
  border-radius: 8px;

  &:hover{
    background-color: ${colors.light.action.action300};
  }

  ${props => props.size === 'big' && `
    font-size: 32px;
    padding: ${spacing["3"]};
  `}

  ${props => props.size === 'small'  && `
    font-size: 12px;
    padding: ${spacing["1"]};
  `}

  ${props => !props.big && !props.small && `
    font-size: 16px;
  `}
`

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType;
}

Button.displayName = "Button"