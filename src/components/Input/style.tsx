import styled, { css } from 'styled-components'
import { CommomProps } from '../../types'
import { BorderRadius, Colors } from '../../tokens'
import { InputProps } from './types'

const Label = styled.label<CommomProps>`
  position: absolute;
  top: 0.88rem;
  left: 0.7rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral300};
  cursor: text;
  transition:
    top 300ms ease-in,
    font-size 300ms ease-in;
  background-color: transparent;
  pointer-events: none;
`

const InputContainer = styled.div<InputProps>`
  position: relative;
  min-width: 1rem;
  height: 3.438rem;
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius['3']};
  border: 1px solid
    ${({ theme }: CommomProps) => Colors[theme].neutral.neutral400};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: left;

  &:hover:not(:disabled):not(:focus-within) {
    border-color: ${({ theme }: CommomProps) =>
      Colors[theme].neutral.neutral500};
  }

  ${({ error, theme }: InputProps & CommomProps) =>
    error &&
    css`
      border-color: ${Colors[theme].feedback.feedbackError100} !important;

      ${Label} {
        color: ${Colors[theme].feedback.feedbackError100};
      }
    `}

  ${({ disabled, theme }: InputProps & CommomProps) =>
    disabled &&
    css`
      border-color: ${Colors[theme].neutral.neutral200} !important;

      ${Label} {
        color: ${Colors[theme].neutral.neutral300};
      }
    `}

  &:focus-within {
    border-color: ${({ theme }: CommomProps) =>
      Colors[theme].feedback.feedbackInfo100};
  }
`

const InputCustom = styled.input<InputProps>`
  flex: 1;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  color: #333;
  padding: 1.25rem 1.25rem 1rem 1.25rem;
  background: none;
  outline: none;
  background-color: transparent;
  width: 100%;

  &:focus ~ ${Label}, &:not(:focus):not(:placeholder-shown) ~ ${Label} {
    top: -0.02rem;
    font-size: 0.8rem;
    left: 0.7rem;
    width: 100%;
  }

  ${(props) =>
    props.iconLeft &&
    css`
      padding-bottom: 1.25rem;
      padding-left: 0rem;
      padding-right: 1.25rem;
      padding-top: 1.25rem;

      &:focus ~ ${Label}, &:not(:focus):not(:placeholder-shown) ~ ${Label} {
        left: 2.3rem;
      }

      ~ ${Label} {
        left: 2.3rem;
        top: 0.88rem;
      }
    `}

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s;
    background-color: transparent !important;
  }
  &[data-autocompleted] {
    background-color: transparent !important;
  }
`

const IconLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`

const IconRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
`

export { InputContainer, Label, InputCustom, IconLeft, IconRight }
