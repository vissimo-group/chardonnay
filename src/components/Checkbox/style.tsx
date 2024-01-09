import styled from 'styled-components'
import { BorderRadius, Colors } from '../../tokens'
import { ThemeType } from '../../types'

const CheckboxStyled = styled.input<{ $theme: ThemeType }>`
  box-sizing: border-box;
  appearance: none;
  width: 1.125em;
  height: 1.125em;
  margin: 0;
  border: 2px solid ${({ $theme }) => Colors[$theme].neutral.neutral400};
  border-radius: ${BorderRadius[2]};
  background-color: ${({ $theme }) => Colors[$theme].neutral.neutral100};
  font: inherit;
  font-size: inherit;
  cursor: pointer;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
  transition: 200ms ease-out;

  background-image: url(check.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.6em;

  &:hover:not(:disabled) {
    border-color: ${({ $theme }) => Colors[$theme].neutral.neutral500};
  }

  &:checked:not(:disabled) {
    background-color: ${({ $theme }) => Colors[$theme].action.action200};
    border: none;

    &:hover {
      background-color: ${({ $theme }) => Colors[$theme].action.action300};
    }
  }

  &:disabled {
    border-color: ${({ $theme }) => Colors[$theme].neutral.neutral200};
    cursor: not-allowed;
  }
`

export { CheckboxStyled }
