import styled from 'styled-components'
import { Colors } from '../../../../tokens'
import { ThemeType } from '../../../../types'
import { ModalAddressCardProps } from './type'

const ModalAddressCardRootStyled = styled.div<ModalAddressCardProps>`
  display: flex;
  padding: 11px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.selected
        ? Colors[props.theme as ThemeType].feedback.feedbackInfo200
        : Colors[props.theme as ThemeType].neutral.neutral200};
  background: ${(props) => Colors[props.theme as ThemeType].neutral.neutral100};
  color: ${(props) => Colors[props.theme as ThemeType].neutral.neutral500};
`

export { ModalAddressCardRootStyled }
