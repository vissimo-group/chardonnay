import styled from 'styled-components'
import { Colors } from '../../tokens'
import { CardProps } from './type'

const StyledCard = styled.div<CardProps>`
  display: flex;
  max-width: ${(props: CardProps) => props.maxWidth || '100%'};
  padding: 16px;
  gap: 16px;
  justify-content: space-between;
  border-radius: ${(props: CardProps) => props.borderRadius};

  background: ${(props) =>
    props.selected ? Colors[props.theme].background.background200 : 'inherit'};
`

export { StyledCard }
