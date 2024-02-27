import styled, { css } from 'styled-components'
import { SelectProps } from './types'
import { CommomProps } from '../../types'
import { Colors } from '../../tokens'

const IconRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  pointer-events: none;

  transition: transform 0.5s ease;
  cursor: pointer;
`

const Label = styled.label<SelectProps>`
  position: absolute;
  left: 0.7rem;
  top: ${({ hasValue }) => (hasValue ? '-0.02rem' : '0.rem')};
  font-size: ${({ hasValue }) => (hasValue ? '0.8rem' : '1rem')};
  padding: 0 0.5rem;
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral300};
  transition:
    top 300ms ease-in,
    font-size 300ms ease-in;
  background-color: transparent;
`

const SelectContainer = styled.div<SelectProps>`
  position: relative;
  min-width: 1rem;
  height: 3.438rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral400};

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

  ${({ error, theme }: SelectProps & CommomProps) =>
    error &&
    css`
      border-color: ${Colors[theme].feedback.feedbackError100} !important;

      ${Label} {
        color: ${Colors[theme].feedback.feedbackError100};
      }
    `}

  ${({ disabled, theme }: SelectProps & CommomProps) =>
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

const SelectCustom = styled.select<SelectProps>`
  flex: 1;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  color: #333;
  background: none;
  outline: none;
  background-color: transparent;
  position: relative;
  z-index: 1;
  appearance: none;
  -webkit-appearance: none;
  height: 100%;

  ${({ iconRight }) =>
    iconRight &&
    css`
      margin-right: -2rem;
    `}

  ${({ iconLeft }) =>
    iconLeft &&
    css`
      padding-left: 2rem;
      margin-left: -2rem;

      ~ ${Label} {
        left: 2.3rem;
      }
    `}

  &:focus ~ ${IconRight} {
    transform: rotateX(180deg);
  }
`

const IconLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  pointer-events: none;
`

export { SelectContainer, Label, SelectCustom, IconLeft, IconRight }
