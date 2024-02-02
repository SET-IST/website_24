import { ValidationPipe } from 'next-api-decorators'

export function RestrictedValidationPipe() {
  return ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  })
}
