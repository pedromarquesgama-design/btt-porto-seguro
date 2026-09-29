import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import SectionDivider from './components/layout/SectionDivider.jsx'
import Hero from './features/hero/Hero.jsx'
import TestimonialsMarquee from './features/testimonials/TestimonialsMarquee.jsx'
import About from './features/about/About.jsx'
import Tradition from './features/tradition/Tradition.jsx'
import Classes from './features/classes/Classes.jsx'
import Schedule from './features/schedule/Schedule.jsx'
import Faq from './features/faq/Faq.jsx'
import Contact from './features/contact/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />
      <main className="relative">
        {/* Spacer for the fixed navbar so the sticky hero starts below it */}
        <div className="h-16 max-sm:h-14" aria-hidden="true" />
        {/* Sticky hero — pins below the navbar while the content below scrolls over it */}
        <div className="sticky top-16 z-0 h-[calc(100svh-4rem)] overflow-hidden max-sm:top-14 max-sm:h-[calc(100svh-3.5rem)]">
          <Hero />
        </div>
        {/* Content that scrolls over the fixed hero */}
        <div className="relative z-10 bg-background shadow-[0_-16px_40px_rgba(0,0,0,0.5)]">
          <TestimonialsMarquee />
          <About />
          <Tradition />
          <Classes />
          <Schedule />
          <SectionDivider soft />
          <Faq />
          <SectionDivider />
          <Contact />
          <SectionDivider />
        </div>
      </main>
      <Footer />
    </div>
  )
}
