import { Meta, StoryObj } from '@storybook/react'
import {
  Apple,
  Elo,
  Hipercard,
  Mastercard,
  Visa,
  Card as CardIcon,
} from 'semillon'
import { useState } from 'react'
import { NewPaymentMethods } from '.'
import { NewPaymentMethodsProps } from './type'
import { Radio } from '../Radio'
import { NewPaymentMethodsContainerStyled } from './Container/container'
import { ContainteStyled } from './Container/ContainteStyled'
import { TitleStyled } from './Container/title'
import { InstallmentStyle } from './Container/installment'
import { Button } from '../Button'
import { Card } from '../Card'

export default {
  title: 'Components/NewPaymentMethods',
  component: NewPaymentMethods,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      description: 'icon that appears on the left side of the component',
      options: ['Visa', 'Mastercard', 'Elo', 'Hipercard', 'Apple', 'CardIcon'],
      mapping: {
        Visa: <Visa size={36} color="#01326F" />,
        Mastercard: <Mastercard size={36} color="#01326F" />,
        Hipercard: <Hipercard size={36} color="#B3131B" />,
        Elo: <Elo size={36} color="#000000" />,
        Apple: <Apple size={36} color="#1A1919" />,
        CardIcon: <CardIcon size={36} color="#585757" />,
      },
    },
    labelColor: {
      control: 'color',
      defaultValue: '#1c1c1c',
      description:
        'color of the label, if not passed, the default color is #1c1c1c',
    },
    label: {
      control: 'text',
      description: 'label that appears on the right side of the component',
    },
    installment: {
      control: 'text',
      description:
        'installment that appears on the right side of the component',
    },
  },
} as Meta<NewPaymentMethodsProps>

type Story = StoryObj<NewPaymentMethodsProps>

const label = '4115 **** 1989'
const icon = <Visa size={36} color="#01326F" />

export const WithInstallment: Story = {
  args: {
    installment: '1x de 59,85 sem juros',
    label: '4115 **** 1989',
    icon: <Visa size={36} color="#01326F" />,
  },
  render: (args) => (
    <NewPaymentMethods {...args}>
      <div>
        <span style={{ color: '#000' }}>{args.installment}</span>
        <a
          href="/#"
          style={{ color: '#000', marginLeft: '1rem', marginRight: '24px' }}
        >
          Alterar
        </a>
      </div>

      <div>
        <Radio theme="light" />
      </div>
    </NewPaymentMethods>
  ),
}

export const teste = () => {
  return (
    <>
      <NewPaymentMethodsContainerStyled>
        <ContainteStyled>
          <TitleStyled>
            {icon}
            {label}
          </TitleStyled>

          <InstallmentStyle>
            <h1>2x de 59,85 sem juros</h1>
            <div>
              <Button variant="FILLED" buttonType="PRIMARY">
                Alterar
              </Button>

              <Radio checked theme="light" />
            </div>
          </InstallmentStyle>
        </ContainteStyled>
      </NewPaymentMethodsContainerStyled>
    </>
  )
}
