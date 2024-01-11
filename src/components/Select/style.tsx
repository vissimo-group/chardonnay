import styled from 'styled-components'
import { BorderRadius, Colors, mediaQueries } from '../../tokens'
import { ThemeType } from '../../types/index'

const SelectStyled = styled.select<{
  $error?: boolean
  $fontSize: number
  $expand: boolean
  $responsible?: boolean
  $theme: ThemeType
}>`
  font-size: ${({ $fontSize }) => $fontSize}rem;
  width: ${({ $expand }) => ($expand ? '100%' : 'auto')};
  appearance: none;
  line-height: 1em;
  padding: 1em calc(24px + 0.2em) 1em 1em;
  border-radius: ${BorderRadius[2]};
  color: ${({ $error, $theme }) =>
    $error
      ? Colors[$theme].feedback.feedbackError100
      : Colors[$theme].neutral.neutral400};

  background-color: ${({ $theme }) => Colors[$theme].neutral.neutral100};
  background-image: url(caret-down.svg);
  background-repeat: no-repeat;
  background-position: right;
  border: 1px solid
    ${({ $error, $theme }) =>
      $error
        ? Colors[$theme].feedback.feedbackError100
        : Colors[$theme].neutral.neutral300};
  transition: 0ms.2s ease-out;

  @media (max-width: ${mediaQueries.screenSm}) {
    width: ${({ $responsible, $expand }) =>
      $responsible || $expand ? '100%' : 'auto'};
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    border-color: ${Colors.light.neutral.neutral500};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export { SelectStyled }
