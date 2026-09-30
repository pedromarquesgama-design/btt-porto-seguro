import { MODALIDADES } from '../../data/site.js'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

export default function Classes() {
  return (
    <section id="modalidades" className="bg-background-alt py-16 pt-0" aria-labelledby="modalidades-title">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <ScrollReveal direction="up" delay={0}>
          <h2 id="modalidades-title" className="text-center font-display text-5xl uppercase tracking-[0.05em] text-foreground max-sm:text-4xl">
            Modalidades
          </h2>
          <p className="mb-10 mt-2 text-center text-lg text-foreground-muted max-sm:text-base">
            Conheça nossas modalidades e escolha a sua
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-10 sm:grid-cols-2">
          {MODALIDADES.map((m, i) => (
            <ScrollReveal key={m.title + m.subtitle} direction="up" delay={100 + i * 100}>
              <div className="flex h-full flex-col">
              <article className="group relative shrink-0 overflow-hidden rounded-lg border border-gold/55 bg-transparent transition-all duration-250 hover:-translate-y-1 hover:border-gold hover:shadow-[0_12px_32px_rgba(245,158,11,0.18)]">
                <div className={`relative h-[260px] overflow-hidden ${m.contain ? 'bg-white' : 'bg-surface-2'}`}>
                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    className={`block h-full w-full ${
                      m.contain
                        ? 'bg-white object-contain transition-transform duration-500 scale-[1.75] group-hover:scale-[1.85]'
                        : `object-cover ${m.objectTop ? 'object-[center_top]' : 'object-center'}`
                    }`}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-4 pt-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                  <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-foreground">{m.title}</h3>
                  <div className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">{m.subtitle}</div>
                </div>
              </article>
              <div className="mt-4 flex flex-1 items-end">
                <WhatsAppCTA
                  variant={i}
                  className="w-full"
                  aria-label={`Fale pelo WhatsApp: ${m.title} ${m.subtitle}`}
                />
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
