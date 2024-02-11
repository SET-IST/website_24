import AuthGuard from '@/components/AuthGuard'
import { UserType } from '@prisma/client'
import type { PropsWithChildren } from 'react'
import { NavbarLayout } from '@/_pages/layouts'
import { Paper, em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

type StaffLayoutProps = PropsWithChildren

export const StaffLayout = ({ children }: StaffLayoutProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <AuthGuard roles={[UserType.Staff]}>
      <NavbarLayout startTransparent={false}>
        <div className="sm:h-screen pt-14 sm:pt-20 sm:pb-3 md:px-4 bg-[color:var(--mantine-color-gray-1)]">
          <Paper
            className="w-full h-fit !rounded-none sm:!rounded-lg"
            radius="md"
            withBorder={!isMobile}
            pt={2}
            bg="var(--mantine-color-body)"
          >
            {children}
          </Paper>
        </div>
      </NavbarLayout>
    </AuthGuard>
  )
}

export type { StaffLayoutProps }
