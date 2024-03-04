import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { FormattedShippingMessage } from '.'
import { lightTheme } from '../../../theme'

describe('FormattedShippingMessage', () => {
  describe('With "Faltam R$17,90 para frete grátis." as message prop:', () => {
    const freeShippingMessage = 'Faltam R$17,90 para frete grátis.'

    test('Should render a "span" with a "strong" tag inside.', () => {
      const { container } = render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )
      const span = container.querySelector('span')
      const strong = container.querySelector('strong')

      expect(span).toBeDefined()
      expect(strong).toBeDefined()
      expect(span).toContain(strong)
    })

    test('Span tag should be blue.', () => {
      const { container } = render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      const strong = container.querySelector('strong')
      expect(strong).toBeDefined()

      const style = window.getComputedStyle(strong as HTMLElement)
      expect(style.color).toBe('rgb(35, 145, 225)')
    })

    test('Should render full "message" text.', () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      expect(screen.getByText('R$17,90')).toBeDefined()
      expect(screen.getByText('Faltam para frete grátis.')).toBeDefined()
    })
  })

  describe('With "Faltam R$10.90 para frete grátis." as message prop:', () => {
    const freeShippingMessage = 'Faltam R$10.90 para frete grátis.'

    test('Should render a "span" with a "strong" tag inside.', () => {
      const { container } = render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )
      const span = container.querySelector('span')
      const strong = container.querySelector('strong')

      expect(span).toBeDefined()
      expect(strong).toBeDefined()
      expect(span).toContain(strong)
    })

    test('Should render full "message" text.', () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      expect(screen.getByText('R$10.90')).toBeDefined()
      expect(screen.getByText('Faltam para frete grátis.')).toBeDefined()
    })
  })

  describe('With "Você alcançou frete grátis!" as message prop:', () => {
    const freeShippingMessage = 'Você alcançou frete grátis!'

    test('Should render a "span" only.', () => {
      const { container } = render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      const span = container.querySelector('span')
      const strong = container.querySelector('strong')

      expect(span).toBeDefined()
      expect(strong).toBeNull()
    })

    test('Should render full "message" text.', () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      expect(screen.getByText(freeShippingMessage)).toBeDefined()
    })
  })

  describe('With "R$999.99" as message prop:', () => {
    const freeShippingMessage = 'R$999.99'

    test('Should render a "strong" tag only.', () => {
      const { container } = render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      const strong = container.querySelector('strong')
      const span = container.querySelector('span')

      expect(strong).toBeDefined()
      expect(span).toBeNull()
    })

    test('Span tag should be blue.', () => {
      const { container } = render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      const strong = container.querySelector('strong')
      expect(strong).toBeDefined()

      const style = window.getComputedStyle(strong as HTMLElement)
      expect(style.color).toBe('rgb(35, 145, 225)')
    })

    test('Should render full "message" text.', () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <FormattedShippingMessage message={freeShippingMessage} />
        </ThemeProvider>,
      )

      expect(screen.getByText(freeShippingMessage)).toBeDefined()
    })
  })
})
