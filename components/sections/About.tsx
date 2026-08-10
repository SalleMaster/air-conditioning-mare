import { BadgeCheck, BadgeEuro, StarCheck, Zap } from 'lucide-react'

import CustomCard from '@/components/custom/CustomCard'
import { buttonVariants } from '@/components/ui/button'

const About = () => {
  return (
    <section id='about' className='bg-secondary py-20 px-4'>
      <div className='container mx-auto grid items-center lg:grid-cols-2 gap-8'>
        <div className='grid gap-4'>
          <h2 className='text-4xl text-center lg:text-left font-bold'>
            O nama
          </h2>
          <h3 className='font-semibold'>
            Više od 10 godina služimo zajednici sa profesionalnim uslugama
            klimatizacije.
          </h3>
          <p className='text-muted-foreground'>
            Naša posvećenost kvaliteti i zadovoljstvu klijenta čini nas vodećim
            izborem u regiji. Naš tim je posvećen tome da osigura da vaš sistem
            klimatizacije radi optimalno u svakoj godini.{' '}
          </p>
          <a href='#' className={`${buttonVariants({ size: 'lg' })} lg:w-fit`}>
            Kontaktirajte nas
          </a>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <CustomCard
            title='Iskustvo'
            description='Više od 10 godina iskustva u industriji klimatizacije'
          >
            <BadgeCheck className='w-[150px] h-[150px]' strokeWidth='1' />
          </CustomCard>
          <CustomCard
            title='Stručnjaci'
            description='Sertifikovani tehničari sa stručnim znanjem o svim vrstama AC sistema'
          >
            <StarCheck className='w-[150px] h-[150px]' strokeWidth='1' />
          </CustomCard>
          <CustomCard
            title='Pouzdanost'
            description='Pouzdani servisi i održavanje za dugovečnost vašeg sistema'
          >
            <Zap className='w-[150px] h-[150px]' strokeWidth='1' />
          </CustomCard>
          <CustomCard
            title='Cene'
            description='Transparentne cene bez skrivenih troškova'
          >
            <BadgeEuro className='w-[150px] h-[150px]' strokeWidth='1' />
          </CustomCard>
        </div>
      </div>
    </section>
  )
}

export default About
