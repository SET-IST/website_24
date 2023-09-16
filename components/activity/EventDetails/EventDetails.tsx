type EventDetailsProps = {
    title: string
    description: string
    time:string
    location:string
}

const EventDetails = ({title, description, time, location}: EventDetailsProps) => {
    return (
        <div>
                <h2 className="py-2 text-2xl md:text-xl">{title}</h2>
                <p className="sm:text-sm md:text-base">{description}</p>
                <p className="text-sm">{time}</p>
                <p className="text-sm">{location}</p>
        </div>
    )
}

export default EventDetails
export type { EventDetailsProps }
