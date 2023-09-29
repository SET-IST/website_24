import { useDisclosure, useViewportSize, useWindowScroll } from '@mantine/hooks'
import {
  AppShell,
  Burger,
  Divider,
  Group,
  Stack,
  UnstyledButton,
} from '@mantine/core'

import classes from './Navbar.module.css'
import SetLogoInverted from '@/core/assets/logos/logo_set_inverted.svg'
import SetLogo from '@/core/assets/logos/logo_set.svg'
import { PropsWithChildren, useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { createNavItem, links, Link as RouteLink } from './utils'
import { AccountMenu } from './account'

export default function Navbar({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure()
  const { height } = useViewportSize()
  const [scroll, scrollTo] = useWindowScroll()

  const isInverted = (): boolean => {
    return scroll.y > height - 200
  }

  return (
    <AppShell
      header={{ height: 70, offset: false }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      withBorder={false}
    >
      <AppShell.Header
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <Group
          h="100%"
          px="md"
          className={classNames(
            'transition-all duration-150',
            isInverted()
              ? 'bg-[color:var(--mantine-color-body)] border-b border-[color:var(--mantine-color-gray-3)]'
              : 'bg-transparent'
          )}
        >
          <Group justify="space-between" style={{ flex: 1 }}>
            <Link href="#" className="w-28 h-auto">
              {isInverted() ? (
                <SetLogo aria-hidden />
              ) : (
                <SetLogoInverted aria-hidden />
              )}
            </Link>
            <Group ml="xl" gap={8} visibleFrom="sm">
              {links.map((link) => createNavItem(link, isInverted(), false))}
            </Group>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <AccountMenu renderForMobile={false} inverted={isInverted()} />
            </Group>
          </Group>
          <Burger
            color={isInverted() ? 'gray.7' : 'white'}
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px="md">
        <Stack gap="xl">
          <Group justify="space-between">
            <SetLogo aria-hidden />
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
          <Stack gap={0} className="border-none">
            <AccountMenu renderForMobile={true} inverted={isInverted()} />
            <Divider my="xs" />
            {links.map((link) => createNavItem(link, isInverted(), true))}
          </Stack>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
