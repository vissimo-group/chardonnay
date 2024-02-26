import { Edit, Oficial } from 'semillon'
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../../Text'
import * as ModalAddressCard from './index'
import { ModalAddressCardProps } from './type'

interface StoryProps extends ModalAddressCardProps {
  selected?: boolean
}

export default {
  title: 'Components/Card Address/Modal Address Card',
  tags: ['autodocs'],
  argTypes: {},
} as Meta<StoryProps>

type Story = StoryObj<StoryProps>

export const ModalAddressCardDefault: Story = {
  args: {
    selected: true,
  },
  name: 'Selected and no Selected',
  render: (args) => (
    <>
      <ModalAddressCard.Root selected {...args}>
        <ModalAddressCard.Title>
          <Text autosize weight="bold" as="span">
            Residencial
          </Text>
          {args.selected && (
            <ModalAddressCard.Icon>
              <Oficial color="#2391E1" />
            </ModalAddressCard.Icon>
          )}
          <ModalAddressCard.Action>
            <Edit size={26} />
          </ModalAddressCard.Action>
        </ModalAddressCard.Title>

        <ModalAddressCard.Content>
          <Text autosize as="span">
            Rua Pires da Mota, 974, CEP: 01415-000 Aclimação São paulo
          </Text>
        </ModalAddressCard.Content>

        <ModalAddressCard.Complement>
          <Text autosize as="span">
            Apto 41
          </Text>
        </ModalAddressCard.Complement>
      </ModalAddressCard.Root>
      <br />
      <ModalAddressCard.Root {...args} selected={!args.selected}>
        <ModalAddressCard.Title>
          <Text autosize weight="bold" as="span">
            Comercial
          </Text>
          {!args.selected && (
            <ModalAddressCard.Icon>
              <Oficial color="#2391E1" />
            </ModalAddressCard.Icon>
          )}
          <ModalAddressCard.Action>
            <Edit size={26} />
          </ModalAddressCard.Action>
        </ModalAddressCard.Title>

        <ModalAddressCard.Content>
          <Text autosize as="span">
            Rua Holdercim, 840 - Civit II, Serra - ES, 29168-066
          </Text>
        </ModalAddressCard.Content>

        <ModalAddressCard.Complement>
          <Text autosize as="span">
            Galpão
          </Text>
        </ModalAddressCard.Complement>
      </ModalAddressCard.Root>
    </>
  ),
}

export const ModalAddressCardNoSelected: Story = {
  args: {
    selected: false,
  },
  name: 'No Selected',
  render: (args) => (
    <ModalAddressCard.Root selected {...args}>
      <ModalAddressCard.Title>
        <Text autosize weight="bold">
          typeAddress
        </Text>
        {args.selected && (
          <ModalAddressCard.Icon>
            <Oficial color="#2391E1" />
          </ModalAddressCard.Icon>
        )}
        <ModalAddressCard.Action>
          <Edit size={26} />
        </ModalAddressCard.Action>
      </ModalAddressCard.Title>

      <ModalAddressCard.Content>
        <Text autosize as="span">
          address
        </Text>
        <Text autosize as="span">
          postcode
        </Text>
      </ModalAddressCard.Content>

      <ModalAddressCard.Complement>
        <Text autosize as="span">
          complement
        </Text>
        <Text autosize as="span">
          complement
        </Text>
        <Text autosize as="span">
          complement
        </Text>
      </ModalAddressCard.Complement>
    </ModalAddressCard.Root>
  ),
}

export const ModalAddressCardSelected: Story = {
  args: {
    selected: true,
  },
  name: 'Selected',
  render: (args) => (
    <ModalAddressCard.Root {...args}>
      <ModalAddressCard.Title>
        <Text autosize weight="bold">
          typeAddress
        </Text>
        {args.selected && (
          <ModalAddressCard.Icon>
            <Oficial color="#2391E1" />
          </ModalAddressCard.Icon>
        )}
        <ModalAddressCard.Action>
          <Edit size={26} />
        </ModalAddressCard.Action>
      </ModalAddressCard.Title>

      <ModalAddressCard.Content>
        <Text autosize as="span">
          address
        </Text>
        <Text autosize as="span">
          postcode
        </Text>
      </ModalAddressCard.Content>

      <ModalAddressCard.Complement>
        <Text autosize as="span">
          complement
        </Text>
        <Text autosize as="span">
          complement
        </Text>
        <Text autosize as="span">
          complement
        </Text>
      </ModalAddressCard.Complement>
    </ModalAddressCard.Root>
  ),
}
