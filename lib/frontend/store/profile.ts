
import { StateCreator } from 'zustand'


export interface ProfileSlice {
  profileSettingsVisible: boolean

  showSettings: (show: boolean) => void

}

export const createProfileSlice: StateCreator<
  ProfileSlice,
  [],
  [],
  ProfileSlice
> = (set) => ({
    profileSettingsVisible: false,
  showSettings: (show) =>
    set({
        profileSettingsVisible: show,
    }),
})


