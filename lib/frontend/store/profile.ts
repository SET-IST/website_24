import { StateCreator } from 'zustand'
import { CompanyScan, RemoveScanData } from '../api'

export interface ProfileSlice {
  profileSettingsVisible: boolean
  selectedCompany?: RemoveScanData<CompanyScan>

  showSettings: (show: boolean) => void
  selectCompany: (company: RemoveScanData<CompanyScan>) => void
}

export const createProfileSlice: StateCreator<
  ProfileSlice,
  [],
  [],
  ProfileSlice
> = (set) => ({
  profileSettingsVisible: false,
  selectedCompany: undefined,
  showSettings: (show) =>
    set({
      profileSettingsVisible: show,
    }),
  selectCompany: (company) =>
    set({
      selectedCompany: company,
    }),
})
