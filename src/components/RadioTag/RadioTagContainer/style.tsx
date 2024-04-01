import styled from 'styled-components'

const RadioTagContainerStyled = styled.div<{ width?: string }>`
  ${(props) => props.width && `width: ${props.width};`}
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

export { RadioTagContainerStyled }
