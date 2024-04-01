import type { Meta, StoryObj } from '@storybook/react'
import { RadioTagContainer } from '.'
import { RadioTagLabel } from '../RadioTagLabel'
import { RadioTagInput } from '../RadioTagInput'

const meta: Meta<typeof RadioTagContainer> = {
  component: RadioTagContainer,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Container width. If no value was set, fit-content.',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioTagContainer>

export const Default: Story = {
  render: (args) => (
    <RadioTagContainer {...args}>
      <RadioTagInput id="one" name="my-radio-tag" />
      <RadioTagLabel htmlFor="one">Option One</RadioTagLabel>

      <RadioTagInput id="two" name="my-radio-tag" />
      <RadioTagLabel htmlFor="two">Option Two</RadioTagLabel>

      <RadioTagInput id="three" name="my-radio-tag" />
      <RadioTagLabel htmlFor="three">Option Three</RadioTagLabel>

      <RadioTagInput id="four" name="my-radio-tag" />
      <RadioTagLabel htmlFor="four">Option Four</RadioTagLabel>

      <RadioTagInput id="five" name="my-radio-tag" />
      <RadioTagLabel htmlFor="five">Option Five</RadioTagLabel>
    </RadioTagContainer>
  ),
}

export const WithFixedWidth: Story = {
  args: { width: '300px' },
  render: (args) => (
    <RadioTagContainer {...args}>
      <RadioTagInput id="one" name="my-radio-tag-ii" />
      <RadioTagLabel htmlFor="one">Option One</RadioTagLabel>

      <RadioTagInput id="two" name="my-radio-tag-ii" />
      <RadioTagLabel htmlFor="two">Option Two</RadioTagLabel>

      <RadioTagInput id="three" name="my-radio-tag-ii" />
      <RadioTagLabel htmlFor="three">Option Three</RadioTagLabel>

      <RadioTagInput id="four" name="my-radio-tag-ii" />
      <RadioTagLabel htmlFor="four">Option Four</RadioTagLabel>

      <RadioTagInput id="five" name="my-radio-tag-ii" />
      <RadioTagLabel htmlFor="five">Option Five</RadioTagLabel>
    </RadioTagContainer>
  ),
}
