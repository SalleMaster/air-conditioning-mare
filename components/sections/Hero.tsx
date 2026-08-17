import { buttonVariants } from '@/components/ui/button'

const Hero = () => {
  return (
    <section
      id='hero'
      className='grid relative bg-cover bg-center bg-no-repeat h-screen px-4'
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className='absolute inset-0 bg-background opacity-50 '></div>
      <div className='container inset-1 mx-auto h-full flex flex-col justify-center items-center text-center z-1'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Profesionalne usluge klimatizacije
        </h1>
        <p className='text-lg md:text-xl mb-8'>
          Stručna instalacija, održavanje i popravka klima uređaja za vaš dom i
          poslovni prostor.
        </p>
        <div className='flex gap-4'>
          <a
            href='#contact'
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            Kontaktirajte nas
          </a>
          <a href='#services' className={buttonVariants({ size: 'lg' })}>
            Usluge
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
