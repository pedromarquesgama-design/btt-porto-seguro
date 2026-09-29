import SectionHeading from '../../components/ui/SectionHeading.jsx'

export default function About() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-background py-16 pt-8" aria-labelledby="quem-somos-title">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading id="quem-somos-title" title="Quem" accent="Somos" subtitle="Tradição, dedicação e paixão pelas artes marciais" />
            <div className="space-y-4 text-lg leading-loose text-foreground-muted max-sm:text-base">
              <p>
                A <strong className="text-foreground">BTT Porto Seguro</strong> é uma academia de artes marciais localizada no coração de Porto Seguro, Bahia.
                Nascemos da vontade de levar o melhor do Jiu-Jitsu e do Boxe para toda a região, com uma abordagem que combina técnica de alto
                nível e um ambiente acolhedor e familiar.
              </p>
              <p>
                Nosso trabalho vai além do tatame. Acreditamos que as artes marciais transformam vidas — elas ensinam disciplina, respeito,
                perseverança e confiança. Por isso, oferecemos programas para adultos e crianças, sempre com atenção individualizada e segurança em
                primeiro lugar.
              </p>
            </div>

            <div className="my-6 rounded-r-md border-l-4 border-primary bg-surface p-6">
              <p className="text-base italic text-foreground">
                &ldquo;Mais que uma equipe, uma família.&rdquo; É assim que nossos alunos e a comunidade descrevem a experiência na BTT Porto Seguro.
                Esse espírito de camaradagem é o que nos move todos os dias.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div>
                <div className="text-lg font-bold text-foreground">Mestre Eliandro Rodrigues</div>
                <div className="text-sm uppercase tracking-[0.1em] text-primary">Eliandro Ninja — Fundador &amp; Instrutor Principal</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/foto-academia.jpg"
              alt="Academia BTT Porto Seguro"
              loading="lazy"
              className="block aspect-[4/3] min-h-[240px] w-full rounded-lg border border-border object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
