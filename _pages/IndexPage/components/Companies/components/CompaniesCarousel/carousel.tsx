import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Include logos here
import hccm from '@/core/assets/logos/empresas/hccm.webp'
import indie from '@/core/assets/logos/empresas/indie_campers.webp'
import deloitte from '@/core/assets/logos/empresas/deloitte.webp'
import siscog from '@/core/assets/logos/empresas/siscog.webp'
import celfocus from '@/core/assets/logos/empresas/celfocus.webp'
import accenture from '@/core/assets/logos/empresas/accenture.webp'
import brighten from '@/core/assets/logos/empresas/brighten.webp'

import classes from './carousel.module.css'
import { useRef } from 'react'

const images = [
  hccm.src,
  indie.src,
  deloitte.src,
  siscog.src,
  celfocus.src,
  accenture.src,
  brighten.src,
]

interface CompaniesCarouselProps {
  isMobile: boolean
}

export function CompaniesCarousel({ isMobile }: CompaniesCarouselProps) {
  const autoplay = useRef(Autoplay({ delay: 2000 }))
  const logoSize = isMobile ? 160 : 140
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <Image
          src={url}
          alt="Picture of the author"
          height={logoSize}
          width={logoSize}
        />
      </div>
    </Carousel.Slide>
  ))

  return (
    <div style={{ height: 100, width: '100%', display: 'flex' }}>
      <Carousel
        plugins={[autoplay.current]}
        slideSize={isMobile ? '100%' : '20%'}
        height="100%"
        style={{ flex: 1 }}
        classNames={classes}
        slideGap="md"
        loop
        withIndicators={!isMobile}
        withControls={isMobile}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  )
}
