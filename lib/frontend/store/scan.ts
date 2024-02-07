import { StateCreator } from 'zustand'

export interface ScanSlice {
  scanModalVisible: boolean

  showScanModal: (show: boolean) => void
}

export const createScanSlice: StateCreator<ScanSlice, [], [], ScanSlice> = (
  set
) => ({
  scanModalVisible: false,
  showScanModal: (show) =>
    set({
      scanModalVisible: show,
    }),
})
