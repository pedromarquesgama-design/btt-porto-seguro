export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Tradição e Metodologia', href: '#tradicao-metodologia' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Contatos', href: '#contatos' },
]

export const MOBILE_LINKS = [
  ...NAV_LINKS.slice(0, 5),
  { label: 'FAQ', href: '#faq' },
  { label: 'Contatos', href: '#contatos' },
]

export const TESTIMONIALS = [
  { name: 'Ana Karina Vasconcellos', text: 'Melhor professor da região. Um profissional muito qualificado, sempre se atualizando. É uma honra treinar com esse mestre!' },
  { name: 'Martha Matos', text: 'Academia TOP!! Profissionalismo 100% e ao mesmo tempo um clima de família!!! 1000/1000' },
  { name: 'Thayanne Sá', text: 'Mais que uma equipe, uma família! Ensinando, incentivando, nunca desistindo do aluno. Nosso pequeno não vive mais sem a família BTT Porto Seguro!' },
  { name: 'Davi Lira de Souza', text: 'Um excelente professor, não é apenas um mestre, mas também um amigo e uma figura paterna, cuidando de cada aluno como se fosse seu próprio filho.' },
  { name: 'João Portela', text: 'Poucos sabem passar a arte marcial de forma tão pedagógica e didática quanto o Mestre Eliandro, porque ele faz isso com simplicidade.' },
  { name: 'Ricardo Fortuna', text: 'O Mestre Eliandro nos conduz à evolução técnica com muita inteligência e naturalidade, a ponto de absorvermos o conhecimento sem nem perceber.' },
  { name: 'Ubaldino Junior', text: 'A BTT em Porto Seguro é muito bem representada pelo Professor Eliandro Ninja, sempre se atualizando e trazendo o melhor para seus alunos.' },
  { name: 'Allan Cabral', text: 'O ambiente é muito bem organizado, o professor é nota 10! As aulas são dinâmicas e muito bem ministradas.' },
  { name: 'Marcello Bertolucio', text: 'Melhor academia de boxe e jiu-jitsu de Porto Seguro, instrutores excelentes. Você realmente se sente parte da família com esse grupo.' },
  { name: 'Quinten Oerlemans', text: 'A academia merece sua nota máxima, equipe simpática e ótimo ensino.' },
  { name: 'Bruna Cunha', text: 'A melhor 💪💯🎯 do extremo sul da Bahia!' },
]

export const MASTERS = [
  {
    id: 'murilo',
    eyebrow: 'Fundador e líder da Brazilian Top Team',
    name: ['Murilo', 'Bustamante'],
    image: '/hero-murilo.webp',
    alt: 'Murilo Bustamante',
    description:
      'Co-fundador e atual líder do Brazilian Top Team (BTT), fundado em 2000 ao lado de Ricardo Libório, Mário Sperry e Luis Roberto Duarte. Primeiro brasileiro a conquistar um título do UFC — Campeão dos Médios (UFC 35, 2002) — com a linhagem de faixa-preta vinda de Carlson Gracie. Recebeu a faixa coral (7º grau) de BJJ, em reconhecimento a décadas dedicadas ao jiu-jitsu, e já formou mais de 100 faixas-pretas ao longo da carreira.',
    note: 'Na BTT Porto Seguro, seguimos a metodologia oficial de treino da Brazilian Top Team, desenvolvida e liderada por Murilo Bustamante.',
    badges: ['UFC Champion', '7th Degree Coral Belt', '+100 Black Belts'],
    variant: 'red',
  },
  {
    id: 'popo',
    eyebrow: 'Fundador da rede Popó Mão de Pedra',
    name: ['Acelino', '"Popó"', 'Freitas'],
    image: '/hero-popo.webp',
    alt: 'Acelino Popó Freitas',
    description:
      'Tetracampeão mundial de boxe (1999, 2002, 2004 e 2006) em duas categorias — super-pena e leve — e supercampeão mundial unificado, com títulos pelas quatro principais organizações do boxe (WBO, WBA, WBC e IBF). Conhecido pelo apelido "Mão de Pedra", com uma das mais longas sequências de vitórias por nocaute consecutivas da história do boxe. Fundador da rede de academias "Popó Mão de Pedra", com unidades em diversos estados do Brasil.',
    note: 'Nossas aulas de boxe seguem a metodologia da Popó Mão de Pedra, criada pelo tetracampeão mundial Acelino "Popó" Freitas.',
    badges: ['4x World Champ', 'All 4 Belts', 'Mão de Pedra'],
    variant: 'red',
  },
  {
    id: 'eliandro',
    eyebrow: 'Quem vai te ensinar no dia a dia',
    name: ['Mestre Eliandro', 'Rodrigues'],
    image: '/mestre-eliandro.webp',
    alt: 'Mestre Eliandro Rodrigues — Professor do dia a dia',
    description:
      'O coração da BTT Porto Seguro. As aulas são conduzidas pelo Mestre Eliandro Rodrigues, o "Eliandro Ninja" — figura conhecida na região pelo jeito mão na massa e pelo ensino estilo família, em que cada aluno é acompanhado de perto. Quando necessário, outros instrutores qualificados da equipe podem assumir as turmas no lugar dele, mas a maioria das aulas é ministrada por ele mesmo.',
    note: 'Mestre Eliandro comanda os treinamentos com a filosofia de transformar vidas através das artes marciais — disciplina, respeito e perseverança em cada aula.',
    badges: ['Faixa Preta', 'Instrutor Principal', 'Fundador BTT Porto Seguro'],
    variant: 'gold',
    featured: true,
  },
]

