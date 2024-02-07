import { DateTime } from 'luxon'
import { StateCreator } from 'zustand'

export interface ActivitiesSlice {
  selectedDate: string

  setSelectedDate: (date: string) => void
}

export const createActivitiesSlice: StateCreator<
  ActivitiesSlice,
  [],
  [],
  ActivitiesSlice
> = (set) => ({
  selectedDate:
    (DateTime.fromISO('2024-02-26') <= DateTime.now() &&
    DateTime.now().startOf('day') <= DateTime.fromISO('2024-02-29')
      ? DateTime.now().startOf('day').toISODate()
      : '2024-02-26') ?? '2024-02-26',
  setSelectedDate: (date) =>
    set({
      selectedDate: date,
    }),
})
