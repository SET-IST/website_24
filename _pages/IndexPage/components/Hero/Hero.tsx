import { Title, Text, Container } from '@mantine/core'
import classNames from 'classnames'
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div>
      <div className="h-screen relative overflow-hidden bg-cover bg-no-repeat bg-[url('/img/feira.webp')] flex flex-col items-center justify-center">
        <h1
          className={classNames(
            'text-white font-poppins font-bold text-center my-10 text-4xl',
            'md:text-6xl md:leading-relaxed',
            'lg:text-[60px] lg:leading-[100px] lg:tracking-[0.035em]'
          )}
        >
          Semana Empresarial e <br />
          Tecnológica
        </h1>

        <Container p={0} size={600}>
          <Text size="lg" c="gray.0">
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>
      </div>
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>
    </div>
  )
}
