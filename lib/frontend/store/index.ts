import { create } from 'zustand'
import { NavbarSlice, createNavbarSlice } from './navbar'
import { ProfileSlice, createProfileSlice } from './profile'
import { ActivitiesSlice, createActivitiesSlice } from './activities'
import { StaffSlice, createStaffSlice } from './staff'

export const useBoundStore = create<
  NavbarSlice & ProfileSlice & ActivitiesSlice & StaffSlice
>()((...a) => ({
  ...createNavbarSlice(...a),
  ...createProfileSlice(...a),
  ...createActivitiesSlice(...a),
  ...createStaffSlice(...a),
}))
