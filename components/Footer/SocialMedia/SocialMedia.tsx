import type { ReactNode } from 'react'
//  Services
import { socialMedia } from '../../../core/services/socialMedia'

type SocialMediaButtonProps = {
  href?: string
  logo?: ReactNode
}

const SocialMediaButton = ({ href, logo }: SocialMediaButtonProps) => (
  <a className="flex justify-center items-center m-5" href={href}>
    {logo}
  </a>
)

const SocialMedia = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly items-center max-w-2xl">
      {socialMedia.map((sm) => (
        <SocialMediaButton key={sm.name} href={sm.href} logo={sm.logo} />
      ))}
    </div>
  )
}

export default SocialMedia
