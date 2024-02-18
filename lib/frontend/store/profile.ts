import { StateCreator } from 'zustand'
import { ScannedCompany } from '../api'

export interface ProfileSlice {
  profileSettingsVisible: boolean
  scanModalVisible: boolean
  redeemModalVisible: boolean
  tcModalVisible: boolean

  selectedCompany?: ScannedCompany

  showSettings: (show: boolean) => void
  showScanModal: (show: boolean) => void
  showRedeemModal: (show: boolean) => void
  showTermsAndConditionsModal: (show: boolean) => void
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
  scanModalVisible: false,
  redeemModalVisible: false,
  tcModalVisible: false,
  showSettings: (show) =>
    set({
      profileSettingsVisible: show,
    }),
  showScanModal: (show) =>
    set({
      scanModalVisible: show,
    }),
  showRedeemModal: (show) =>
    set({
      redeemModalVisible: show,
    }),
  selectCompany: (company) =>
    set({
      selectedCompany: company,
    }),
  showTermsAndConditionsModal: (show) =>
    set({
      tcModalVisible: show,
    }),
})
