import { create } from 'zustand'
import { NavbarSlice, createNavbarSlice } from './navbar'
import { ProfileSlice, createProfileSlice } from './profile'
import { ScanSlice, createScanSlice } from './scan'

export const useBoundStore = create<NavbarSlice & ProfileSlice & ScanSlice>()(
  (...a) => ({
    ...createNavbarSlice(...a),
    ...createProfileSlice(...a),
    ...createScanSlice(...a),
  })
)
