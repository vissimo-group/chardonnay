import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import styled from 'styled-components'
import { Tooltip } from '../components'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
  },
} as Meta

const StyledLink = styled.u`
  cursor: pointer;
`

const TooltipStory = (args) => {
  const [isHovered, setIsHovered] = useState(true)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    // delete this line
    // eslint-disable-next-line no-console
    console.log('Link clicado!')
  }

  return (
    <div style={{ margin: '100px' }}>
      <Tooltip
        position="top-start"
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        severity="info"
        theme="light"
        isHovered={isHovered}
        content={
          <p>
            Informe seu CEP e veja as{' '}
            <strong>
              <StyledLink onClick={handleClick}>
                melhores ofertas e prazos
              </StyledLink>
            </strong>{' '}
            para sua região!
          </p>
        }
        {...args}
      >
        <h1>Tooltip</h1>
      </Tooltip>
    </div>
  )
}

export const ToolTip = TooltipStory.bind({})
ToolTip.args = {}
