import { useState } from 'react'
import { FAQS } from '../../data/site.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="bg-background py-16 pt-0" aria-labelledby="faq-title">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <ScrollReveal direction="up" delay={0}>
          <h2 id="faq-title" className="text-center font-display text-5xl uppercase tracking-[0.05em] text-foreground max-sm:text-4xl">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="mb-10 mt-2 text-center text-lg text-foreground-muted max-sm:text-base">Tire suas dúvidas sobre a academia</p>
        </ScrollReveal>

        <div className="mx-auto max-w-[800px]" role="list">
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <ScrollReveal key={item.question} direction="up" delay={100 + i * 100}>
                <div className="border-b border-border" role="listitem">
                  <button
                    className="flex w-full items-center justify-between gap-4 bg-transparent py-5 text-left text-lg font-semibold text-foreground transition-colors hover:text-primary max-sm:py-4 max-sm:text-base"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {item.question}
                    <span className={`relative h-6 w-6 shrink-0 transition-transform duration-250 ${open ? 'rotate-45' : ''}`} aria-hidden="true">
                      <span className="absolute left-1/2 top-1/2 h-0.5 w-[14px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-[14px] w-0.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-[max-height] duration-500 ${open ? 'max-h-[400px]' : 'max-h-0'}`} aria-hidden={!open}>
                    <div className="pb-5 text-base leading-loose text-foreground-muted">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
