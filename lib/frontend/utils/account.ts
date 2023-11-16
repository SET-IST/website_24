export function displayName(name?: string): string {
  if (!name) return 'undefined'

  const names = name.split(' ')
  return `${names[0]} ${names[names.length - 1]}`
}
