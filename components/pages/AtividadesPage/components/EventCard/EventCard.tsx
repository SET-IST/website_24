import { DateTime } from 'luxon'
import type { HTMLAttributes } from 'react'

type EventCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  description: string
  location: string
  start: string
  end: string
  type: string
}

const EventCard = ({
  title,
  description,
  location,
  start,
  end,
  type,
  ...props
}: EventCardProps) => {
  start = start.substring(1, start.length - 1)
  const date = DateTime.fromISO(start)
  const humanReadableStartHour = date.hour
  const humanReadableStartMinute = date.minute

  let formattedTime = humanReadableStartHour.toString()
  if (humanReadableStartMinute != 0)
    formattedTime += ':' + humanReadableStartMinute
  else formattedTime += ':00'

  return (
    <div {...props}>
      <h2 className="font-semibold text-white">
        {formattedTime} - {title}
      </h2>
      <p className="sm:text-sm md:text-base text-grey-300">{description}</p>
      <p className="py-3 text-tertiary-100 text-sm">{location}</p>
    </div>
  )
}
export default EventCard
export type { EventCardProps }
