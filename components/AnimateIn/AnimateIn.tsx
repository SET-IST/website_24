import { useRef } from 'react'
//  Hooks
import { useElementOnScreen } from '@/lib/frontend/hooks/use-element-on-screen'
//  Types
import type { CSSProperties, PropsWithChildren } from 'react'

type AnimateInProps = PropsWithChildren<{
  from: CSSProperties
  to: CSSProperties
  rootMargin?: string
  threshold?: number | number[]
  className?: string
}>

const AnimateIn = ({
  from,
  to,
  children,
  rootMargin,
  threshold,
  ...props
}: AnimateInProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const onScreen = useElementOnScreen({ ref, rootMargin, threshold })
  const defaultStyles: CSSProperties = {
    transition: '600ms ease-in-out',
  }
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
      {...props}
    >
      {children}
    </div>
  )
}

type AnimateProps = PropsWithChildren & {
  rootMargin?: string
  threshold?: number | number[]
  className?: string
}

const FadeIn = ({ children, ...props }: AnimateProps) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }} {...props}>
    {children}
  </AnimateIn>
)
const FadeUp = ({ children, ...props }: AnimateProps) => (
  <AnimateIn
    from={{ opacity: 0, translate: '0 2rem' }}
    to={{ opacity: 1, translate: 'none' }}
    {...props}
  >
    {children}
  </AnimateIn>
)

const FadeDown = ({ children, ...props }: AnimateProps) => (
  <AnimateIn
    from={{ opacity: 0, translate: '0 -2rem' }}
    to={{ opacity: 1, translate: 'none' }}
    {...props}
  >
    {children}
  </AnimateIn>
)

const FadeLeft = ({ children, ...props }: AnimateProps) => (
  <AnimateIn
    from={{ opacity: 0, translate: '-2rem 0' }}
    to={{ opacity: 1, translate: 'none' }}
    {...props}
  >
    {children}
  </AnimateIn>
)

const FadeRight = ({ children, ...props }: AnimateProps) => (
  <AnimateIn
    from={{ opacity: 0, translate: '2rem 0' }}
    to={{ opacity: 1, translate: 'none' }}
    {...props}
  >
    {children}
  </AnimateIn>
)

const ScaleIn = ({ children, ...props }: AnimateProps) => (
  <AnimateIn from={{ scale: '0' }} to={{ scale: '1' }} {...props}>
    {children}
  </AnimateIn>
)

export const Animate = {
  FadeIn,
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  ScaleIn,
}
export type { AnimateInProps, AnimateProps }
