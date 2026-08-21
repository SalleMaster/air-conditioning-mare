import { House, Mail, Smartphone } from 'lucide-react'
import { buttonVariants } from '../ui/button'
import { MAIL, PHONE } from '@/app/consts'

const Footer = () => {
  return (
    <section
      id='footer'
      className='grid gap-8 bg-foreground text-secondary py-20 px-4'
    >
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='grid gap-2'>
          <h2 className='pl-2 text-xl font-semibold'>Kontakt</h2>
          <div className='grid gap-1'>
            <h3 className='pl-2 font-semibold'>Email</h3>
            <a
              href={`mailto:${MAIL}`}
              className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}  w-fit`}
            >
              <Mail />
              {MAIL}
            </a>
          </div>
          <div className='grid gap-1'>
            <h3 className='pl-2 font-semibold'>Telefon</h3>
            <a
              href={`tel:${PHONE}`}
              className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}  w-fit`}
            >
              <Smartphone />
              {PHONE}
            </a>
          </div>
          <div className='grid gap-1'>
            <h3 className='pl-2 font-semibold '>Daibau</h3>
            <a
              href='https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac'
              target='_blank'
              rel='noopener noreferrer'
              className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}  w-fit`}
            >
              <House />
              www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac
            </a>
          </div>
        </div>
        <div className='grid gap-2'>
          <h2 className='pl-2 text-xl font-semibold'>Linkovi</h2>
          <a
            href='#hero'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
          >
            Početna
          </a>
          <a
            href='#services'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
          >
            Usluge
          </a>
          <a
            href='#gallery'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
          >
            Galerija
          </a>
          <a
            href='#about'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
          >
            O nama
          </a>
          <a
            href='#contact'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
          >
            Kontakt
          </a>
        </div>
      </div>
      <div className='text-center'>
        <p>
          &copy; {new Date().getFullYear()} - DM ELEKTRO FRIGO - Sva prava
          zadržana
        </p>
        <p>
          developed by
          <a
            href='https://radovanovic.net/'
            target='_blank'
            rel='noopener noreferrer'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
          >
            radovanovic.net
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
