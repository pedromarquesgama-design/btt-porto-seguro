export default function SectionHeading({ title, accent, subtitle, align = 'left', id }) {
  const alignCls = align === 'center' ? 'text-center' : 'text-left'
  return (
    <div className={alignCls}>
      <h2 id={id} className="font-display text-5xl tracking-[0.05em] uppercase text-foreground max-sm:text-4xl">
        {title} {accent && <span className="text-primary">{accent}</span>}
      </h2>
      {subtitle && <p className="mt-2 mb-10 text-lg text-foreground-muted max-sm:text-base">{subtitle}</p>}
    </div>
  )
}
