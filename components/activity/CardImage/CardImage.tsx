import Image, { StaticImageData } from 'next/image'

type CardImageProps = {
  alt: string
  image: StaticImageData
}

const CardImage = ({ image, alt }: CardImageProps) => {
  return (
    <Image
      className="sm:rounded-3xl shadow-xl hidden sm:block sm:w-[300px] sm:h-[200px] md:w-[450px] md:h-[290px]"
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
    />
  )
}

export default CardImage
export type { CardImageProps }
