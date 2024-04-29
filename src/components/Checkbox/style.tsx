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

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.98361 1.1418C9.22769 1.38588 9.22769 1.7816 8.98361 2.02568L3.56694 7.44235C3.32286 7.68643 2.92714 7.68643 2.68306 7.44235L0.183058 4.94235C-0.0610194 4.69827 -0.0610194 4.30254 0.183058 4.05847C0.427136 3.81439 0.822864 3.81439 1.06694 4.05847L3.125 6.11652L8.09972 1.1418C8.3438 0.897721 8.73953 0.897721 8.98361 1.1418Z" fill="white"/></svg>');
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
