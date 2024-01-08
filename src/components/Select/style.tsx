import styled from 'styled-components'
import { BorderRadius, Colors } from '../../tokens'

const SelectStyled = styled.select<{ $error?: boolean }>`
  appearance: none;
  line-height: 1em;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: ${BorderRadius[2]};
  color: ${(props) =>
    props.$error
      ? Colors.light.feedback.feedbackError100
      : Colors.light.neutral.neutral400};

  background-color: ${Colors.light.neutral.neutral100};
  background-image: url(caret-down.svg);
  background-repeat: no-repeat;
  background-position: right;
  border: 1px solid
    ${(props) =>
      props.$error
        ? Colors.light.feedback.feedbackError100
        : Colors.light.neutral.neutral300};
  transition: 0ms.2s ease-out;

  &:hover:not(:disabled) {
    border-color: ${Colors.light.neutral.neutral500};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export { SelectStyled }
