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
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  )
}
