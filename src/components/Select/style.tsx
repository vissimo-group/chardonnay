import styled from 'styled-components'
import { BorderRadius, Colors, mediaQueries } from '../../tokens'

const SelectStyled = styled.select<{
  $error?: boolean
  $fontSize: number
  $expand: boolean
  $responsible?: boolean
}>`
  font-size: ${({ $fontSize }) => $fontSize}rem;
  width: ${({ $expand }) => ($expand ? '100%' : 'auto')};
  appearance: none;
  line-height: 1em;
  padding: 1em calc(24px + 0.2em) 1em 1em;
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

  @media (max-width: ${mediaQueries.screenSm}) {
    width: ${({ $responsible, $expand }) =>
      $responsible || $expand ? '100%' : 'auto'};
  }

  &:hover:not(:disabled) {
    border-color: ${Colors.light.neutral.neutral500};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export { SelectStyled }
