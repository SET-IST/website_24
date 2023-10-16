export function displayName(name: string): string {
  const names = name.split(' ')
  return `${names[0]} ${names[names.length - 1]}`
}
