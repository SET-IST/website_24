import {
  Avatar,
  Group,
  Menu,
  UnstyledButton,
  rem,
  Text,
  Stack,
} from '@mantine/core'
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
import { Link, NavItemType, createMobileNavItem } from './utils'

const user = {
  name: 'Gonçalo Silva',
  email: 'testn@fighter.dev',
  image: 'https://avatars.githubusercontent.com/u/20109157?v=4',
}

const settings: Array<Link> = []

interface AccountMenuProps {
  inverted: boolean
  renderForMobile: boolean
}

export function AccountMenu({ inverted, renderForMobile }: AccountMenuProps) {
  const [userMenuOpened, setUserMenuOpened] = useState(false)

  return renderForMobile ? (
    <Stack gap={8}>
      <UnstyledButton>
        <Group
          gap={12}
          p="sm"
          className="rounded-lg hover:bg-gray-50 hover:bg-opacity-80"
        >
          <Avatar src={user.image} alt={user.name} radius="xl" size={50} />
          <Stack gap={2}>
            <Text fw={600} size="md" lh={1} mr={3}>
              {user.name}
            </Text>
            <span className=" font-medium text-[color:var(--mantine-color-dimmed)] text-[length:var(--mantine-font-size-sm)]">
              Ver perfil
            </span>
          </Stack>
        </Group>
      </UnstyledButton>
    </Stack>
  ) : (
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
          <Group gap={12}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={35} />
            <Group gap={7}>
              <Text fw={600} size="sm" lh={1} mr={3}>
                {user.name}
              </Text>
              <IconChevronDown
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
            </Group>
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
