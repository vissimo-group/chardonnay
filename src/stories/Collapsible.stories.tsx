import { useState, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'

import { BorderRadius, Colors, Spacing } from '../tokens'
import { StyledCollapsibleContent } from '../components/Collapsible/CollapsibleContent/style'
import { UnstyledButton } from '../components/UnstyledButton'

//* DECORATORS */

const StoryPlaceholder = styled.div`
  width: 600px;
  padding: ${Spacing['5']};
  border-radius: ${BorderRadius['3']};
  border: 1px solid ${Colors.light.neutral.neutral200};
`
const StyledSpan = styled.span`
  color: ${Colors.light.neutral.neutral400};
  font-weight: 600;
`

type CollapsibleToggleComponentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const CollapsibleToggleComponent = ({
  children: content,
}: CollapsibleToggleComponentProps) => {
  const [open, setOpen] = useState(false)

  const toggleOpenSate = () => {
    setOpen((isOpen) => !isOpen)
  }

  const buttonContent = open ? 'Hide' : 'See more...'

  return (
    <div>
      <StyledCollapsibleContent $open={open}>
        {content}
      </StyledCollapsibleContent>

      <UnstyledButton onClick={toggleOpenSate}>{buttonContent}</UnstyledButton>
    </div>
  )
}

export default {
  title: 'Components/Collapsible',
  component: CollapsibleToggleComponent,
  decorators: [
    (Story) => (
      <StoryPlaceholder>
        <StyledSpan>
          You can use a helper function with a button to toggle the component.
        </StyledSpan>

        <Story />
      </StoryPlaceholder>
    ),
  ],
} as Meta

//* STORIES */

const paragraph = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui
    consequuntur cumque. Asperiores veniam iure, deserunt laborum magni rerum
    facilis illo sit eaque sequi aspernatur facere veritatis dicta dolorum
    consectetur.
  </p>
)

export const CollapsibleWithParagraph: StoryObj = {
  name: 'With a paragraph',
  args: { children: paragraph },
}
