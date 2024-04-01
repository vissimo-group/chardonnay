import type { Meta, StoryObj } from '@storybook/react'
import { RadioTagLabel } from '.'
import { RadioTagInput } from '../RadioTagInput'

const meta: Meta<typeof RadioTagLabel> = {
  component: RadioTagLabel,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Label width. If no value was set, fit-content.',
    },
    fontSize: {
      control: 'text',
      description: 'Font size of the label. Default value "1rem"',
    },
  },
  parameters: {
    docs: {
      controls: { exclude: ['ref', 'theme', 'as', 'forwardedAs'] },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof RadioTagLabel>

export const Checked: Story = {
  args: { width: '9rem', fontSize: '1rem' },
  render: (args) => (
    <>
      <RadioTagInput checked id="one" name="my-radio-tag-v" />
      <RadioTagLabel {...args} htmlFor="one">
        Option One
      </RadioTagLabel>

      <span style={{ textWrap: 'balance', textAlign: 'center' }}>
        The <strong>RadioTagLabel</strong> component must always be preceded by
        a <strong>RadioTagInput</strong> for styles to be applied correctly.
      </span>
    </>
  ),
}

export const Default: Story = {
  render: () => (
    <>
      <RadioTagInput id="one" name="my-radio-tag-iii" />
      <RadioTagLabel htmlFor="one">Label One</RadioTagLabel>

      <RadioTagInput id="two" name="my-radio-tag-iii" />
      <RadioTagLabel htmlFor="two">Label Two</RadioTagLabel>

      <RadioTagInput id="three" name="my-radio-tag-iii" />
      <RadioTagLabel htmlFor="three">Label Three</RadioTagLabel>

      <RadioTagInput id="four" name="my-radio-tag-iii" />
      <RadioTagLabel htmlFor="four">Label Four</RadioTagLabel>

      <RadioTagInput id="five" name="my-radio-tag-iii" />
      <RadioTagLabel htmlFor="five">Label Three</RadioTagLabel>
    </>
  ),
}

export const WithFixedWidth: Story = {
  args: { width: '10rem' },
  render: (args) => (
    <>
      <RadioTagInput id="one" name="my-radio-tag-iv" />
      <RadioTagLabel {...args} htmlFor="one">
        Option One
      </RadioTagLabel>

      <RadioTagInput id="two" name="my-radio-tag-iv" />
      <RadioTagLabel {...args} htmlFor="two">
        Option Two
      </RadioTagLabel>

      <RadioTagInput id="three" name="my-radio-tag-iv" />
      <RadioTagLabel {...args} htmlFor="three">
        Option Three
      </RadioTagLabel>

      <RadioTagInput id="four" name="my-radio-tag-iv" />
      <RadioTagLabel {...args} htmlFor="four">
        Option Four
      </RadioTagLabel>

      <RadioTagInput id="five" name="my-radio-tag-iv" />
      <RadioTagLabel {...args} htmlFor="five">
        Option Five
      </RadioTagLabel>
    </>
  ),
}

export const WithCustomFontSize: Story = {
  args: { fontSize: '14px' },
  render: (args) => (
    <>
      <RadioTagInput id="one" name="my-radio-tag-font" />
      <RadioTagLabel {...args} htmlFor="one">
        Label One
      </RadioTagLabel>

      <RadioTagInput id="two" name="my-radio-tag-font" />
      <RadioTagLabel {...args} htmlFor="two">
        Label Two
      </RadioTagLabel>

      <RadioTagInput id="three" name="my-radio-tag-font" />
      <RadioTagLabel {...args} htmlFor="three">
        Label Three
      </RadioTagLabel>

      <RadioTagInput id="four" name="my-radio-tag-font" />
      <RadioTagLabel {...args} htmlFor="four">
        Label Four
      </RadioTagLabel>

      <RadioTagInput id="five" name="my-radio-tag-font" />
      <RadioTagLabel {...args} htmlFor="five">
        Label Three
      </RadioTagLabel>
    </>
  ),
}
