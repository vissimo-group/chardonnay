import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'

import { BorderRadius, Colors, Spacing } from '../tokens'
import * as Collapsible from '../components/Collapsible'
import { CollapsibleRootProps } from '../components/Collapsible/CollapsibleRoot/types'
import { CollapsibleContentProps } from '../components/Collapsible/CollapsibleContent/types'
import { CollapsibleTriggerProps } from '../components/Collapsible/CollapsibleTrigger/types'

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

const meta: Meta<
  CollapsibleRootProps & CollapsibleContentProps & CollapsibleTriggerProps
> = {
  title: 'Components/Collapsible',
  tags: ['autodocs'],
  argTypes: {
    openByDefault: {
      description:
        'This property is responsible for defining whether the component should start with the content open or closed.',
      control: {
        type: 'boolean',
      },
    },
    ifOpen: {
      control: { type: 'text' },
      description:
        'Customizes the button when the content is open. Accepts any react node value. Icons, texts, etc.',
    },
    ifClosed: {
      control: { type: 'text' },
      description:
        'Customizes the button when the content is closed. Accepts any react node value. Icons, texts, etc.',
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

type StoryType = StoryObj<CollapsibleRootProps & CollapsibleTriggerProps>

export const Open: StoryType = {
  name: 'Open by default state',
  args: { openByDefault: true, ifOpen: 'Show less', ifClosed: 'Show more' },
  render: ({ openByDefault, ifOpen, ifClosed }) => (
    <Collapsible.Root openByDefault={openByDefault}>
      <Collapsible.Content>{content}</Collapsible.Content>
      <Collapsible.Trigger ifOpen={ifOpen} ifClosed={ifClosed} />
    </Collapsible.Root>
  ),
}

export const Closed: StoryType = {
  name: 'Closed by default state',
  args: { openByDefault: false, ifOpen: 'Show less', ifClosed: 'Show more' },
  render: ({ openByDefault, ifOpen, ifClosed }) => (
    <Collapsible.Root openByDefault={openByDefault}>
      <Collapsible.Content>{content}</Collapsible.Content>
      <Collapsible.Trigger ifOpen={ifOpen} ifClosed={ifClosed} />
    </Collapsible.Root>
  ),
}
