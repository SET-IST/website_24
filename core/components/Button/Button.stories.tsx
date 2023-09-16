import { ComponentMeta, ComponentStory } from '@storybook/react'

import SearchIcon from '../../assets/icons/system/close.svg'
import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>
}

export const button = Template.bind({})

export const solid = () => {
  return (
    <>
      <Button skin="solid" icon={<SearchIcon />}>
        Solid default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="solid" size="sm">
          Solid small
        </Button>
        <Button skin="solid" size="md">
          Solid medium
        </Button>
        <Button skin="solid" size="lg">
          Solid large
        </Button>
      </div>
    </>
  )
}

export const outline = () => {
  return (
    <>
      <Button skin="outline" icon={<SearchIcon />}>
        Outline default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="outline" size="sm">
          Outline small
        </Button>
        <Button skin="outline" size="md">
          Outline medium
        </Button>
        <Button skin="outline" size="lg">
          Outline large
        </Button>
      </div>
    </>
  )
}

export const flat = () => {
  return (
    <>
      <Button skin="flat" icon={<SearchIcon />}>
        Flat default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="flat" size="sm">
          Flat small
        </Button>
        <Button skin="flat" size="md">
          Flat medium
        </Button>
        <Button skin="flat" size="lg">
          Flat large
        </Button>
      </div>
    </>
  )
}
