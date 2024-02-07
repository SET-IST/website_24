import { create } from 'zustand'
import { NavbarSlice, createNavbarSlice } from './navbar'
import { ProfileSlice, createProfileSlice } from './profile'
import { ScanSlice, createScanSlice } from './scan'
import { ActivitiesSlice, createActivitiesSlice } from './activities'

export const useBoundStore = create<
  NavbarSlice & ProfileSlice & ScanSlice & ActivitiesSlice
>()((...a) => ({
  ...createNavbarSlice(...a),
  ...createProfileSlice(...a),
  ...createScanSlice(...a),
  ...createActivitiesSlice(...a),
}))
