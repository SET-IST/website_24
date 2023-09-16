import { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'
import Card from '../../core/components/Card'
import CardDetails from './CardDetails'
import CardImage from './CardImage'

type ActivityCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  image: StaticImageData
  flip?: boolean
}

const ActivityCard = ({
  title,
  image,
  flip = false,
  children,
  ...props
}: ActivityCardProps) => {
  const cardDetails = <CardDetails title={title}>{children}</CardDetails>
  const cardImage = <CardImage image={image} alt={title} />

  return (
    <div {...props}>
      <Card className="flex flex-col sm:flex-row items-start sm:items-stretch gap-8 sm:gap-10 h-fit bg-transparent shadow-none">
        {flip ? (
          <>
            {cardDetails}
            {cardImage}
          </>
        ) : (
          <>
            {cardImage}
            {cardDetails}
          </>
        )}
      </Card>
    </div>
  )
}

export default ActivityCard
export type { ActivityCardProps }
