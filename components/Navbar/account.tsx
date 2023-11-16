import {
  Avatar,
  Group,
  Menu,
  UnstyledButton,
  rem,
  Text,
  Stack,
  Button,
} from '@mantine/core'
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react'
import classes from './Navbar.module.css'
import classNames from 'classnames'
import { createAccountNavItems } from './utils'
import { SessionContextValue, signOut } from 'next-auth/react'
import { useState } from 'react'
import { displayName } from '@/lib/frontend/utils'
import { useRouter } from 'next/router'
import { links } from '@/data/links'
import { UserType } from '@prisma/client'

interface AccountMenuProps {
  inverted: boolean
  renderForMobile: boolean
  session: SessionContextValue
}

export function AccountMenu({
  inverted,
  renderForMobile,
  session,
}: AccountMenuProps) {
  const router = useRouter()
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const user = session.data?.user

  return renderForMobile ? (
    <Stack gap={8}>
      {session.status === 'authenticated' ? (
        <UnstyledButton
          onClick={() => {
            router.push(
              user.role === UserType.COMPANY
                ? links.company.profile
                : links.student.profile
            )
          }}
        >
          <Group
            gap={12}
            p="sm"
            className="rounded-lg hover:bg-gray-50 hover:bg-opacity-80"
          >
            <Avatar src={user.image} alt={user.name} radius="xl" size={50} />
            <Stack gap={2}>
              <Text
                ff="Greycliff CF, var(--mantine-font-family)"
                fw={600}
                size="md"
                lh={1}
                mr={3}
              >
                {displayName(user.name)}
              </Text>
              <span className=" font-medium text-[color:var(--mantine-color-dimmed)] text-[length:var(--mantine-font-size-sm)]">
                Ver perfil
              </span>
            </Stack>
          </Group>
        </UnstyledButton>
      ) : (
        <Button variant="outline">Iniciar sessão</Button>
      )}
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
        {session.status === 'authenticated' ? (
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
                  {displayName(user.name)}
                </Text>
                <IconChevronDown
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </Group>
            </Group>
          </UnstyledButton>
        ) : (
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
              <Text fw={600} size="sm" lh={1} mr={3}>
                Iniciar sessão
              </Text>
            </Group>
          </UnstyledButton>
        )}
      </Menu.Target>
      {session.status === 'authenticated' && (
        <Menu.Dropdown>
          {createAccountNavItems(session, router, false)}
        </Menu.Dropdown>
      )}
    </Menu>
  )
}
