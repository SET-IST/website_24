import { signUp } from '@/core/services/api/auth'
import { useMutation } from '@tanstack/react-query'
//  Services
import { signIn } from 'next-auth/react'

type SigninRequest = {
  csrfToken: string
  username: string
  password: string
}

type SignupRequest = {
  csrfToken: string
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
  categoryId: number
  code: string
}

const useAuth = () => {
  const {
    mutateAsync: signinMutateAsync,
    isLoading: isSigninLoading,
    isSuccess: isSigninSuccess,
    isError: isSigninError,
  } = useMutation({
    mutationFn: (payload: SigninRequest) =>
      signIn('credentials', { ...payload }),
  })

  const {
    mutateAsync: signupMutateAsync,
    isLoading: isSignupLoading,
    isSuccess: isSignupSuccess,
    isError: isSignupError,
  } = useMutation({
    mutationFn: (payload: SignupRequest) =>
      signUp(payload).then(() =>
        signIn('credentials', {
          username: payload.username,
          password: payload.password,
        })
      ),
  })

  const signinWithCredentials = (payload: SigninRequest) => {
    return signinMutateAsync(payload)
  }

  const signupWithCredentials = (payload: SignupRequest) => {
    return signupMutateAsync(payload)
  }

  return {
    signinWithCredentials,
    signupWithCredentials,
    isSigninLoading,
    isSigninError,
    isSigninSuccess,
    isSignupLoading,
    isSignupError,
    isSignupSuccess,
  }
}

export { useAuth }
export type { SigninRequest }
