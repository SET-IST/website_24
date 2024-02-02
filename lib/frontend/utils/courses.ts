import { Course, Instituition, instituitions } from '@/data/courses'

export function getInstitution(
  instituitionCode?: string | null
): Instituition | undefined {
  if (
    !instituitionCode ||
    !Object.keys(instituitions).includes(instituitionCode)
  )
    return undefined
  return instituitions[instituitionCode]
}

export function getCourse(
  instituitionCode?: string,
  courseCode?: string
): Course | undefined {
  if (
    !instituitionCode ||
    !courseCode ||
    !Object.keys(instituitions).includes(instituitionCode) ||
    !Object.keys(instituitions[instituitionCode].courses).includes(courseCode)
  )
    return undefined

  return instituitions[instituitionCode].courses[courseCode]
}
