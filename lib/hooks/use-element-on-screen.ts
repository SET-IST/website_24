import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

type UseElementOnScreenProps = {
  ref: RefObject<Element>
  rootMargin?: string
  threshold?: number | number[]
}

const useElementOnScreen = ({
  ref,
  rootMargin = '0px',
  threshold = 0,
}: UseElementOnScreenProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.bottom > window.innerHeight / 4
        )
          setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin, threshold }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return isIntersecting
}

export { useElementOnScreen }
export type { UseElementOnScreenProps }
