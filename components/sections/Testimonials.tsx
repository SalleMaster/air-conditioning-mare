'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from '../ui/card'
import { House, Star } from 'lucide-react'
import { buttonVariants } from '../ui/button'

const clientTestimonials = [
  {
    name: 'Mirjana P.',
    service: 'Inverter klima sa ugradnjom',
    rating: 5,
    review: 'Savestan, odgovoran, uredan. Sve pohvale!',
    sourceName: 'Daibau.rs',
    sourceUrl: 'https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac',
  },
  {
    name: 'Miroljub S.',
    service: 'Ugradnja klime',
    rating: 5,
    review:
      'Саветиовали су, држали се договора и све добро урадили. Професионално. Све препоруке.',
    sourceName: 'Daibau.rs',
    sourceUrl: 'https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac',
  },
  {
    name: 'Milos P.',
    service: 'Ugradnja klima uredjaja',
    rating: 5,
    review: 'Sve brzo i odlicno.',
    sourceName: 'Daibau.rs',
    sourceUrl: 'https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac',
  },
  {
    name: 'Jasmina B.',
    service: 'Dopuna freona i servis',
    rating: 5,
    review: 'Za svaku pohvalu.',
    sourceName: 'Daibau.rs',
    sourceUrl: 'https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac',
  },
  {
    name: 'Snezana E.',
    service: 'Ugradnja klime',
    rating: 5,
    review: 'SVE DOBRO IZVEDENO. NEMAM PRIMEDBE.',
    sourceName: 'Daibau.rs',
    sourceUrl: 'https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac',
  },
  {
    name: 'Danjjela M.',
    service: 'Ugradnja inverter klime',
    rating: 5,
    review: 'Savrseno. Preporuka za ovog majstora.',
    sourceName: 'Daibau.rs',
    sourceUrl: 'https://www.daibau.rs/izvodjac/dm_elektro_frigo_arandjelovac',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='grid gap-8 bg-secondary py-20 px-4'>
      <h2 className='text-4xl text-center font-bold'>Recenzije klijenata</h2>
      <div className='container mx-auto flex justify-center'>
        <Carousel
          className='w-full max-w-48 sm:max-w-full mx-10'
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className='-ml-1 md:-ml-4'>
            {clientTestimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className='basis-1/1 sm:basis-1/2 md:basis-1/3  lg:basis-1/4 pl-1 md:pl-4'
              >
                <div className='p-1'>
                  <Card>
                    <CardHeader>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.service}</CardDescription>
                      <div></div>
                      <CardAction className='hidden sm:flex gap-1 text-2xl text-yellow-500'>
                        {testimonial.rating > 0 && (
                          <Star fill='var(--color-yellow-500)' />
                        )}
                        {testimonial.rating > 1 && (
                          <Star fill='var(--color-yellow-500)' />
                        )}
                        {testimonial.rating > 2 && (
                          <Star fill='var(--color-yellow-500)' />
                        )}
                        {testimonial.rating > 3 && (
                          <Star fill='var(--color-yellow-500)' />
                        )}
                        {testimonial.rating > 4 && (
                          <Star fill='var(--color-yellow-500)' />
                        )}
                      </CardAction>
                      <CardAction className='flex items-center sm:hidden gap-1 text-xl text-yellow-500'>
                        <p>{testimonial.rating}</p>
                        <Star fill='var(--color-yellow-500)' />
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>{testimonial.review}</p>
                    </CardContent>
                    <CardFooter>
                      <a
                        href={testimonial.sourceUrl}
                        className={`${buttonVariants({ size: 'lg', variant: 'ghost' })} w-fit`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {testimonial.sourceName}
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
