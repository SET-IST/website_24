import { Avatar, Group, Menu, UnstyledButton, rem, Text } from '@mantine/core'
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
  IconUser,
} from '@tabler/icons-react'
import cx from 'clsx'
import { useState } from 'react'
import classes from './Navbar.module.css'
import classNames from 'classnames'

const user = {
  name: 'Test Account',
  email: 'janspoon@fighter.dev',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
}

interface AccountMenuProps {
  inverted: boolean
}

export function AccountMenu({ inverted }: AccountMenuProps) {
  const [userMenuOpened, setUserMenuOpened] = useState(false)

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classNames(
            classes.user,
            inverted && classes.inverted,
            classes.userActive && userMenuOpened,
            inverted
              ? 'hover:border-b-[color:var(--mantine-color-blue-6)]'
              : 'hover:bg-gray-200 hover:bg-opacity-10'
          )}
        >
          <Group gap={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={30} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconUser
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Ver perfil
        </Menu.Item>
        <Menu.Divider />
        <Menu.Label>Staff</Menu.Label>
        <Menu.Item>Editar conta</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Definições</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Editar conta
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconLogout
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Terminar sessão
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
