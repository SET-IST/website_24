import { Anchor } from '@mantine/core'
import { IconLink } from '@tabler/icons-react'
import classNames from 'classnames'

interface AnchorLinkProps {
  preview: boolean
  label?: string | null
  href?: string | null
}

const AnchorLink = ({ label, href, preview }: AnchorLinkProps) => {
  const disabled = !label || !href

  if (preview && disabled) return null

  return (
    <Anchor
      className={classNames(
        disabled && '!cursor-default hover:no-underline !text-gray-300'
      )}
      fz="sm"
      fw={600}
      href={href ?? '#'}
      target="_blank"
    >
      <span className="flex flex-row gap-1">
        <IconLink size={20} />
        {disabled ? 'https://example-link.com' : label}
      </span>
    </Anchor>
  )
}

export { AnchorLink }
