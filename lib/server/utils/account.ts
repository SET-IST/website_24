export function displayName(name?: string): string {
  if (!name) return 'Estudante'

  const names = name.split(' ')
  return names.length > 1 ? `${names[0]} ${names[names.length - 1]}` : names[0]
}
