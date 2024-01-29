import { StateCreator } from 'zustand'
import { CompanyScan, ScannedCompany } from '../api'

export interface ProfileSlice {
  profileSettingsVisible: boolean
  selectedCompany?: ScannedCompany

  showSettings: (show: boolean) => void
  selectCompany: (company: ScannedCompany) => void
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
