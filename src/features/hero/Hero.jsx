import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../../components/ui/Button.jsx'

const SLIDES = [
  { id: 'kids-single', label: 'Slide 1 de 3' },
  { id: 'kids-split', label: 'Slide 2 de 3' },
  { id: 'master', label: 'Slide 3 de 3' },
]

function useHeroSlider(total) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const timer = useRef(null)
  const touchX = useRef(null)

  const goTo = useCallback(
    (index) => {
      const next = (index + total) % total
      setPrev((oldCurrent) => (oldCurrent === next ? oldCurrent : current))
      setCurrent(next)
    },
    [current, total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const previous = useCallback(() => goTo(current - 1), [current, goTo])

  const stop = useCallback(() => clearInterval(timer.current), [])
  const start = useCallback(() => {
    stop()
    timer.current = setInterval(() => {
      setCurrent((c) => {
        const n = (c + 1) % total
        setPrev(c)
        return n
      })
    }, 5000)
  }, [stop, total])

  useEffect(() => {
    start()
    const t = setTimeout(() => {
      if (!document.hidden) {
        setCurrent((c) => {
          const n = (c + 1) % total
          setPrev(c)
          return n
        })
        start()
      }
    }, 1800)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)
    return () => {
      stop()
      clearTimeout(t)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [start, stop, total])

  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), 700)
    return () => clearTimeout(t)
  }, [prev, current])

  return { current, prev, next: () => { stop(); next(); start() }, previous: () => { stop(); previous(); start() }, sliderRef: touchX, restart: start, stop }
}

function useHorizontalParallax(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const layers = Array.from(root.querySelectorAll('[data-parallax]'))
    if (!layers.length) return

    let raf = 0
    const update = () => {
      raf = 0
      const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight || 1)))
      const opacity = (1 - progress).toFixed(3)
      for (const el of layers) {
        const depth = parseFloat(el.dataset.parallax) || 0
        el.style.transform = `translate3d(${(progress * depth).toFixed(2)}px, 0, 0)`
        el.style.opacity = opacity
      }
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      for (const el of layers) {
        el.style.transform = ''
        el.style.opacity = ''
      }
    }
  }, [rootRef])
}

