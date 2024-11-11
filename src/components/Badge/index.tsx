import { BadgeProps } from './type'
import { BadgeStyled } from './style'

const Badge = ({
  size = 'small',
  backgroundColor = '#2391E1',
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