export const MODALIDADES = [
  { title: 'Jiu-Jitsu', subtitle: 'Adulto', image: '/modalidade-jiu-jitsu.webp', alt: 'Jiu-Jitsu Adulto', objectTop: true },
  { title: 'Jiu-Jitsu', subtitle: 'Infantil', image: '/modalidade-jiu-jitsu-infantil.webp', alt: 'Jiu-Jitsu Infantil', objectTop: true },
  { title: 'Boxe', subtitle: 'Todos os níveis', image: '/modalidade-boxe.webp', alt: 'Boxe', contain: true },
  { title: 'MMA', subtitle: 'Mixed Martial Arts', image: '/modalidade-mma.webp', alt: 'MMA' },
]

export const SCHEDULE_JIUJITSU = [
  { turma: 'Kids 1 (5 a 8 anos)', dias: 'Segunda, Quarta, Sexta', horario: '18h30 às 19h30' },
  { turma: 'Kids 2 e Adultos', dias: 'Segunda, Quarta, Sexta', horario: '19h30 às 21h00' },
  { turma: 'Kids 2 e Adultos', dias: 'Terça e Quinta', horario: '10h00 às 11h00' },
  { turma: 'Kids 2 e Adultos', dias: 'Terça e Quinta', horario: '15h00 às 16h00' },
  { turma: 'Kids 1 e Kids 2', dias: 'Terça e Quinta', horario: '16h00 às 17h30' },
]

export const SCHEDULE_BOXE = [
  { turma: 'Boxe', dias: 'Terça e Quinta', horario: '06h30 às 07h30' },
  { turma: 'Boxe', dias: 'Terça e Quinta', horario: '18h30 às 19h30' },
  { turma: 'Boxe', dias: 'Sábado', horario: '06h30 às 07h30' },
]

export const FAQS = [
  {
    question: 'Qual o valor da mensalidade?',
    answer:
      'Os valores variam de acordo com a modalidade e o plano escolhido (mensal, trimestral ou anual). Entre em contato pelo WhatsApp para receber a tabela completa de preços e condições especiais.',
  },
  {
    question: 'Nunca fiz aula de luta — posso me matricular?',
    answer:
      'Claro! Nossos programas são abertos para todos os níveis — de iniciantes completos a atletas competitivos. Cada modalidade tem turmas específicas para quem está começando, com atenção especial à técnica básica e segurança. Venha experimentar uma aula gratuita e conhecer nosso espaço!',
  },
  {
    question: 'Onde posso estacionar?',
    answer:
      'A academia fica em uma região de fácil acesso no centro de Porto Seguro. Há estacionamento público nas proximidades e, em alguns horários, é possível estacionar na própria rua. Informe-se na recepção sobre as melhores opções para cada turno.',
  },
  {
    question: 'Posso fazer aula com personal trainer?',
    answer:
      'Sim! Oferecemos aulas em formato personal trainer para quem prefere um atendimento mais individualizado, com foco em objetivos específicos — perda de peso, preparação para competição, reabilitação, etc. Consulte disponibilidade e valores pelo WhatsApp.',
  },
]

export const CONTACT = {
  address: ['R. Adelar Maria de Andrade, 135', 'Porto Seguro, BA — 45810-000'],
  instagram: { handle: '@btt_bahia', href: 'https://instagram.com/btt_bahia' },
  whatsapp: { display: '+55 73 99991-7430', href: 'https://wa.me/5573999917430' },
  mapEmbed:
    'https://maps.google.com/maps?q=BTT%20PORTO%20SEGURO_BA%20Boxe%20%2CJiu-Jitsu%20MMA%2C%20R.%20Adelar%20Maria%20de%20Andrade%2C%20135%2C%20Porto%20Seguro%20-%20BA&t=&z=17&ie=UTF8&iwloc=&output=embed',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=BTT+PORTO+SEGURO_BA+Boxe+%2CJiu-Jitsu+MMA,+R.+Adelar+Maria+de+Andrade,+135,+Porto+Seguro,+BA',
}
