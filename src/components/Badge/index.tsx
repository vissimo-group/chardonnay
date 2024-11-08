import { BadgeProps } from './type'
import { BadgeStyled } from './style'

const Badge = ({
  size = 'small',
  backgroundColor = '#2391E1',
  children,
}: BadgeProps) => {
  return (
    <BadgeStyled $size={size} $backgroundColor={backgroundColor}>
      {children}
    </BadgeStyled>
  )
}

export { Badge }
