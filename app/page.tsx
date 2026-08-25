import About from '@/components/sections/About'
import Actions from '@/components/sections/Actions'
import Gallery from '@/components/sections/Gallery'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Testimonials from '@/components/sections/Testimonials'

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Actions />
      <Testimonials />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
