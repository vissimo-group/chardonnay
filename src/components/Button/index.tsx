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
  buttonType = 'PRIMARY',
  fullWidth = false,
  disabled = false,
  large = false,
  ...props
}: ButtonProps) => {
  const buttonVariants = {
    FILLED: (
      <ButtonStyled
        $type={buttonType}
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
        $type={buttonType}
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
        $type={buttonType}
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
        $type={buttonType}
        $fullWidth={fullWidth}
        $large={large}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonFeedbackStyled>
    ),
  }

  return buttonVariants[variant]
}

export { Button }
