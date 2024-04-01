import styled from 'styled-components'

const RadioTagLabelStyled = styled.label<{ width?: string; fontSize?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  gap: 0.5em;
  border-radius: 2rem;
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.colors.neutral.neutral200};
  color: ${(props) => props.theme.colors.neutral.neutral400};
  border: 2px solid ${(props) => props.theme.colors.neutral.neutral200};
  scroll-snap-align: center;

  input[type='radio']:checked + & {
    background-color: ${(props) => props.theme.colors.background.background200};
    border: 2px solid ${(props) => props.theme.colors.action.action100};
    color: ${(props) => props.theme.colors.action.action100};
  }

  // TODO: ADJUST DISABLED STATE
  input[type='radio']:disabled + & {
    cursor: not-allowed;
    border: 1px solid red;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`
export { RadioTagLabelStyled }
