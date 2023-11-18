import { Anchor } from '@mantine/core'
import { IconLink } from '@tabler/icons-react'
import { PropsWithChildren } from 'react'

interface AnchorLinkProps {
  href: string
}

const AnchorLink = ({ href, children }: PropsWithChildren<AnchorLinkProps>) => {
  return (
    <Anchor fz="sm" fw={600} href={href} target="_blank">
      <span className="flex flex-row gap-1">
        <IconLink size={20} />
        {children}
      </span>
    </Anchor>
  )
}

export { AnchorLink }
