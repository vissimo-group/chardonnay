import {
  ButtonStyled,
  ButtonNotFilledStyled,
  ButtonOutlinedStyled,
  ButtonFeedbackStyled,
} from './style'
import { ButtonProps } from './type'

const Button = ({
  children,
  variant = 'FILLED',
  type = 'PRIMARY',
  fullWidth = false,
  disabled = false,
  large = false,
  ...props
}: ButtonProps) => {
  const buttonType = {
    FILLED: (
      <ButtonStyled
        $type={type}
        $fullWidth={fullWidth}
        $large={large}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonStyled>
    ),
    NOT_FILLED: (
      <ButtonNotFilledStyled
        $type={type}
        $fullWidth={fullWidth}
        $large={large}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonNotFilledStyled>
    ),
    OUTLINED: (
      <ButtonOutlinedStyled
        $type={type}
        $fullWidth={fullWidth}
        $large={large}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonOutlinedStyled>
    ),
    FEEDBACK: (
      <ButtonFeedbackStyled
        $type={type}
        $fullWidth={fullWidth}
        $large={large}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonFeedbackStyled>
    ),
  }

  return buttonType[variant]
}

export { Button }
