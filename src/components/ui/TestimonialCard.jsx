function Stars() {
  return (
    <div className="mt-1 flex gap-0.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ name, text }) {
  return (
    <article className="flex w-[320px] max-w-[320px] shrink-0 flex-col rounded-lg border border-border bg-gradient-to-b from-surface-2/50 to-surface-2/10 p-4 text-start transition-colors duration-250 hover:border-primary sm:p-6">
      <h3 className="text-base font-semibold leading-none text-foreground">{name}</h3>
      <Stars />
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">{text}</p>
    </article>
  )
}
