import { CONTACT } from '../../data/site.js'

const WHATSAPP_LOGO = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const VARIANTS = [
  {
    label: 'Agendar aula experimental adulto',
    message: 'Olá! Gostaria de agendar uma aula experimental para adulto na BTT Porto Seguro.',
  },
  {
    label: 'Agendar aula experimental infantil',
    message: 'Olá! Gostaria de agendar uma aula experimental para infantil na BTT Porto Seguro.',
  },
  {
    label: 'Agendar aula experimental de boxe',
    message: 'Olá! Gostaria de agendar uma aula experimental de boxe na BTT Porto Seguro.',
  },
  {
    label: 'Agendar personal MMA',
    message: 'Olá! Gostaria de agendar um personal de MMA na BTT Porto Seguro.',
  },
]

const baseHref = (message) => `${CONTACT.whatsapp.href}?text=${encodeURIComponent(message)}`

/**
 * WhatsAppCTA — full-width CTA button rendered underneath a card.
 * Designed for dark-themed martial-arts landing pages.
 *
 * Pass `variant` (0-3) to pick a label/message, or `message` for a custom one.
 * Renders a single button. Use `WhatsAppCTA.Set` to render all four together.
 */
export default function WhatsAppCTA({ variant = 0, label, message, className = '', ...rest }) {
  const v = VARIANTS[variant]
  const finalLabel = label ?? v.label
  const finalMessage = message ?? v.message
  const ariaLabel = rest['aria-label'] ?? `Fale pelo WhatsApp: ${finalLabel}`
  return (
    <a
      href={baseHref(finalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={
        'inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-4 py-3.5 text-center text-[13px] font-bold uppercase leading-snug tracking-[0.08em] text-white text-balance shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-200 hover:from-[#1DA851] hover:to-[#0e6b4a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.45)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(37,211,102,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181b] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-sm ' +
        className
      }
    >
      {WHATSAPP_LOGO}
      <span>{finalLabel}</span>
    </a>
  )
}

/** WhatsAppCTA.Set — renders all four CTA buttons stacked vertically. */
WhatsAppCTA.Set = function WhatsAppCTASet({ className = '' }) {
  return (
    <div className={'flex flex-col items-center justify-center gap-3 ' + className}>
      {VARIANTS.map((v, i) => (
        <WhatsAppCTA key={v.label} variant={i} />
      ))}
    </div>
  )
}
