import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'

import { UnstyledButton } from '../components/UnstyledButton'

//* DECORATORS */

const StoryPlaceholder = styled.div`
  text-align: center;
`

export default {
  title: 'Components/UnstyledButton',
  component: UnstyledButton,
  decorators: [
    (Story) => (
      <StoryPlaceholder>
        <Story />
      </StoryPlaceholder>
    ),
  ],
} as Meta

//* STORIES */

const paragraph = <p>My unstyled button</p>

export const UnstyledButtonWithParagraph: StoryObj = {
  name: 'With a paragraph',
  args: { children: paragraph, disabled: false },
}
