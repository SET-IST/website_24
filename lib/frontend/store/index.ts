import { create } from 'zustand'
import { NavbarSlice, createNavbarSlice } from './navbar'
import { ProfileSlice, createProfileSlice } from './profile'
import { ActivitiesSlice, createActivitiesSlice } from './activities'

export const useBoundStore = create<
  NavbarSlice & ProfileSlice & ActivitiesSlice
>()((...a) => ({
  ...createNavbarSlice(...a),
  ...createProfileSlice(...a),
  ...createActivitiesSlice(...a),
}))
