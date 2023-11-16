import { HTMLProps, ReactChildren } from 'react'
import styled from 'styled-components'
import { Loading } from '@vissimo/icons'
import { darken } from 'polished'
import { Colors, Spacing, BorderRadius } from '../../tokens'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  loading?: boolean
  sizeLoading?: number
  disabled?: boolean | undefined
  label?: string
  severity?: 'primary' | 'success' | 'warning' | 'danger' | undefined
  theme?: 'light' | 'dark' | undefined
  props?: ReactChildren | React.ReactNode | string
}

interface ButtonStyledProps extends ButtonProps {}

interface ColorMap {
  [key: string]: (props: ButtonStyledProps) => string
}

const colorMap: ColorMap = {
  primary: (props) => Colors[props.theme!].action.action100,
  success: (props) => Colors[props.theme!].action.action100,
  warning: (props) => Colors[props.theme!].renomados.renomados100,
  danger: (props) => Colors[props.theme!].brand.brand100,
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  position: relative;
  min-width: 108px;
  height: 56px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: ${Spacing['3']};
  border-radius: ${BorderRadius['3']};
  background: ${(props) => colorMap[props.severity](props)};

  color: ${(props) => Colors[props.theme].neutral.neutral100};
  overflow: hidden;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: 0;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: ${(props) => darken(0.1, colorMap[props.severity](props))};

    color: ${(props) => darken(0.2, Colors[props.theme].neutral.neutral100)};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => Colors[props.theme].neutral.neutral400};
    color: ${(props) => Colors[props.theme].neutral.neutral100};
  }
}`

function Button({
  label,
  sizeLoading,
  loading,
  disabled,
  theme,
  severity,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      severity={severity}
      theme={theme}
      disabled={disabled}
      {...props}
    >
      {loading ? <Loading size={sizeLoading || 26} /> : label}
    </StyledButton>
  )
}

Button.defaultProps = {
  label: 'Buscar',
  disabled: false,
  loading: false,
  theme: 'light',
  severity: 'primary',
}

Button.displayName = 'Button'

export { ButtonProps }
export default Button
