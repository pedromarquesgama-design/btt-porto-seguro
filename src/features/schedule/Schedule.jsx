import { SCHEDULE_BOXE, SCHEDULE_JIUJITSU } from '../../data/site.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

function ScheduleTable({ caption, rows, regionLabel }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label={regionLabel} tabIndex={0}>
      <table className="w-full min-w-[600px] border-collapse bg-surface">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="border border-border bg-primary p-4 text-center font-display text-base uppercase tracking-[0.1em] text-foreground">
              Turma
            </th>
            <th scope="col" className="border border-border bg-surface-2 p-4 text-center font-display text-base uppercase tracking-[0.1em] text-foreground">
              Dias
            </th>
            <th scope="col" className="border border-border bg-surface-2 p-4 text-center font-display text-base uppercase tracking-[0.1em] text-foreground">
              Horário
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="border border-border bg-surface-2 p-4 text-center font-display tracking-[0.05em]">
                <span className="font-semibold text-foreground">{r.turma}</span>
              </td>
              <td className="border border-border p-4 text-center text-sm text-foreground-muted max-sm:p-2 max-sm:text-xs">{r.dias}</td>
              <td className="border border-border p-4 text-center text-sm text-foreground-muted max-sm:p-2 max-sm:text-xs">{r.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Schedule() {
  return (
    <section id="horarios" className="bg-background-alt py-16 pb-4 pt-2" aria-labelledby="horarios-title">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <ScrollReveal direction="up" delay={0}>
          <h2 id="horarios-title" className="text-center font-display text-5xl uppercase tracking-[0.05em] text-foreground max-sm:text-4xl">
            Horários
          </h2>
          <p className="mb-10 mt-2 text-center text-lg text-foreground-muted max-sm:text-base">Calendário semanal de aulas</p>
        </ScrollReveal>

        <div className="mb-10">
          <ScrollReveal direction="up" delay={100}>
            <h3 className="mb-4 flex items-center gap-3 font-display text-2xl uppercase tracking-[0.08em] text-foreground before:h-auto before:w-1 before:self-stretch before:rounded before:bg-primary">
              Jiu-Jitsu
            </h3>
            <ScheduleTable caption="Horários das turmas de Jiu-Jitsu" regionLabel="Tabela de horários de Jiu-Jitsu" rows={SCHEDULE_JIUJITSU} />
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal direction="up" delay={200}>
            <h3 className="mb-4 flex items-center gap-3 font-display text-2xl uppercase tracking-[0.08em] text-foreground before:h-auto before:w-1 before:self-stretch before:rounded before:bg-primary">
              Boxe
            </h3>
            <ScheduleTable caption="Horários das turmas de Boxe" regionLabel="Tabela de horários de Boxe" rows={SCHEDULE_BOXE} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
