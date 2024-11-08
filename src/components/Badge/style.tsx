import styled from 'styled-components'

const BadgeStyled = styled.div<{ $size?: string; $backgroundColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: fit-content;
  padding: ${(props) => (props.$size === 'small' ? '4px 6px' : '6px 8px')};
  border-radius: 4px;
  background-color: ${(props) =>
    props.$backgroundColor ? `${props.$backgroundColor}` : '#2391E1'};
  color: white;
  font-size: 0.75rem;
  line-height: 1;
`

export { BadgeStyled }
