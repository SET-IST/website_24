import { Button } from '@/core/components/Button'
import { useModal } from '@/core/components/modal-context'
import { Event } from '@/core/services/api/schedule'
import dynamic from 'next/dynamic'
import EventCard from '../EventCard'
const ScannerModal = dynamic(() => import('../ScannerModal'), { ssr: false })

type DailyScheduleProps = {
  oradores: Event[]
  workshops: Event[]
  atividades: Event[]
}

const DailySchedule = ({
  oradores,
  workshops,
  atividades,
}: DailyScheduleProps) => {
  const { setModal } = useModal()
  return (
    <>
      <Button onClick={() => setModal(<ScannerModal />)} className="my-3">
        Registar presença
      </Button>
      <h1 className="py-4 text-2xl md:text-2xl font-sans font-semibold text-secondary-500">
        Oradores
      </h1>
      <ul>
        {oradores.map((event) => (
          <li key={event.id}>
            <EventCard
              title={event.title}
              description={event.description}
              location={event.location}
              start={event.start}
              end={event.end}
              type={event.type}
            />
          </li>
        ))}
      </ul>
      {workshops.length > 0 && (
        <h1 className="py-4 text-2xl md:text-2xl font-sans font-semibold text-secondary-500">
          Workshops
        </h1>
      )}
      <ul>
        {workshops.map((event) => (
          <li key={event.id}>
            <EventCard
              title={event.title}
              description={event.description}
              location={event.location}
              start={event.start}
              end={event.end}
              type={event.type}
            />
          </li>
        ))}
      </ul>
      <h1 className="py-4 text-2xl md:text-2xl font-sans font-semibold text-secondary-500">
        Atividades
      </h1>
      <ul>
        {atividades.map((event) => (
          <li key={event.id}>
            <EventCard
              title={event.title}
              description={event.description}
              location={event.location}
              start={event.start}
              end={event.end}
              type={event.type}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

DailySchedule.displayName = 'DailySchedule'

export default DailySchedule
export type { DailyScheduleProps }
