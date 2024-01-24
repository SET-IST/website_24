import { create } from 'zustand'
import { NavbarSlice, createNavbarSlice } from './navbar'
import { ProfileSlice, createProfileSlice } from './profile'

export const useBoundStore = create<NavbarSlice & ProfileSlice>()((...a) => ({
  ...createNavbarSlice(...a),
  ...createProfileSlice(...a),
}))

