import styled from 'styled-components'
import { Colors } from '../../../../tokens'
import { ThemeType } from '../../../../types'

const ModalAddressCardComplementStyled = styled.div`
  color: ${(props) => Colors[props.theme as ThemeType].neutral.neutral400};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: -0.03px;
  display: flex;
  flex-direction: column;
`
export { ModalAddressCardComplementStyled }
