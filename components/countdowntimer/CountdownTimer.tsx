import cn from 'classnames'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
//  Components
import NumberContainer from './NumberContainer'

type CountdownTimerProps = {
  deadline: DateTime
  className?: string
}

type TimeLeft = {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}

const CountdownTimer = ({ deadline, className }: CountdownTimerProps) => {
  const [isExpired, setIsExpired] = useState(
    deadline.diffNow().milliseconds < 0
  )
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const distance = deadline.diffNow(['days', 'hours', 'minutes', 'second'])

      if (distance.valueOf() < 0) {
        clearInterval(intervalId)
        setIsExpired(true)
        return
      }

      const days = distance.days
      const hours = distance.hours
      const minutes = distance.minutes
      const seconds = distance.seconds.toFixed(0)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [deadline])

  return !isExpired ? (
    <div
      className={cn('flex justify-around flex-wrap mb-5', className)}
      aria-atomic="true"
      aria-live="polite"
    >
      <NumberContainer
        number={timeLeft.days}
        label={`${timeLeft.days === 1 ? 'Dia' : 'Dias'}`}
      />
      <NumberContainer
        number={timeLeft.hours}
        label={`${timeLeft.hours === 1 ? 'Hora' : 'Horas'}`}
      />
      <NumberContainer
        number={timeLeft.minutes}
        label={`${timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}`}
      />
      <NumberContainer
        number={timeLeft.seconds}
        label={`${timeLeft.seconds === 1 ? 'Segundo' : 'Segundos'}`}
      />
    </div>
  ) : null
}

export default CountdownTimer
export type { CountdownTimerProps }
