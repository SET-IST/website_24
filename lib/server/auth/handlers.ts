import { TokenSet } from 'next-auth'
import { TokenEndpointHandler } from 'next-auth/providers'
import { FenixRegistration, Role } from './types'
import * as CompanyService from '@/lib/server/services/company'
import { CompanyLoginRequest } from '../services/company/dtos'

const FENIX_ACCESS_TOKEN_ENDPOINT =
  'https://fenix.tecnico.ulisboa.pt/oauth/access_token'

function getMostRecentRegistration(registrations?: FenixRegistration[]) {
  if (!registrations) return
  if (registrations.length == 0) return

  const sortedRegistrations = registrations.sort(
    (a, b) => parseInt(a.id) - parseInt(b.id)
  )

  return sortedRegistrations[0]
}

function getFenixCourse(roles: Role[]) {
  const teacherRole = roles.find((role) => role.type === 'TEACHER')
  const studentRole = roles.find((role) => role.type === 'STUDENT')
  const alumniRole = roles.find((role) => role.type === 'ALUMNI')

  // Get most recent registration, if any
  let mostRecentRegistration = undefined
  const studentRegistration = getMostRecentRegistration(
    studentRole?.registrations
  )
  const alumniRegistration = getMostRecentRegistration(
    alumniRole?.concludedRegistrations
  )

  if (studentRegistration && alumniRegistration) {
    mostRecentRegistration =
      parseInt(studentRegistration.id) > parseInt(alumniRegistration.id)
        ? studentRegistration
        : alumniRegistration
  } else {
    mostRecentRegistration = studentRegistration ?? alumniRegistration
  }

  if (teacherRole && !mostRecentRegistration) {
    return teacherRole.department?.name
  }

  mostRecentRegistration = mostRecentRegistration?.name ?? 'Unknown course'

  return mostRecentRegistration
}

/* Fenix Handlers */

export const FenixAccessTokenHandler: TokenEndpointHandler = {
  url: FENIX_ACCESS_TOKEN_ENDPOINT,
  async request(context) {
    if (!context.params.code) throw new Error('Fenix OAuth Error: Missing code')

    const authCode = context.params.code
    const tokenRequestUrl = new URL(FENIX_ACCESS_TOKEN_ENDPOINT)

    tokenRequestUrl.searchParams.append('client_id', process.env.FENIX_ID!)
    tokenRequestUrl.searchParams.append(
      'client_secret',
      process.env.FENIX_SECRET!
    )
    tokenRequestUrl.searchParams.append('redirect_uri', process.env.FENIX_URL!)
    tokenRequestUrl.searchParams.append('code', authCode)
    tokenRequestUrl.searchParams.append('grant_type', 'authorization_code')

    // Request access token
    const response = await fetch(tokenRequestUrl, {
      method: 'POST',
      mode: 'cors',
    })

    if (!response.ok)
      throw new Error(`Fenix OAuth Error: ${response.statusText}`)

    // Decode response
    const json = await response.json()

    const tokens = {
      access_token: json['access_token'],
      refresh_token: json['refresh_token'],
    }

    return { tokens }
  },
}

export const FenixProfileHandler: any = (profile: any, tokens: TokenSet) => {
  return {
    id: profile.username,
    name: profile.name,
    email: profile.email,
    studentDetails: {
      create: {
        university:
          profile.campus === 'Taguspark'
            ? 'Universidade de Lisboa - Instituto Superior T\u00e9cnico (Tagus Park)'
            : 'Universidade de Lisboa - Instituto Superior T\u00e9cnico',
        course: getFenixCourse(profile.roles),
      },
    },
  }
}

/* Google Handlers */

export const GoogleProfileHandler: any = (profile: any, tokens: TokenSet) => {
  return {
    id: profile.sub,
    name: profile.name,
    email: profile.email,
    studentDetails: {
      create: {
        university: '',
        course: '',
      },
    },
  }
}

/* Credentials Handlers */

export const CredentialsAuthorizationHandler = async (credentials: any) => {
  const loginData = credentials as {
    username: string
    password: string
  }

  const req = new CompanyLoginRequest()
  req.username = loginData.username
  req.password = loginData.password

  const response = await CompanyService.login(req)

  if (!response) {
    return null
  }

  return response
}
