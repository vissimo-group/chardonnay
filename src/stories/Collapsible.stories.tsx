import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

import { BorderRadius, Colors, Spacing } from '../tokens'
import * as Collapsible from '../components/Collapsible'

//* DECORATORS */

const StoryPlaceholder = styled.div`
  width: 600px;
  padding: ${Spacing['5']};
  border-radius: ${BorderRadius['3']};
  border: 1px solid ${Colors.light.neutral.neutral200};
`
const StyledSpan = styled.header`
  color: ${Colors.light.neutral.neutral400};
  font-weight: 600;
  margin-bottom: 1rem;
`

const meta: Meta<typeof Collapsible.Root> = {
  title: 'Components/Collapsible',
  component: Collapsible.Root,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: {
      description:
        'This property is responsible for defining whether the component should start with the content open or closed.',
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <StoryPlaceholder>
        <StyledSpan>Your content</StyledSpan>

        <Story />
      </StoryPlaceholder>
    ),
  ],
}

export default meta

//* STORIES */

const content = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui
    consequuntur cumque. Asperiores veniam iure, deserunt laborum magni rerum
    facilis illo sit eaque sequi aspernatur facere veritatis dicta dolorum
    consectetur.
  </p>
)

type StoryType = StoryObj<typeof Collapsible.Root>

const CustomText = styled.span`
  cursor: pointer;
  padding: 0.5rem;
  background-color: #00557c;
  border-radius: 8px;
  color: white;
  &:hover {
    background-color: #01608d;
  }
`

export const Open: StoryType = {
  name: 'Open state',
  args: {
    isCollapsed: true,
  },
  render: function Render(args) {
    const [{ isCollapsed }, updateArgs] = useArgs()

    const onChange = () => {
      updateArgs({ isCollapsed: !isCollapsed })
    }

    return (
      <Collapsible.Root {...args}>
        <Collapsible.Content>{content}</Collapsible.Content>
        <Collapsible.Trigger onToggle={onChange}>
          <CustomText>{isCollapsed ? 'Show less' : 'Show more'}</CustomText>
        </Collapsible.Trigger>
      </Collapsible.Root>
    )
  },
}

export const Closed: StoryType = {
  name: 'Closed state',
  args: {
    isCollapsed: false,
  },
  render: function Render(args) {
    const [{ isCollapsed }, updateArgs] = useArgs()

    const onChange = () => {
      updateArgs({ isCollapsed: !isCollapsed })
    }

    return (
      <Collapsible.Root {...args}>
        <Collapsible.Content>{content}</Collapsible.Content>
        <Collapsible.Trigger onToggle={onChange}>
          <CustomText>{isCollapsed ? 'Show less' : 'Show more'}</CustomText>
        </Collapsible.Trigger>
      </Collapsible.Root>
    )
  },
}
