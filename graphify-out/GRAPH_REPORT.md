# Graph Report - btt-bahia  (2026-09-28)

## Corpus Check
- Large corpus: 37 files · ~760,896 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 178 nodes · 212 edges · 25 communities (23 shown, 1 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Shell and Site Data
- Runtime Dependencies
- Build Toolchain
- WhatsApp Booking Flow
- Kids Class Group Photo
- Founder Hero Portrait
- Head Coach Studio Portrait
- Adult Jiu-Jitsu Card
- HTML Entry Point
- Kids Program Hero
- Youth Athlete Spotlight
- Head Coach Portrait
- Boxing Modality Brand
- Kids Jiu-Jitsu Card
- Hero Slider
- Testimonials Marquee
- Academy Programs
- Logo Brand Identity
- Academy Group Photo
- Boxing Founder Portrait
- Boxing Coach Portrait
- MMA Modality Card
- Masters Bowing Ritual
- Bowing Practitioners

## God Nodes (most connected - your core abstractions)
1. `Hero Murilo Portrait Image` - 6 edges
2. `HTML Entry Point` - 5 edges
3. `Hero Kids 2 Marketing Photo` - 5 edges
4. `Young Female BJJ Athlete Portrait Subject` - 5 edges
5. `Modalidade Boxe Image Asset` - 5 edges
6. `Modalidade Jiu-Jitsu Photo` - 5 edges
7. `scripts` - 4 edges
8. `WhatsAppCTA()` - 4 edges
9. `BTT Porto Seguro Academy` - 4 edges
10. `BTT Logo Image` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Academy Offerings Bundle** — index_btt_porto_seguro, index_jiu_jitsu, index_boxe, index_aulas_infantis [EXTRACTED 1.00]
- **BTT emblem composition of silhouette flag motif and wordmark** — public_btt_logo_fighter_silhouette, public_btt_logo_brazilian_flag_motif, public_btt_logo_wordmark [EXTRACTED 1.00]
- **Academy Team Photo Session** — public_foto_academia_instructor, public_foto_academia_kidsstudents, public_foto_academia_bttbahia_branding [EXTRACTED 1.00]
- **Kids class group photo session in dojo** — public_hero_kids_1_heroimage, public_hero_kids_1_kidsbjjclass, public_hero_kids_1_dojosetting [EXTRACTED 1.00]
- **Kids BJJ class water break scene** — public_hero_kids_2_heroimage, public_hero_kids_2_kidsbjjclass, public_hero_kids_2_waterbreak [INFERRED 0.85]
- **Hero Athlete Achievement Showcase** — public_hero_kids_3_youngathlete, public_hero_kids_3_competitionmedals, public_hero_kids_3_youthachievement [INFERRED 0.85]
- **Respect Bow Scene Before Training** — public_hero_masters_practitioner_left, public_hero_masters_practitioner_right, public_hero_masters_bowing_ritual [EXTRACTED 1.00]
- **Branded Hero Authority Composition** — public_hero_murilo_hero_image, public_hero_murilo_branded_backdrop, public_hero_murilo_white_gi [INFERRED 0.85]
- **Championship Showcase Composition** — public_hero_popo_image, public_hero_popo_popo_subject, public_hero_popo_wbo_championship_belts [EXTRACTED 1.00]
- **Coach Protective Training Gear Set** — public_master_solo_mobile_coach, public_master_solo_mobile_body_protector, public_master_solo_mobile_focus_mitts [INFERRED 0.85]
- **Coach brand identity portrait** — public_master_solo_instructor_figure, public_master_solo_team_emblem, public_master_solo_brand_values [INFERRED 0.85]
- **Instructor authority portrait composition** — public_mestre_eliandro_portrait_subject, public_mestre_eliandro_bjj_gi, public_mestre_eliandro_black_belt [EXTRACTED 1.00]
- **Boxing team brand identity composition** — public_modalidade_boxe_equipe_popo, public_modalidade_boxe_mascot, public_modalidade_boxe_gloves [INFERRED 0.85]
- **Kids BJJ Class Seated Attention Scene** — public_modalidade_jiu_jitsu_infantil_childstudents, public_modalidade_jiu_jitsu_infantil_bjjgi, public_modalidade_jiu_jitsu_infantil_trainingmat [INFERRED 0.85]
- **Respectful Bow Ritual Scene** — public_modalidade_jiu_jitsu_practitioner_left, public_modalidade_jiu_jitsu_practitioner_right, public_modalidade_jiu_jitsu_bowing_etiquette [INFERRED 0.85]
- **Caged MMA Bout Scene** — public_modalidade_mma_ground_grappling, public_modalidade_mma_octagon_cage, public_modalidade_mma_referee [EXTRACTED 1.00]

## Communities (25 total, 1 thin omitted)

### Community 0 - "App Shell and Site Data"
Cohesion: 0.10
Nodes (17): App(), Footer(), Navbar(), SectionDivider(), SectionHeading(), CONTACT, FAQS, MASTERS (+9 more)

### Community 1 - "Runtime Dependencies"
Cohesion: 0.13
Nodes (14): dependencies, react, react-dom, description, name, private, scripts, build (+6 more)

### Community 2 - "Build Toolchain"
Cohesion: 0.22
Nodes (9): devDependencies, tailwindcss, @tailwindcss/vite, vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite, vite (+1 more)

### Community 3 - "WhatsApp Booking Flow"
Cohesion: 0.31
Nodes (5): baseHref(), VARIANTS, WhatsAppCTA(), MODALIDADES, Classes()

### Community 4 - "Kids Class Group Photo"
Cohesion: 0.29
Nodes (7): Brazilian Top Team Bahia Banner Branding, Dojo Interior With Blue Mats, BJJ Gi Uniforms In Blue White Black, Hero Kids 1 Hero Image Asset, Hero Marketing Purpose Showing Community, Adult Instructors Posing With Kids, Kids BJJ Class Group Photo

### Community 5 - "Founder Hero Portrait"
Cohesion: 0.33
Nodes (7): Black Belt with Red Section, Academy Branded Wall Backdrop, BTT Chest Patch with Brazilian Colors, Hero Image Authority and Trust Purpose, Hero Murilo Portrait Image, Instructor Murilo Portrait Subject, White BJJ Gi Uniform

### Community 6 - "Head Coach Studio Portrait"
Cohesion: 0.33
Nodes (7): Disciplina Humildade Obediencia values, Jiu Jitsu Boxe MMA disciplines, Instructor Eliandro Rodrigues portrait subject, TITLE boxing coach protective gear set, Brazil and Bahia flag regional identity, Master solo studio portrait photograph, Eliandro Rodrigues octagon team emblem

### Community 7 - "Adult Jiu-Jitsu Card"
Cohesion: 0.52
Nodes (7): BJJ Bowing Etiquette and Respect Ritual, Brazilian Top Team Backdrop Banner, Modalidade Jiu-Jitsu Photo, Jiu-Jitsu Modality Marketing Purpose, Left BJJ Practitioner Bowing, Right BJJ Practitioner Bowing, White Gi with Brazil Trim and Black Belt

### Community 8 - "HTML Entry Point"
Cohesion: 0.40
Nodes (6): BTT Logo Favicon, Hero Image Assets, HTML Entry Point, Main JSX Entry Module, React Root Mount Point, Typography System Bebas Neue and Source Sans 3

### Community 9 - "Kids Program Hero"
Cohesion: 0.40
Nodes (6): Brazilian Top Team BTT Gi Branding, Hero Kids 2 Marketing Photo, Hero Image Purpose to Convey Welcoming Kids Program, Kids Brazilian Jiu-Jitsu Class, MMA Cage Training Area with Blue Mats, Children Hydration Break

### Community 10 - "Youth Athlete Spotlight"
Cohesion: 0.33
Nodes (6): Blue Brazilian Jiu-Jitsu Gi, BJJ Competition Medals Collection, Hero Kids 3 Hero Image, Orange Youth BJJ Belt, Young Female BJJ Athlete Portrait Subject, Youth Competitive Achievement Showcase

### Community 11 - "Head Coach Portrait"
Cohesion: 0.33
Nodes (6): Black Brazilian Jiu-Jitsu Gi, Black Belt with Red Bar, BTT Team Patches and Brazilian Colors, Mestre Eliandro Photo Asset, Mestre Eliandro Kneeling Portrait Subject, Neutral Studio Portrait Setting

### Community 12 - "Boxing Modality Brand"
Cohesion: 0.47
Nodes (6): Modalidade Boxe Image Asset, Circular Badge Emblem Design, Eliandro Ninja Coach Name, Equipe Popo Mao de Pedra Team Name, Red Boxing Gloves Motif, Aggressive Animal Mascot Face

### Community 13 - "Kids Jiu-Jitsu Card"
Cohesion: 0.33
Nodes (6): Brazilian Jiu-Jitsu Gi Uniform, Child BJJ Students Seated in Row, Indoor Dojo Training Setting, Kids Jiu-Jitsu Program Marketing Purpose, Kids Jiu-Jitsu Modality Photo, Blue Tatami Training Mat

### Community 14 - "Hero Slider"
Cohesion: 0.47
Nodes (4): Button(), Hero(), SLIDES, useHeroSlider()

### Community 15 - "Testimonials Marquee"
Cohesion: 0.40
Nodes (3): TestimonialCard(), TESTIMONIALS, TestimonialsMarquee()

### Community 16 - "Academy Programs"
Cohesion: 0.50
Nodes (5): Aulas Infantis, Boxe Program, BTT Porto Seguro Academy, Jiu-Jitsu Program, Mestre Eliandro Rodrigues

### Community 17 - "Logo Brand Identity"
Cohesion: 0.60
Nodes (5): Brazilian Top Team Brand Identity, Brazilian Flag Color Motif, Victorious Fighter Silhouette, BTT Logo Image, Brazilian Top Team Wordmark

### Community 18 - "Academy Group Photo"
Cohesion: 0.40
Nodes (5): BTT Bahia Brand Backdrop, Academy Group Portrait Photo, BJJ Instructor in Black Gi, Kids BJJ Program, Kids Students Group in Gis

### Community 19 - "Boxing Founder Portrait"
Cohesion: 0.50
Nodes (5): Hero Marketing Purpose, Hero Popo Hero Image, Boxer Popo Subject, Studio Portrait Setting, WBO Championship Belts

### Community 20 - "Boxing Coach Portrait"
Cohesion: 0.50
Nodes (5): TITLE Body Protector Vest, Boxing Coach Figure, TITLE Punch Focus Mitts, Master Solo Mobile Image, Studio Portrait Composition

### Community 21 - "MMA Modality Card"
Cohesion: 0.50
Nodes (5): Ground Grappling Exchange, Modalidade MMA Promotional Image, Website Modality Showcase Purpose, Octagon Cage Setting, Standing Referee Oversight

### Community 22 - "Masters Bowing Ritual"
Cohesion: 0.50
Nodes (4): Mutual Bowing Ritual of Respect, Brazilian Top Team Backdrop Banner, Dojo Blue Mat Training Setting, Hero Masters Hero Image

## Knowledge Gaps
- **59 isolated node(s):** `name`, `private`, `version`, `type`, `description` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 70 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Build Toolchain` to `Runtime Dependencies`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell and Site Data` be split into smaller, more focused modules?**
  _Cohesion score 0.10483870967741936 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._