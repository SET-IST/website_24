import { DateTime } from 'luxon'
import { StateCreator } from 'zustand'

export interface ActivitiesSlice {
  selectedDate: string
  cvDialogVisible: boolean

  setSelectedDate: (date: string) => void
  showCVDialog: (show: boolean) => void
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
  cvDialogVisible: false,
  setSelectedDate: (date) =>
    set({
      selectedDate: date,
    }),
  showCVDialog: (show) =>
    set({
      cvDialogVisible: show,
    }),
})
