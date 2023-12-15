import type { Meta, StoryObj } from '@storybook/react'

import styled from 'styled-components'

import { BorderRadius, Colors, Spacing } from '../tokens'

import type {
  GridColProps,
  GridRootProps,
  GridRowProps,
} from '../components/Grid'
import * as Grid from '../components/Grid'

//* DECORATORS */

const CardPlaceholder = styled.div`
  display: flex;
  position: relative;
  width: 600px;
  padding: ${Spacing['5']};
  border-radius: ${BorderRadius['3']};
  border: 1px solid ${Colors.light.neutral.neutral200};
`

//* PLACEHOLDERS */

const Example = styled.div`
  color: ${Colors.light.neutral.neutral400};
  padding: ${Spacing['1']};
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  text-align: center;
  border: 1px solid ${Colors.light.brand.brand200};
  border-radius: ${BorderRadius['3']};
`

//* META */

const meta: Meta<GridRootProps & GridRowProps & GridColProps> = {
  title: 'Components/Grid',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <CardPlaceholder>
        <Story />
      </CardPlaceholder>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta

//* STORIES */

type Story = StoryObj<GridRootProps & GridRowProps & GridColProps>

export const SingleRow: Story = {
  name: 'Single Row Grid',
  args: {
    maxWidth: 500,
    amount: 3,
  },
  argTypes: {
    amount: {
      type: 'number',
    },
    maxWidth: {
      type: 'number',
      description: 'max width for grid. If "0" then max-width property is 100%',
    },
  },
  render: ({ amount, maxWidth }) => (
    <Grid.Root maxWidth={maxWidth}>
      <Grid.Row amount={amount}>
        <Grid.Col>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>

        <Grid.Col>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>

        <Grid.Col>
          <Example>
            <h1>3</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>
    </Grid.Root>
  ),
}

export const MultipleRows: Story = {
  name: 'Multiple Rows Grid',
  argTypes: {
    maxWidth: {
      type: 'number',
      description: 'max width for grid. If "0" then max-width property is 100%',
    },
  },
  render: ({ maxWidth }) => (
    <Grid.Root maxWidth={maxWidth}>
      <Grid.Row amount={6}>
        <Grid.Col size={2} span>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>
        <Grid.Col>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={3} span>
          <Example>
            <h1>3</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row amount={6}>
        <Grid.Col size={4} span>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={2} span>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row amount={8}>
        <Grid.Col size={3} span>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={2} span>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={3} span>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>
    </Grid.Root>
  ),
}
