import { instituitions } from '@/data/courses'

export function getInstitutions() {
  return Object.values(instituitions).map((institution) => ({
    code: institution.code,
    name: institution.name,
  }))
}

export function getCourses(instituitionCode: string) {
  return Object.values(instituitions[instituitionCode].courses).map(
    (course) => ({
      code: course.code,
      name: course.name,
    })
  )
}
