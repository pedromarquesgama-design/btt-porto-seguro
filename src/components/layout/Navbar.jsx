import { useEffect, useState } from 'react'
import { NAV_LINKS, MOBILE_LINKS } from '../../data/site.js'
import Button from '../ui/Button.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open ])

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 80
      let current = ''
      document.querySelectorAll('section[id]').forEach((s) => {
        if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) current = s.id
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[1000] h-16 border-b border-border bg-background/95 backdrop-blur-md max-sm:h-14" aria-label="Menu principal">
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4">
          <a href="#home" className="flex items-center leading-none" aria-label="Brazilian Top Team Porto Seguro – Início">
            <img src="/btt-logo.png" alt="Brazilian Top Team Porto Seguro" className="h-12 w-auto max-w-[200px] object-contain max-sm:h-9 md:h-14" />
          </a>

          <ul className="hidden gap-8 md:flex" role="list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative text-sm font-semibold uppercase tracking-[0.08em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                    active === l.href.slice(1) ? 'text-foreground after:w-full' : 'text-foreground-muted hover:text-foreground after:w-0 hover:after:w-full'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#contatos">Junte-se a Nós</Button>
          </div>

          <button
            className="flex flex-col gap-[5px] p-2 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-foreground transition-all ${open ? 'translate-x-[0px] translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-all ${open ? 'translate-x-[0px] translate-y-[-7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        className={`fixed inset-x-0 bottom-0 top-14 z-[999] flex flex-col items-center justify-center gap-4 overflow-y-auto bg-background/95 p-6 backdrop-blur-md transition-all md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {MOBILE_LINKS.map((l) => (
          <a
            key={l.href + l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-center font-display text-2xl uppercase tracking-[0.1em] text-foreground transition-colors hover:text-primary"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contatos"
          onClick={() => setOpen(false)}
          className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-sm border-2 border-primary bg-primary px-10 py-4 font-body text-base font-bold uppercase tracking-[0.1em] text-foreground"
        >
          Junte-se a Nós
        </a>
      </div>
    </>
  )
}
