import { StateCreator } from 'zustand'

export interface StaffSlice {
  staffScanModalVisible: boolean

  showStaffScanModal: (show: boolean) => void
}

export const createStaffSlice: StateCreator<StaffSlice, [], [], StaffSlice> = (
  set
) => ({
  staffScanModalVisible: false,
  showStaffScanModal: (show) =>
    set({
      staffScanModalVisible: show,
    }),
})
