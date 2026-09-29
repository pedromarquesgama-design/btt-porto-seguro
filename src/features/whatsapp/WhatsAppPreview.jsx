import WhatsAppCTA from '../../components/ui/WhatsAppCTA.jsx'

export default function WhatsAppPreview() {
  return (
    <section className="bg-background-alt py-16">
      <div className="mx-auto w-full max-w-[680px] px-4">
        <h2 className="mb-4 text-center font-display text-4xl uppercase tracking-[0.05em] text-foreground">WhatsApp CTAs de Teste</h2>
        <p className="mb-10 text-center text-lg text-foreground-muted">Botões flutuantes no topo de um card escuro — versão Set (todas as 4)</p>

        {/* Card escuro simulando um card de modalidade */}
        <div className="relative rounded-xl border border-border bg-surface-2 p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <h3 className="mb-2 font-display text-2xl uppercase tracking-[0.05em] text-foreground">Boxe</h3>
          <p className="mb-4 text-sm text-foreground-muted">Jiu-Jitsu, Boxe, MMA e Muay Thai para sua evolução.</p>

          {/* WhatsAppCTAs flutuantes no topo-center do card */}
          <WhatsAppCTA.Set className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="mt-12 space-y-4">
          <h3 className="font-display text-xl uppercase tracking-[0.05em] text-foreground">Botões individuais</h3>
          <div className="flex flex-col items-center gap-3">
            <WhatsAppCTA variant={0} />
            <WhatsAppCTA variant={1} />
            <WhatsAppCTA variant={2} />
            <WhatsAppCTA variant={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
