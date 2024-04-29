import styled from 'styled-components'

const RadioTagContainerStyled = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

export { RadioTagContainerStyled }
