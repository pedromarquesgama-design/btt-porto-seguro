import { CONTACT } from '../../data/site.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'

export default function Contact() {
  return (
    <section id="contatos" className="relative overflow-hidden bg-background-alt py-16" aria-labelledby="contatos-title">
      <div className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[80%] w-1/2 bg-[radial-gradient(ellipse,rgba(220,38,38,0.12)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[800px] px-4">
        <ScrollReveal direction="up" delay={0}>
          <h2 id="contatos-title" className="text-center font-display text-5xl uppercase tracking-[0.05em] text-foreground max-sm:text-4xl">
            Contatos
          </h2>
          <p className="mb-10 mt-2 text-center text-lg text-foreground-muted max-sm:text-base">Fale conosco ou venha nos visitar</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-8 max-sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-background max-sm:h-10 max-sm:w-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-xs uppercase tracking-[0.15em] text-foreground-muted">Endereço</div>
                <div className="text-base font-semibold text-foreground">
                  {CONTACT.address[0]}
                  <br />
                  {CONTACT.address[1]}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-background max-sm:h-10 max-sm:w-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-primary">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-xs uppercase tracking-[0.15em] text-foreground-muted">Instagram</div>
                <div className="text-base font-semibold text-foreground">
                  <a href={CONTACT.instagram.href} target="_blank" rel="noopener noreferrer" className="text-primary transition-colors hover:text-secondary" aria-label="Siga-nos no Instagram @btt_bahia">
                    {CONTACT.instagram.handle}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-background max-sm:h-10 max-sm:w-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-primary">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-xs uppercase tracking-[0.15em] text-foreground-muted">WhatsApp</div>
                <div className="text-base font-semibold text-foreground max-sm:text-sm">
                  <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className="text-primary transition-colors hover:text-secondary" aria-label="Entrar em contato pelo WhatsApp: +55 73 99991-7430">
                    {CONTACT.whatsapp.display}
                  </a>
                </div>
              </div>
            </div>

            <WhatsAppCTA
              label="Fale pelo WhatsApp"
              message="Olá! Encontrei a BTT Porto Seguro pelo site e gostaria de mais informações."
              className="self-stretch"
              aria-label="Fale conosco pelo WhatsApp: +55 73 99991-7430"
            />

            <div className="h-[300px] min-h-[260px] overflow-hidden rounded-lg border border-border" aria-label="Mapa da localização da academia">
              <iframe
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da BTT Porto Seguro no mapa"
                className="h-full w-full border-0 grayscale-[0.8] contrast-[1.1]"
              />
            </div>
            <a
              href={CONTACT.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted transition-colors hover:text-primary"
              aria-label="Como chegar à BTT Porto Seguro no Google Maps"
            >
              Como chegar no Google Maps →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
