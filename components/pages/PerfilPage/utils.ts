const transformInstitutionsToOptions = (institutions: any[]) =>
  institutions.map(({ nomeInstituicao }) => ({
    label: nomeInstituicao,
    value: nomeInstituicao,
  }))

const transformCvLocation = (location?: string) =>
  location ? location.split('/').splice(-1) : null

const transformCvLocationToUrl = (key: string) =>
  `${window.location.origin}/api/resources/cvs/${key}`

const getCourses = (institutions: any[], university?: string) => {
  return (
    institutions
      .find((i) => university === i.nomeInstituicao)
      ?.cursos.map((curso: { nomeCurso: any }) => ({
        value: curso.nomeCurso,
        label: curso.nomeCurso,
      })) || []
  )
}

export {
  transformInstitutionsToOptions,
  transformCvLocation,
  transformCvLocationToUrl,
  getCourses,
}
