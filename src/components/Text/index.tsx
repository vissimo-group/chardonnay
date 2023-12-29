import React from 'react'
import styled, { css } from 'styled-components'
import { readableColor } from 'polished'
import { TextProps } from './type'

const Text: React.FC<TextProps> = ({ as = 'div', children, ...props }) => {
  const StyledText = styled[as]<TextProps>`
    font-family: Colfax, sans-serif;

    ${({ size, autosize }: TextProps) =>
      (size || autosize) &&
      css`
        font-size: ${size ? `${1 + (size - 1) * 0.2}rem` : '1rem'};
        line-height: ${size ? `${1.5 - (size - 1) * 0.1}` : '1.2'};
        letter-spacing: ${size ? `${(size - 1) * 0.02}em` : '0'};
      `}

    ${({ weight }: TextProps) =>
      weight &&
      css`
        font-weight: ${weight};
      `}
  
    ${({ align }: TextProps) =>
      align &&
      css`
        text-align: ${align};
      `}

    ${({ color }: TextProps) =>
      color &&
      css`
        color: ${color};
      `}
  
    ${({ color, highContrast }: TextProps) =>
      highContrast &&
      css`
        outline: 2px solid ${readableColor(color || 'black', 'black', 'white')};
      `}
  `
  // ignoring why it is necessary to render the element in the dom according to the prop as passed
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <StyledText {...props}>{children}</StyledText>
}

export { Text }
