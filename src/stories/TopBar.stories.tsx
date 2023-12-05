import type { Meta } from '@storybook/react'
import React from 'react'
import { Delivery } from 'semillon'
import { TopBar } from '../components'
import { TopBarProps } from '../components/TopBar'

export default {
  title: 'Components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  argTypes: {
    cepText: {
      control: 'text',
    },
    tagValue: {
      control: 'text',
    },
    infoText1: {
      control: 'text',
    },
    infoText2: {
      control: 'text',
    },
    infoText3: {
      control: 'text',
    },
  },
} as Meta<TopBarProps>

export const topBar = (args: TopBarProps) => <TopBar {...args} />
topBar.args = {
  cepText: 'Informe seu CEP',
  tagValue: 'Frete grátis em toda loja!',
  iconTag: <Delivery size={26} />,
  infoText1: 'Nossas lojas',
  infoText2: 'Contato',
  infoText3: 'Evino Delivery',
}

export const topBarLeftComponent = (args: TopBarProps) => <TopBar {...args} />
topBarLeftComponent.args = {
  cepText: 'Informe seu CEP',
}

export const topBarCenterComponent = (args: TopBarProps) => <TopBar {...args} />
topBarCenterComponent.args = {
  tagValue: 'Frete grátis em toda loja!',
  iconTag: <Delivery size={26} />,
}

export const topBarRightComponent = (args: TopBarProps) => <TopBar {...args} />
topBarRightComponent.args = {
  infoText1: 'Nossas lojas',
  infoText2: 'Contato',
  infoText3: 'Evino Delivery',
}

export const topBarEmptyComponent: React.FC = () => <TopBar />
