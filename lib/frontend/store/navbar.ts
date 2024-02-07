import { randomId } from '@mantine/hooks'
import { StateCreator } from 'zustand'

enum LoginDialogType {
  Student = 'student',
  Company = 'company',
}

export interface NavbarSlice {
  loginDialogIsVisible: boolean
  loginDialogType: LoginDialogType
  loginDialogKey: string

  showLoginDialog: (show: boolean) => void
  setLoginDialogType: (type: string) => void
}

export const createNavbarSlice: StateCreator<
  NavbarSlice,
  [],
  [],
  NavbarSlice
> = (set) => ({
  loginDialogIsVisible: false,
  loginDialogType: LoginDialogType.Student,
  loginDialogKey: 'none',
  showLoginDialog: (show) => {
    if (show) {
      set({
        loginDialogIsVisible: true,
      })

      // UI bugfix, see:
      // https://github.com/mantinedev/mantine/issues/3330

      setTimeout(
        () =>
          set({
            loginDialogKey: randomId(),
          }),
        200
      )
    } else {
      set({
        loginDialogIsVisible: false,
        loginDialogKey: 'none',
      })
    }
  },
  setLoginDialogType: (type) =>
    set({
      loginDialogType: type as LoginDialogType,
    }),
})
