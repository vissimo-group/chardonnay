import type { Meta } from '@storybook/react'
import React from 'react'
import { Delivery } from 'semillon'
import TopBar, { TopBarProps } from '../components/TopBar'
import Tag from '../components/Tag'
import TagCep from '../components/TagCep'
import InfoTopBar from '../components/InfoTopBar'

export default {
  title: 'Components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<TopBarProps>

export const TopBarDefault = () => {
  return (
    <TopBar>
      <TagCep cepText="Informe seu CEP" />
      <Tag
        severity="error"
        icon={<Delivery size={26} color="#fff" />}
        value="Frete grátis em toda loja!"
      />
      <InfoTopBar>
        <p>Nossas lojas</p>
        <p>Contato</p>
        <p>Evino Delivery</p>
      </InfoTopBar>
    </TopBar>
  )
}

export const topBarLeftComponent = () => {
  return (
    <TopBar>
      <TagCep cepText="Informe seu CEP" />
      <div />
      <div />
    </TopBar>
  )
}

export const topBarCenterComponent = () => {
  return (
    <TopBar>
      <div />
      <Tag
        severity="error"
        icon={<Delivery size={26} color="#fff" />}
        value="Frete grátis em toda loja!"
      />
      <div />
    </TopBar>
  )
}

export const topBarRightComponent = () => {
  return (
    <TopBar>
      <div />
      <div />
      <InfoTopBar>
        <p>Nossas lojas</p>
        <p>Contato</p>
        <p>Evino Delivery</p>
      </InfoTopBar>
    </TopBar>
  )
}

export const topBarEmptyComponent = () => {
  return <TopBar />
}
