import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { Loading } from 'semillon'
import { darken } from 'polished'
import { Colors, Spacing, BorderRadius } from '../../tokens'
import { ThemeColors } from '../../tokens/colors'

type ThemeType = 'light' | 'dark'
const ThemeDefault = 'light' || 'dark'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  loading?: boolean
  sizeLoading?: number
  disabled?: boolean
  label?: string
  severity?: 'primary' | 'success' | 'warning' | 'danger'
  theme?: ThemeType
}

const colorMap: Record<
  string,
  (props: { theme?: ThemeType }) => string | undefined
> = {
  primary: ({ theme = ThemeDefault }) => Colors[theme]?.action?.action100,
  success: ({ theme = ThemeDefault }) => Colors[theme]?.action?.action100,
  warning: ({ theme = ThemeDefault }) => Colors[theme]?.renomados?.renomados100,
  danger: ({ theme = ThemeDefault }) => Colors[theme]?.brand?.brand100,
}

interface StyledButtonProps {
  severity?: keyof typeof colorMap | string
  theme?: ThemeType
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.0025em;
  width: 100%;
  height: 56px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: ${Spacing['3']};
  border-radius: ${BorderRadius['3']};
  background: ${(props) => colorMap[props?.severity as string](props) || ''};

  color: ${(props) =>
    (props?.theme &&
      Colors[props.theme as keyof ThemeColors]?.neutral?.neutral100) ||
    ''};


  overflow: hidden;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: 0;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: ${(props) =>
      darken(0.1, colorMap[props?.severity as string](props) || '')};


    color: ${(props) =>
      darken(
        0.2,
        props?.theme &&
          Colors[props.theme as keyof ThemeColors]?.neutral?.neutral100,
      ) || ''};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) =>
      (props?.theme &&
        Colors[props.theme as keyof ThemeColors]?.neutral?.neutral400) ||
      ''};
    color: ${(props) =>
      (props?.theme &&
        Colors[props.theme as keyof ThemeColors]?.neutral?.neutral100) ||
      ''};
  }
}`

const Button: React.FC<ButtonProps> = ({
  loading,
  sizeLoading,
  disabled,
  label,
  severity,
  theme,
  ...props
}) => {
  return (
    <StyledButton
      severity={severity || 'primary'}
      theme={theme || 'light'}
      disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading ? <Loading size={sizeLoading || 26} /> : label}
    </StyledButton>
  )
}

Button.defaultProps = {
  disabled: false,
  loading: false,
  theme: 'light',
  severity: 'primary',
}

Button.displayName = 'Button'

export type { ButtonProps }
export default Button
