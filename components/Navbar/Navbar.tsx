import { useDisclosure, useViewportSize, useWindowScroll } from '@mantine/hooks'
import {
  AppShell,
  Burger,
  Divider,
  Group,
  NavLink,
  Stack,
  rem,
} from '@mantine/core'

import classes from './Navbar.module.css'
import SetLogoInverted from '@/assets/logos/logo_set_inverted.svg'
import SetLogo from '@/assets/logos/logo_set.svg'
import { PropsWithChildren, useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { createAccountNavItems, createNavItem } from './utils'
import { AccountMenu } from './account'
import { useSession } from 'next-auth/react'
import { MainLinks, NavLinkType, NavLinkVisibility } from '@/data/nav'
import { useRouter } from 'next/router'
import { IconArrowLeft } from '@tabler/icons-react'
import { links } from '@/data/links'

type NavbarProps = PropsWithChildren & {
  startTransparent?: boolean
}

export default function Navbar({ children, startTransparent }: NavbarProps) {
  const [opened, { toggle }] = useDisclosure()
  const { height } = useViewportSize()
  const [scroll, scrollTo] = useWindowScroll()
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const router = useRouter()

  //TODO: migrate to auth.js
  const sessionContext = useSession()

  const isInverted = (): boolean => {
    return !!startTransparent ? scroll.y > height / 4 : true
  }

  const closeMobileMenu = () => {
    toggle()
    setShowSettings(false)
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
            <Link
              href="#"
              onClick={(event) => {
                event.preventDefault()
                router.push(links.home)
              }}
              className="w-28 h-auto"
            >
              {isInverted() ? (
                <SetLogo aria-hidden />
              ) : (
                <SetLogoInverted aria-hidden />
              )}
            </Link>

            {/* Desktop navbar */}

            <Group ml="xl" gap={8} visibleFrom="sm">
              {MainLinks.map((link) =>
                createNavItem(link, router, isInverted(), false)
              )}
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
            <Link
              href="#"
              onClick={(event) => {
                event.preventDefault()
                router.push(links.home)
                closeMobileMenu()
              }}
              className="w-28 h-auto"
            >
              <SetLogo aria-hidden />
            </Link>
            <Burger
              opened={opened}
              onClick={closeMobileMenu}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
          <Stack gap={0} className="border-none">
            {showSettings ? (
              <>
                <NavLink
                  label="Voltar"
                  onClick={() => setShowSettings(false)}
                  variant="subtle"
                  c="#00415a"
                  leftSection={
                    <IconArrowLeft
                      style={{ width: rem(18), height: rem(18) }}
                      stroke={2}
                    />
                  }
                  styles={{
                    label: {
                      fontSize: 'var(--mantine-font-size-md)',
                      fontWeight: 500,
                    },
                    description: {
                      fontSize: 'var(--mantine-font-size-sm)',
                    },
                  }}
                />
                {createAccountNavItems(
                  sessionContext,
                  router,
                  true,
                  closeMobileMenu
                )}
              </>
            ) : (
              <>
                <AccountMenu
                  session={sessionContext}
                  renderForMobile={true}
                  inverted={isInverted()}
                />

                <Divider my="xs" />
                {sessionContext.status === 'authenticated' &&
                  createNavItem(
                    {
                      type: NavLinkType.FUNCTION,
                      visibility: NavLinkVisibility.MOBILE,
                      label: 'Definições',
                      slug: 'mobile_settings',
                      link: '',
                      linkFn: () => setShowSettings(true),
                    },
                    router,
                    isInverted(),
                    true,
                    closeMobileMenu
                  )}
                {MainLinks.map((link) =>
                  createNavItem(
                    link,
                    router,
                    isInverted(),
                    true,
                    closeMobileMenu
                  )
                )}
              </>
            )}
          </Stack>
        </Stack>
      </AppShell.Navbar>

      {/* End Mobile menu */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