export default function Hero() {
  const { current, prev, next, previous } = useHeroSlider(SLIDES.length)
  const sliderRef = useRef(null)
  const contentRef = useRef(null)
  const touchStartX = useRef(null)
  const isMaster = current === SLIDES.length - 1
  useHorizontalParallax(contentRef)

  return (
    <section id="home" className="sticky top-0 z-0 block overflow-hidden pt-16 max-sm:pt-14" aria-label="Banner principal">
      <div
        ref={sliderRef}
        aria-live="polite"
        className="relative left-0 right-0 top-0 aspect-[2976/1430] min-h-[560px] max-w-full overflow-hidden max-sm:min-h-[min(520px,calc(100svh-56px))]"
        onTouchStart={(e) => {
          if (e.touches.length === 1) touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          touchStartX.current = null
          if (Math.abs(dx) < 40) return
          if (dx < 0) next()
          else previous()
        }}
      >
        {/* Slide 1 */}
        <div className={`hero-slide ${current === 0 ? 'is-active' : ''} ${prev === 0 ? 'is-prev' : ''}`} role="group" aria-label="Slide 1 de 3">
          <div className="hero-slide-inner">
            <div
              className="absolute inset-0 bg-[#1a1a1a] bg-cover bg-center bg-no-repeat max-sm:bg-cover max-sm:bg-top"
              style={{ backgroundImage: 'url(/hero-kids-1.jpg)' }}
              role="img"
              aria-label="Aulas infantis de jiu-jitsu na BTT Porto Seguro"
            />
            <div className="absolute inset-0 z-[2] bg-gradient-to-br from-black/60 via-black/20 to-transparent" />

          </div>
        </div>

        {/* Slide 2 */}
        <div className={`hero-slide ${current === 1 ? 'is-active' : ''} ${prev === 1 ? 'is-prev' : ''}`} role="group" aria-label="Slide 2 de 3">
          <div className="hero-slide-inner">
            <div className="absolute inset-0 flex flex-row overflow-hidden bg-[#1a1a1a] max-sm:flex-col max-sm:bg-[#0F0F12]" role="img" aria-label="Aulas infantis de jiu-jitsu na BTT Porto Seguro">
              <div className="min-h-full min-w-0 flex-1 bg-cover bg-center bg-no-repeat max-sm:hidden" style={{ backgroundImage: 'url(/hero-kids-3.jpg)', backgroundSize: '100% 100%' }} aria-hidden="true" />
              <div className="min-h-full min-w-0 flex-1 bg-cover bg-center bg-no-repeat max-sm:min-h-0 max-sm:flex-[1_1_100%] max-sm:bg-top" style={{ backgroundImage: 'url(/hero-kids-2.jpg)' }} aria-hidden="true" />
            </div>
            <div className="absolute inset-0 z-[2] bg-gradient-to-br from-black/60 via-black/20 to-transparent" />

          </div>
        </div>

        {/* Slide 3 */}
        <div className={`hero-slide ${current === 2 ? 'is-active' : ''} ${prev === 2 ? 'is-prev' : ''}`} role="group" aria-label="Slide 3 de 3">
          <div className="hero-slide-inner">
            <div
              className="absolute inset-0 bg-[#1a1a1a] bg-cover bg-no-repeat max-sm:bg-cover max-sm:bg-top min-[480px]:max-md:bg-[position:72%_top] max-sm:bg-[position:center_top] bg-[position:center_top]"
              style={{ backgroundImage: undefined }}
              role="img"
              aria-label="Mestre Eliandro Rodrigues, fundador da BTT Porto Seguro"
            >
              <picture>
                <source media="(max-width: 767px)" srcSet="/master-solo-mobile.jpg" />
                <img src="/master-solo.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover object-[center_top] max-sm:object-cover max-sm:object-[center_top]" />
              </picture>
            </div>
            <div className="absolute inset-0 z-[2] bg-gradient-to-br from-black/60 via-black/20 to-transparent" />

          </div>
        </div>

        {/* Fixed content layer */}
        <div ref={contentRef} className="absolute inset-0 z-[3] max-w-full overflow-hidden">
          <div className={`container hero-content-panel mx-auto w-full max-w-[1200px] px-4 pt-8 pb-[15vw] ${!isMaster ? 'is-active' : ''}`}>
            <span data-parallax="-70" className="mb-6 inline-block will-change-transform border border-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              BTT Porto Seguro
            </span>
            <h1 data-parallax="90" className="mb-4 will-change-transform font-display uppercase leading-[0.95] tracking-[0.03em] text-foreground text-[clamp(2.5rem,10vw,4.5rem)] md:text-[clamp(4rem,7vw,5.5rem)] xl:text-[clamp(4.5rem,6vw,6.5rem)]">
              Aulas
              <br />
              <span className="text-primary">Infantis</span>
            </h1>
            <p data-parallax="-45" className="mb-8 max-w-[480px] will-change-transform text-xl font-semibold text-white max-sm:max-w-full max-sm:text-base">
              Disciplina, Saúde e diversão para os pequenos! Aulas desenvolvidas para crianças a partir de 5 anos de idade.
            </p>
            <div data-parallax="60" className="flex will-change-transform flex-wrap gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
              <Button href="#contatos" size="lg" className="max-sm:w-full">
                Junte-se a Nós
              </Button>
              <Button href="#modalidades" variant="outline" size="lg" className="max-sm:w-full">
                Conheça as Modalidades
              </Button>
            </div>
          </div>

          <div className={`container hero-content-panel hero-content-panel--master mx-auto w-full max-w-[1200px] px-4 pt-8 pb-[17vw] ${isMaster ? 'is-active' : ''}`}>
            <h1 data-parallax="90" className="mb-4 will-change-transform font-display uppercase leading-[0.95] tracking-[0.03em] text-foreground text-[clamp(2.25rem,8vw,4.75rem)]">
              Aprenda com
              <br />
              os Melhores
              <br />
              <span className="text-primary">Mestres</span>
            </h1>
            <p data-parallax="-45" className="mb-8 max-w-[480px] will-change-transform text-xl font-semibold text-white max-sm:max-w-full max-sm:text-base">
              Supere seus limites, desenvolva sua técnica e seja parte de uma equipe vencedora.
            </p>
            <div data-parallax="60" className="flex will-change-transform flex-wrap gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
              <Button href="#contatos" size="lg" className="max-sm:w-full">
                Junte-se a Nós
              </Button>
              <Button href="#tradicao-metodologia" variant="outline" size="lg" className="max-sm:w-full">
                Tradição e Metodologia
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button onClick={previous} className="absolute top-1/2 z-[4] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary sm:flex left-4" aria-label="Slide anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button onClick={next} className="absolute top-1/2 z-[4] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary sm:flex right-4" aria-label="Próximo slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
    </section>
  )
}
