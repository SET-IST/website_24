/* For Tecnico Fenix API */

export interface FenixRegistration {
  name: string
  acronym: string
  id: string
  academicTerms: string[]
}

export interface Department {
  name: string
  acronym: string
}

export interface Role {
  type: 'STUDENT' | 'TEACHER' | 'ALUMNI'
  registrations?: FenixRegistration[]
  concludedRegistrations?: FenixRegistration[]
  department?: Department
}
