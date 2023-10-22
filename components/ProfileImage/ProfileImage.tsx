import cn from 'classnames'
import { CiCamera } from 'react-icons/ci'
//  Assets
import DefaultProfileImage from '../../assets/team/unknown.jpg'
//  Types
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type ProfileImageProps = {
  src?: StaticImageData['src'] | null
  altText: string
  onClick?: () => void
}

const ProfileImage = ({ src, altText, onClick }: ProfileImageProps) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <div className="relative mx-auto my-5 max-w-fit">
      <div className="absolute right-2 bottom-2 z-10 cursor-pointer">
        <CiCamera
          onClick={handleClick}
          className={cn(
            'inline-block bottom-1 right-1 shadow-md bg-primary-500 rounded-full p-1 border transition-colors ',
            'hover:bg-primary-800'
          )}
          color="white"
          size={35}
        />
      </div>
      <div className="w-36 h-36 relative rounded-full shadow-md">
        <Image
          src={src || DefaultProfileImage.src}
          className="w-full h-full bg-contain rounded-full bg-no-repeat bg-center"
          width={144}
          height={144}
          quality={100}
          alt={altText}
        />
      </div>
    </div>
  )
}

ProfileImage.displayName = 'ProfileImage'

export default ProfileImage
export type { ProfileImageProps }
