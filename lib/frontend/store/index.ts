import { create } from 'zustand'
import { NavbarSlice, createNavbarSlice } from './navbar'

export const useBoundStore = create<NavbarSlice>()((...a) => ({
  ...createNavbarSlice(...a),
}))
