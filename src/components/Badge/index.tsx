import { BadgeProps } from './type'
import { BadgeStyled } from './style'
import { Colors } from '../../tokens'

const Badge = ({
  size = 'small',
  backgroundColor = `${Colors.light.feedback.feedbackInfo100}`,
  children,
  fullWidth = false,
}: BadgeProps) => {
  return (
    <BadgeStyled
      $size={size}
      $backgroundColor={backgroundColor}
      $fullWidth={fullWidth}
    >
      {children}
    </BadgeStyled>
  )
}

export { Badge }
