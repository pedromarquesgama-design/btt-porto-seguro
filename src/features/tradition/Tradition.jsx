import { MASTERS } from '../../data/site.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

function MasterCard({ master }) {
  const isGold = master.variant === 'gold'
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-lg border bg-surface transition-all duration-250 hover:-translate-y-1 ${
        master.featured
          ? 'border-gold shadow-[inset_0_0_0_1px_rgba(245,158,11,0.25)] hover:border-gold-light hover:shadow-[0_16px_40px_rgba(245,158,11,0.25)]'
          : 'border-primary/60 hover:border-primary hover:shadow-[0_16px_40px_rgba(220,38,38,0.18)]'
      }`}
    >
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-surface-2 md:aspect-square">
        <img
          src={master.image}
          alt={master.alt}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {master.featured && (
          <div className="absolute left-4 top-4 z-[2] inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-gold to-gold-light px-3 py-2 font-display text-sm uppercase tracking-[0.1em] text-[#1a1a1a] shadow-[0_4px_12px_rgba(245,158,11,0.4)]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2l2.39 7.36H22l-6.18 4.5L18.18 21 12 16.27 5.82 21l2.36-7.14L2 9.36h7.61z" />
            </svg>
            <span>Seu Professor</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className={`text-sm font-bold uppercase tracking-[0.1em] ${isGold ? 'text-gold' : 'text-primary'}`}>{master.eyebrow}</span>
        <h3 className="font-display text-3xl uppercase leading-tight tracking-[0.04em] text-foreground max-md:whitespace-nowrap max-md:text-[clamp(1.15rem,5.6vw,1.875rem)]">
          {master.name.map((line, i) => (
            <span key={i}>
              {line}
              {i < master.name.length - 1 && <br className="max-md:hidden" />}
              {i < master.name.length - 1 && <span className="md:hidden"> </span>}
            </span>
          ))}
        </h3>
        <p className="flex-1 text-base leading-relaxed text-foreground-muted">{master.description}</p>
        <p
          className={`rounded-r-sm border-l-[3px] px-4 py-3 text-sm leading-relaxed text-foreground ${
            isGold ? 'border-gold bg-gold/10' : 'border-primary bg-surface-2'
          }`}
        >
          <strong>{master.note}</strong>
        </p>
        <ul className="mt-2 flex flex-wrap gap-2" role="list">
          {master.badges.map((b) => (
            <li key={b}>
              <span
                className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] transition-all ${
                  isGold
                    ? 'border-gold/30 bg-gold/10 text-gold'
                    : 'border-primary/35 bg-primary/10 text-primary'
                }`}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Tradition() {
  return (
    <section id="tradicao-metodologia" className="relative overflow-hidden bg-background-alt py-16 pb-2" aria-labelledby="tradicao-metodo-title">
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-gold" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <ScrollReveal direction="up" delay={0}>
          <h2 id="tradicao-metodo-title" className="text-center font-display text-5xl uppercase tracking-[0.05em] text-foreground max-sm:text-4xl">
            Tradição e <span className="text-primary">Metodologia</span>
          </h2>
          <p className="mb-10 mt-2 text-center text-lg text-foreground-muted max-sm:text-base">
            Quem está por trás da nossa metodologia — fundadores lendários e o professor que te ensina no dia a dia
          </p>
        </ScrollReveal>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          {MASTERS.map((m, i) => (
            <ScrollReveal key={m.id} direction="up" delay={200 + i * 100}>
              <MasterCard master={m} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
