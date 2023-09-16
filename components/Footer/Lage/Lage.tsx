import cn from 'classnames'
import Image from 'next/image'
//  Assets
import LageLogo from '@/core/assets/logos/lage.webp'
//  Types
import type { HTMLAttributes } from 'react'

type LageProps = HTMLAttributes<HTMLDivElement>

const Lage = ({ className }: LageProps) => {
  return (
    <div
      className={cn(
        'text-white flex items-baseline font-medium italic font-poppins leading-9 text-base md:text-xl lg:text-xl',
        className
      )}
    >
      Powered by{' '}
      <Image
        src={LageLogo}
        alt="Lage"
        width={88.5}
        height={28.5}
        className="ml-2 w-14 h-5 md:w-16 md:h-7"
      />
    </div>
  )
}

export default Lage
