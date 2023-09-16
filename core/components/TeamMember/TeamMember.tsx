import classNames from 'classnames'
import Image from 'next/image'

import type { StaticImageData } from 'next/image'

type TeamMemberProps = {
  src: StaticImageData['src']
  name: string
  role?: string
  placeholderUrl?: string
  onClickHandler?: () => void
}

const TeamMember = ({
  src,
  name,
  role,
  placeholderUrl,
  onClickHandler,
}: TeamMemberProps) => {
  return (
    <div
      className={classNames('flex flex-col items-center justify-center', {
        'cursor-pointer': !!onClickHandler,
      })}
      onClick={onClickHandler}
    >
      <Image
        src={src}
        alt={name}
        width={300}
        height={300}
        className="rounded-full w-40 h-40 my-2"
        placeholder={placeholderUrl ? 'blur' : undefined}
        blurDataURL={placeholderUrl}
      />
      <p className="font-medium text-lg">{name}</p>
      {role && <span className="font-light text-base">{role}</span>}
    </div>
  )
}

TeamMember.displayName = 'TeamMember'

export default TeamMember
export type { TeamMemberProps }
