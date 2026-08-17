import { buttonVariants } from '@/components/ui/button'
import { Mail, Smartphone } from 'lucide-react'
import FacebookIcon from '../icons/FacebookIcon'

const Contact = () => {
  return (
    <section id='contact' className='grid gap-8 bg-secondary py-20 px-4'>
      <h2 className='text-4xl text-center font-bold'>Kontakt</h2>
      <div className='container mx-auto grid lg:grid-cols-2 gap-8'>
        <div className='grid gap-2'>
          <h3 className='font-semibold'>Email</h3>
          <a
            href='mailto:info@example.com'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} pl-0 w-fit`}
          >
            <Mail />
            info@example.com
          </a>
        </div>

        <div className='grid gap-2'>
          <h3 className='font-semibold'>Telefon</h3>
          <a
            href='tel:+381601234567'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} pl-0 w-fit`}
          >
            <Smartphone />
            +381 60 123 4567
          </a>
        </div>

        <div className='grid gap-2'>
          <h3 className='font-semibold'>Društvene mreže</h3>
          <a
            href='https://www.facebook.com/yourpage'
            className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} pl-0 w-fit`}
          >
            <FacebookIcon className='w-[150px] h-[150px]' />
            Facebook
          </a>
        </div>
      </div>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.669367597754!2d20.548434743265325!3d44.31658064033915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574d455fca9ad9%3A0xe1f6825efeab5580!2sPu%C5%A1kinova%2037%2C%20Aran%C4%91elovac%2034300!5e0!3m2!1sen!2srs!4v1786355575517!5m2!1sen!2srs'
          width='100%'
          height='600'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='strict-origin-when-cross-origin'
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
