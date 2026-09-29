export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-0 py-12 pb-6" role="contentinfo">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center">
          <img src="/btt-logo.png" alt="Brazilian Top Team Porto Seguro" className="h-10 w-auto object-contain md:h-12" />
        </div>
        <div className="text-sm leading-relaxed text-foreground-muted">
          <strong>BTT Porto Seguro – Boxe, Jiu-Jitsu, MMA</strong>
          <br />
          R. Adelar Maria de Andrade, 135 — Porto Seguro, BA — 45810-000
        </div>
        <div className="h-0.5 w-[60px] bg-border" aria-hidden="true" />
        <p className="text-sm text-foreground-muted">
          &copy; <span>{new Date().getFullYear()}</span> <span className="text-primary">BTT Porto Seguro</span> – Boxe, Jiu-Jitsu, MMA.
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
