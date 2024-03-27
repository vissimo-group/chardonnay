import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import { Colors } from '../../tokens'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
      },
      options: ['PRIMARY', 'DESTRUCTIVE', 'FEEDBACK'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['FILLED', 'OUTLINED', 'NOT_FILLED'],
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    large: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

const addIcon = (color = 'white') => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.625 7.625C12.625 7.27982 12.3452 7 12 7C11.6548 7 11.375 7.27982 11.375 7.625V11.375L7.625 11.375C7.27982 11.375 7 11.6548 7 12C7 12.3452 7.27982 12.625 7.625 12.625L11.375 12.625V16.375C11.375 16.7202 11.6548 17 12 17C12.3452 17 12.625 16.7202 12.625 16.375V12.625L16.375 12.625C16.7202 12.625 17 12.3452 17 12C17 11.6548 16.7202 11.375 16.375 11.375L12.625 11.375V7.625Z"
      fill={color}
    />
  </svg>
)

const loadingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 40 40"
  >
    <path
      opacity="0.2"
      fill="currentColor"
      d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"
    />
    <path
      fill="currentColor"
      d="M26.013 10.047l1.654-2.866a14.855 14.855 0 00-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        dur="0.5s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

const checkIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4259 15.4939C10.4199 15.4883 10.4141 15.4827 10.4083 15.4769L7.56818 12.6368C7.27529 12.3439 7.27529 11.869 7.56818 11.5761C7.86107 11.2832 8.33595 11.2832 8.62884 11.5761L10.9735 13.9207L17.4318 7.46241C17.7247 7.16951 18.1995 7.16951 18.4924 7.46241C18.7853 7.7553 18.7853 8.23017 18.4924 8.52307L11.5038 15.5117C11.2109 15.8046 10.736 15.8046 10.4431 15.5117C10.4372 15.5059 10.4315 15.4999 10.4259 15.4939Z"
      fill="#2391E1"
    />
  </svg>
)

export const Filled: Story = {
  args: {
    variant: 'FILLED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: false,
    disabled: false,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon()}
      Label
    </Button>
  ),
}

export const FilledDestructive: Story = {
  args: {
    variant: 'FILLED',
    buttonType: 'DESTRUCTIVE',
    fullWidth: true,
    large: false,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon()}
      Label
    </Button>
  ),
}

export const Outlined: Story = {
  args: {
    variant: 'OUTLINED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: false,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon(Colors.light.action.action100)}
      Label
    </Button>
  ),
}

export const OutlinedDestructive: Story = {
  args: {
    variant: 'OUTLINED',
    buttonType: 'DESTRUCTIVE',
    fullWidth: true,
    large: false,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon(Colors.light.brand.brand100)}
      Label
    </Button>
  ),
}

export const NotFilled: Story = {
  args: {
    variant: 'NOT_FILLED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: false,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon(Colors.light.action.action100)}
      Label
    </Button>
  ),
}

export const NotFilledDestructive: Story = {
  args: {
    variant: 'NOT_FILLED',
    buttonType: 'DESTRUCTIVE',
    fullWidth: true,
    large: false,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon(Colors.light.brand.brand100)}
      Label
    </Button>
  ),
}

export const WithAnimatedIcon: Story = {
  args: {
    variant: 'FILLED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: false,
  },
  render: (args) => <Button {...args}>{loadingIcon}</Button>,
}

export const Large: Story = {
  args: {
    variant: 'FILLED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: true,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon()}
      Label
    </Button>
  ),
}

export const LargeOutlined: Story = {
  args: {
    variant: 'OUTLINED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: true,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon(Colors.light.action.action100)}
      Label
    </Button>
  ),
}

export const LargeNotFilled: Story = {
  args: {
    variant: 'NOT_FILLED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: true,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon(Colors.light.action.action100)}
      Label
    </Button>
  ),
}

export const Disabled: Story = {
  args: {
    variant: 'FILLED',
    buttonType: 'PRIMARY',
    fullWidth: true,
    large: false,
    disabled: true,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon()}
      Label
    </Button>
  ),
}

export const Feedback: Story = {
  args: {
    variant: 'OUTLINED',
    buttonType: 'FEEDBACK',
    fullWidth: true,
    large: false,
  },
  render: (args) => (
    <Button {...args}>
      {checkIcon}
      Label
    </Button>
  ),
}

export const NotFullWidth: Story = {
  args: { variant: 'FILLED', buttonType: 'PRIMARY', fullWidth: false },
  render: (args) => (
    <Button {...args}>
      {addIcon()}
      Label
    </Button>
  ),
}

export const NotFullWidthLarge: Story = {
  args: {
    variant: 'FILLED',
    buttonType: 'PRIMARY',
    fullWidth: false,
    large: true,
  },
  render: (args) => (
    <Button {...args}>
      {addIcon()}
      Label
    </Button>
  ),
}
