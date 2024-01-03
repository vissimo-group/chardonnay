import styled from 'styled-components'
import { Colors } from '../../tokens'
import { RadioContentProps } from './type'

const RadioStyle = styled.input<RadioContentProps>`
  appearance: none;
  border-radius: 50%;
  margin-right: 10px;
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
  background-color: ${(props: RadioContentProps) =>
    Colors[props.theme].neutral.neutral100};
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${(props: RadioContentProps) => Colors[props.theme].neutral.neutral400};

  &:checked {
    border: 6px solid
      ${(props: RadioContentProps) =>
        props.checked
          ? props.color || Colors[props.theme].action.action100
          : Colors[props.theme].neutral.neutral100};
    background-color: ${(props: RadioContentProps) =>
      props.checked ? Colors[props.theme].neutral.neutral100 : 'transparent'};
  }

  &:hover {
    &:checked {
      border: 6px solid
        ${(props) => props.color || Colors[props.theme].action.action200};
      transition: border 0.3s ease;
    }
  }
`

export { RadioStyle }
