import { transparentize } from 'polished'
import styled from 'styled-components'
import { ButtonType } from './type'
import { BorderRadius, Colors } from '../../tokens'

const typeColors = {
  PRIMARY: {
    DEFAULT: Colors.light.action.action100,
    HOVER: Colors.light.action.action200,
    ACTIVE: Colors.light.action.action300,
  },
  DESTRUCTIVE: {
    DEFAULT: Colors.light.brand.brand100,
    HOVER: Colors.light.brand.brand200,
    ACTIVE: Colors.light.brand.brand300,
  },
  FEEDBACK: {
    DEFAULT: Colors.light.feedback.feedbackInfo100,
    HOVER: Colors.light.feedback.feedbackInfo100,
    ACTIVE: Colors.light.feedback.feedbackInfo100,
  },
}

const ButtonBaseStyled = styled.button<{
  $type: ButtonType
  $fullWidth: boolean
  $large: boolean
  disabled: boolean
}>`
  box-sizing: border-box;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: ${(props) => (props.$large ? '1rem' : '0.5rem')} 1.5rem;
  border-radius: ${BorderRadius['3']};
  cursor: pointer;
  transition: 200ms ease-out;

  ${(props) => props.$fullWidth && 'width: 100%;'};
  ${(props) => props.disabled && 'opacity: 0.5; cursor: not-allowed;'};
`

const ButtonStyled = styled(ButtonBaseStyled)`
  background-color: ${(props) => typeColors[props.$type].DEFAULT};
  color: ${Colors.light.neutral.neutral100};

  &:hover:not(:disabled) {
    background-color: ${(props) => typeColors[props.$type].HOVER};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => typeColors[props.$type].ACTIVE};
  }
`

const ButtonNotFilledStyled = styled(ButtonBaseStyled)`
  background-color: transparent;
  color: ${(props) => typeColors[props.$type].DEFAULT};

  &:hover:not(:disabled) {
    color: ${(props) => typeColors[props.$type].HOVER};
    background-color: ${(props) =>
      transparentize(0.9, typeColors[props.$type].HOVER)};
  }

  &:active:not(:disabled) {
    color: ${(props) => typeColors[props.$type].ACTIVE};
    background-color: ${(props) =>
      transparentize(0.85, typeColors[props.$type].HOVER)};
  }
`

const ButtonOutlinedStyled = styled(ButtonBaseStyled)`
  background-color: transparent;
  color: ${(props) => typeColors[props.$type].DEFAULT};
  border: 2px solid ${(props) => typeColors[props.$type].DEFAULT};

  &:hover:not(:disabled) {
    color: ${(props) => typeColors[props.$type].HOVER};
    border: 2px solid ${(props) => typeColors[props.$type].HOVER};
  }

  &:active:not(:disabled) {
    color: ${(props) => typeColors[props.$type].ACTIVE};
    border: 2px solid ${(props) => typeColors[props.$type].ACTIVE};
  }
`

export { ButtonStyled, ButtonNotFilledStyled, ButtonOutlinedStyled }
