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
    message: 'Olá! Encontrei a BTT Porto Seguro pelo site e gostaria de agendar uma aula experimental para adulto.',
  },
  {
    label: 'Agendar aula experimental infantil',
    message: 'Olá! Encontrei a BTT Porto Seguro pelo site e gostaria de agendar uma aula experimental infantil.',
  },
  {
    label: 'Agendar aula experimental de boxe',
    message: 'Olá! Encontrei a BTT Porto Seguro pelo site e gostaria de agendar uma aula experimental de boxe.',
  },
  {
    label: 'Agendar personal MMA',
    message: 'Olá! Encontrei a BTT Porto Seguro pelo site e gostaria de agendar um personal de MMA.',
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
        'group relative inline-flex min-h-[3.25rem] select-none items-center justify-center gap-2 overflow-hidden rounded-md ' +
        'border border-white/10 bg-gradient-to-b from-red-500 via-red-600 to-red-700 px-4 py-3.5 text-center text-[13px] font-bold uppercase leading-snug tracking-[0.08em] text-white text-balance sm:text-sm ' +
        'shadow-[0_2px_0_0_#7f1d1d,0_10px_20px_-8px_rgba(220,38,38,0.7)] ' +
        'transition-[transform,box-shadow,background-color] duration-200 ease-out ' +
        'hover:from-red-400 hover:via-red-500 hover:to-red-600 ' +
        'hover:shadow-[0_3px_0_0_#7f1d1d,0_16px_28px_-8px_rgba(220,38,38,0.85)] ' +
        'active:translate-y-[3px] active:shadow-[0_0_0_0_#7f1d1d,0_6px_12px_-6px_rgba(220,38,38,0.6)] ' +
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181b] ' +
        'motion-reduce:transform-none motion-reduce:transition-none ' +
        className
      }
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-4 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-500 ease-out group-hover:left-[115%] group-hover:opacity-100 motion-reduce:hidden"
      />
      <span className="relative shrink-0">{WHATSAPP_LOGO}</span>
      <span className="relative">{finalLabel}</span>
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
