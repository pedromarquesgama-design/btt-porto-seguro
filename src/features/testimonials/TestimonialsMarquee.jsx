import { useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../../data/site.js'
import TestimonialCard from '../../components/ui/TestimonialCard.jsx'

const SETS = [0, 1, 2, 3]
const BASE_SPEED = 70 // px/s auto-scroll
const RESUME_DELAY = 1800 // ms after release before auto-scroll fades back in
const FLING_FRICTION = 3 // exponential decay rate
const MAX_FLING = 2000 // px/s clamp

const wrap = (v, len) => ((v % len) + len) % len

export default function TestimonialsMarquee() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const offset = useRef(0)
  const loopLen = useRef(1)
  const autoSpeed = useRef(BASE_SPEED)
  const velocity = useRef(0)
  const resumeAt = useRef(0)
  const drag = useRef({ active: false, pointerId: null, lastX: 0, moves: [] })
  const [dragging, setDragging] = useState(false)

  // Measure one set width (track holds SETS.length identical sets)
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (track && track.scrollWidth > 0) {
        loopLen.current = track.scrollWidth / SETS.length
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {})
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Animation loop: single source of truth for position
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const base = reduced ? 0 : BASE_SPEED
    autoSpeed.current = base
    let raf = 0
    let last = performance.now()
    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!drag.current.active) {
        // Decay fling velocity
        velocity.current *= Math.exp(-FLING_FRICTION * dt)
        if (Math.abs(velocity.current) < 1) velocity.current = 0
        // Ease auto-scroll back in after interaction
        const target = now >= resumeAt.current ? base : 0
        const rate = now >= resumeAt.current ? 1.5 : 6
        autoSpeed.current += (target - autoSpeed.current) * Math.min(rate * dt, 1)
        offset.current = wrap(offset.current + (autoSpeed.current + velocity.current) * dt, loopLen.current)
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`
        }
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onPointerDown = (e) => {
    if (drag.current.active || (e.pointerType === 'mouse' && e.button !== 0)) return
    drag.current = { active: true, pointerId: e.pointerId, lastX: e.clientX, moves: [] }
    velocity.current = 0
    autoSpeed.current = 0
    setDragging(true)
    viewportRef.current?.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e) => {
    const d = drag.current
    if (!d.active || e.pointerId !== d.pointerId) return
    const dx = e.clientX - d.lastX
    d.lastX = e.clientX
    offset.current = wrap(offset.current - dx, loopLen.current)
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`
    }
    const now = performance.now()
    d.moves.push({ x: e.clientX, t: now })
    while (d.moves.length > 2 && now - d.moves[0].t > 120) d.moves.shift()
  }
  const endDrag = (e) => {
    const d = drag.current
    if (!d.active || (e.pointerId !== undefined && e.pointerId !== d.pointerId)) return
    // Fling from recent movement
    if (d.moves.length >= 2) {
      const first = d.moves[0]
      const lastMove = d.moves[d.moves.length - 1]
      const dt = (lastMove.t - first.t) / 1000
      if (dt > 0.01) {
        velocity.current = Math.max(-MAX_FLING, Math.min(MAX_FLING, -(lastMove.x - first.x) / dt))
      }
    }
    d.active = false
    d.pointerId = null
    resumeAt.current = performance.now() + RESUME_DELAY
    setDragging(false)
  }

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const step = 336 // approx one card
    offset.current = wrap(offset.current + (e.key === 'ArrowLeft' ? -step : step), loopLen.current)
    velocity.current = 0
    resumeAt.current = performance.now() + RESUME_DELAY
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`
    }
  }

  return (
    <section className="relative z-[3] bg-transparent pb-6 pt-6 text-foreground sm:pb-8" aria-label="Depoimentos de alunos">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div
          ref={viewportRef}
          role="region"
          aria-label="Depoimentos de alunos — arraste para o lado para navegar"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className={
            'flex w-full flex-row gap-4 overflow-hidden p-2 [touch-action:pan-y] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ' +
            (dragging ? 'cursor-grabbing select-none' : 'cursor-grab')
          }
        >
          <div ref={trackRef} className="flex w-max shrink-0 flex-row justify-around gap-4 will-change-transform">
            {SETS.flatMap((s) =>
              TESTIMONIALS.map((t) => <TestimonialCard key={`${s}-${t.name}`} name={t.name} text={t.text} />),
            )}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background to-transparent sm:block" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background to-transparent sm:block" aria-hidden="true" />
      </div>
    </section>
  )
}
