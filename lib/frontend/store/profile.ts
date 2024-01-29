import { StateCreator } from 'zustand'
import { CompanyScan } from '../api'

export interface ProfileSlice {
  profileSettingsVisible: boolean
  selectedCompany?: CompanyScan

  showSettings: (show: boolean) => void
  selectCompany: (company: CompanyScan) => void
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
