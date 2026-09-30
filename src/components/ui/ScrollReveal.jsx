import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const transforms = {
  up: (d) => `translateY(${d}px)`,
  down: (d) => `translateY(-${d}px)`,
  left: (d) => `translateX(${d}px)`,
  right: (d) => `translateX(-${d}px)`,
  none: () => 'none',
}

function useReducedMotion() {
  const cache = useRef(null)
  if (cache.current === null) {
    cache.current = prefersReducedMotion()
  }
  return cache.current
}

/**
 * ScrollReveal — reveals wrapped content with a fade + slide entrance
 * when the element intersects the viewport (via IntersectionObserver).
 *
 * Respects `prefers-reduced-motion`: elements appear instantly when the
 * user has requested reduced animation.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  once = true,
  threshold = 0.1,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.disconnect()
          }
        })
      },
      { threshold, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold, reduced])

  const initialTransform = reduced
    ? 'none'
    : (transforms[direction] || transforms.up)(distance)

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-revealed' : ''} ${className}`.trim()}
      style={{
        '--reveal-transform': initialTransform,
        '--reveal-delay': `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
