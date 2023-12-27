type TypeAs = 'span' | 'div' | 'label' | 'p'

interface TextProps {
  as?: TypeAs
  size?: number
  autosize?: boolean
  weight?: 'regular' | 'medium' | 'bold'
  align?: 'left' | 'center' | 'right'
  color?: string
  highContrast?: boolean
}

export type { TextProps, TypeAs }
