import { useState } from 'react'
import { CONTACT } from '../../data/site.js'

function Field({ id, label, ...props }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
        {label}
      </label>
      {props.textarea ? (
        <textarea id={id} className="min-h-[120px] w-full resize-y rounded-md border border-border bg-surface-2 px-4 py-3 font-body text-base text-foreground transition-colors placeholder:text-foreground-muted focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/25" {...props} />
      ) : (
        <input id={id} className="min-h-[44px] w-full rounded-md border border-border bg-surface-2 px-4 py-3 font-body text-base text-foreground transition-colors placeholder:text-foreground-muted focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/25" {...props} />
      )}
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    const nextErrors = {}
    if (!data.name?.trim()) nextErrors.name = true
    if (!data.email?.trim()) nextErrors.email = true
    if (!data.message?.trim()) nextErrors.message = true
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSending(true)
    setTimeout(() => {
      e.target.reset()
      setSending(false)
      setSent(true)
      setTimeout(() => setSent(false), 5000)
    }, 1000)
  }

  return (
    <section id="contatos" className="relative overflow-hidden bg-background-alt py-16" aria-labelledby="contatos-title">
      <div className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[80%] w-1/2 bg-[radial-gradient(ellipse,rgba(220,38,38,0.12)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h2 id="contatos-title" className="text-center font-display text-5xl uppercase tracking-[0.05em] text-foreground max-sm:text-4xl">
          Contatos
        </h2>
        <p className="mb-10 mt-2 text-center text-lg text-foreground-muted max-sm:text-base">Fale conosco ou venha nos visitar</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-surface max-sm:h-10 max-sm:w-10" aria-hidden="true">
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-surface max-sm:h-10 max-sm:w-10" aria-hidden="true">
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-surface max-sm:h-10 max-sm:w-10" aria-hidden="true">
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

            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 self-start rounded-md bg-[#25D366] px-6 py-4 text-base font-bold tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#1DA851] hover:shadow-[0_4px_16px_rgba(37,211,102,0.3)] max-sm:w-full max-sm:justify-center max-sm:px-4 max-sm:py-3"
              aria-label="Fale conosco pelo WhatsApp: +55 73 99991-7430"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale pelo WhatsApp
            </a>

            <div className="h-[300px] min-h-[220px] overflow-hidden rounded-lg border border-border md:h-full md:min-h-[400px]" aria-label="Mapa da localização da academia">
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
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted transition-colors hover:text-primary"
              aria-label="Como chegar à BTT Porto Seguro no Google Maps"
            >
              Como chegar no Google Maps →
            </a>
          </div>

          <div className="rounded-lg border border-border bg-surface p-8 max-sm:p-6" aria-label="Formulário de contato">
            <h3 className="mb-6 font-display text-2xl uppercase tracking-[0.05em]">Envie sua mensagem</h3>
            <form onSubmit={onSubmit} noValidate>
              <Field
                id="name"
                name="name"
                label="Nome completo"
                placeholder="Seu nome"
                autoComplete="name"
                required
                style={errors.name ? { borderColor: '#dc2626' } : undefined}
                onInput={() => setErrors((e) => ({ ...e, name: undefined }))}
              />
              <Field
                id="email"
                name="email"
                type="email"
                label="E-mail"
                placeholder="seu@email.com"
                autoComplete="email"
                required
                style={errors.email ? { borderColor: '#dc2626' } : undefined}
                onInput={() => setErrors((e) => ({ ...e, email: undefined }))}
              />
              <Field
                id="message"
                name="message"
                label="Mensagem"
                placeholder="Escreva sua mensagem..."
                textarea
                required
                style={errors.message ? { borderColor: '#dc2626' } : undefined}
                onInput={() => setErrors((e) => ({ ...e, message: undefined }))}
              />
              <button
                type="submit"
                disabled={sending}
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border-2 border-primary bg-primary px-10 py-4 font-body text-base font-bold uppercase tracking-[0.1em] text-foreground transition-all hover:-translate-y-0.5 hover:border-primary-dark hover:bg-primary-dark disabled:opacity-70"
              >
                {sending ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
            {sent && (
              <div className="mt-4 rounded-md border border-green-500/30 bg-green-500/10 p-4 text-center text-sm text-green-400" role="alert">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
