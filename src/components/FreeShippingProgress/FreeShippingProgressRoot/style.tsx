import styled from 'styled-components'

const FreeShippingProgressRootStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.neutral.neutral100};
  color: ${(props) => props.theme.colors.neutral.neutral500};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.neutral.neutral200};
`

export { FreeShippingProgressRootStyled }
