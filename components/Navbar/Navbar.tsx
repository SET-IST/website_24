import { useDisclosure, useViewportSize, useWindowScroll } from '@mantine/hooks'
import { AppShell, Burger, Divider, Group, Stack } from '@mantine/core'

import classes from './Navbar.module.css'
import SetLogoInverted from '@/core/assets/logos/logo_set_inverted.svg'
import SetLogo from '@/core/assets/logos/logo_set.svg'
import { PropsWithChildren, useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { createNavItem, links, Link as RouteLink } from './utils'
import { AccountMenu } from './account'
import { useSession } from 'next-auth/react'

export default function Navbar({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure()
  const { height } = useViewportSize()
  const [scroll, scrollTo] = useWindowScroll()

  //TODO: migrate to auth.js
  const sessionContext = useSession()

  const isInverted = (): boolean => {
    return scroll.y > height / 4
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
          {/* Logo */}

          <Group justify="space-between" style={{ flex: 1 }}>
            <Link href="#" className="w-28 h-auto">
              {isInverted() ? (
                <SetLogo aria-hidden />
              ) : (
                <SetLogoInverted aria-hidden />
              )}
            </Link>

            {/* Desktop navbar */}

            <Group ml="xl" gap={8} visibleFrom="sm">
              {links.map((link) => createNavItem(link, isInverted(), false))}
            </Group>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <AccountMenu
                session={sessionContext}
                renderForMobile={false}
                inverted={isInverted()}
              />
            </Group>
          </Group>

          {/* Mobile menu burger */}
          <Burger
            color={isInverted() ? 'gray.7' : 'white'}
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>

      {/* Mobile menu */}

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
            <AccountMenu
              session={sessionContext}
              renderForMobile={true}
              inverted={isInverted()}
            />
            <Divider my="xs" />
            {links.map((link) => createNavItem(link, isInverted(), true))}
          </Stack>
        </Stack>
      </AppShell.Navbar>

      {/* End Mobile menu */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
