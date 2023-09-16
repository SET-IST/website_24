import cn from 'classnames'
import Image from 'next/image'

import type { StaticImageData } from 'next/image'
import type { PropsWithChildren } from 'react'

type HeroWithImageProps = {
  src: StaticImageData['src']
  altText: string
  hasFilter?: boolean
  className?: string
  wrapperClassname?: string
} & PropsWithChildren

const HeroWithImage = ({
  src,
  altText,
  hasFilter,
  children,
  className,
  wrapperClassname,
}: HeroWithImageProps) => {
  return (
    <div className={cn('relative w-screen h-screen', className)}>
      <div className="-z-10">
        <Image
          className="object-cover object-center"
          src={src}
          alt={altText}
          fill
        />
        <div
          className={cn('absolute inset-0 mix-blend-multiply', {
            'bg-tertiary-500': hasFilter,
          })}
        />
      </div>
      <div
        className={cn(
          'relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center',
          wrapperClassname
        )}
      >
        {children}
      </div>
    </div>
  )
}

HeroWithImage.displayName = 'HeroWithImage'

export default HeroWithImage
export type { HeroWithImageProps }
