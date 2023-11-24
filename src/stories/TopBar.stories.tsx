import type { Meta } from '@storybook/react'
import React from 'react'
import { TopBar } from '../components'
import {Delivery} from "semillon";

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
} as Meta<null>

const Template = (args) => <TopBar {...args} />

export const topBar = Template.bind({})
topBar.args = {
  cepText: 'Informe seu CEP',
  tagValue: 'Frete grátis em toda loja!',
  iconTag: <Delivery size={26} />,
  infoText1: 'Nossas lojas',
  infoText2: 'Contato',
  infoText3: 'Evino Delivery',
}

export const topBarLeftComponent = Template.bind({})
topBarLeftComponent.args = {
  cepText: 'Informe seu CEP',
}

export const topBarCenterComponent = Template.bind({})
topBarCenterComponent.args = {
  tagValue: 'Frete grátis em toda loja!',
  iconTag: <Delivery size={26} />,
}

export const topBarRightComponent = Template.bind({})
topBarRightComponent.args = {
  infoText1: 'Nossas lojas',
  infoText2: 'Contato',
  infoText3: 'Evino Delivery',
}

export const topBarEmptyComponent: React.FC = () => <TopBar />
