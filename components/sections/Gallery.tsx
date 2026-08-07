'use client'

import LightGallery from 'lightgallery/react'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Image from 'next/image'

const Gallery = () => {
  return (
    <section id='actions' className='grid gap-8 bg-background py-20 px-4'>
      <h2 className='text-4xl text-center font-bold'>Galerija naših radova</h2>
      <div className='container mx-auto'>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames='columns-3 md:columns-4 gap-4 leading-none'
        >
          <a href='/images/gallery/1.jpg'>
            <Image
              src='/images/gallery/1.jpg'
              alt='img1'
              width={1205}
              height={1600}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/2.jpg'>
            <Image
              src='/images/gallery/2.jpg'
              alt='img1'
              width={716}
              height={338}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/3.jpg'>
            <Image
              src='/images/gallery/3.jpg'
              alt='img1'
              width={1205}
              height={1600}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/4.jpg'>
            <Image
              src='/images/gallery/4.jpg'
              alt='img1'
              width={1205}
              height={1600}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/5.jpg'>
            <Image
              src='/images/gallery/5.jpg'
              alt='img1'
              width={1205}
              height={1600}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/6.jpg'>
            <Image
              src='/images/gallery/6.jpg'
              alt='img1'
              width={3072}
              height={4080}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/7.jpg'>
            <Image
              src='/images/gallery/7.jpg'
              alt='img1'
              width={3072}
              height={4080}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/8.jpg'>
            <Image
              src='/images/gallery/8.jpg'
              alt='img1'
              width={3072}
              height={4080}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/9.jpg'>
            <Image
              src='/images/gallery/9.jpg'
              alt='img1'
              width={1530}
              height={2040}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/10.jpg'>
            <Image
              src='/images/gallery/10.jpg'
              alt='img1'
              width={1200}
              height={1600}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/11.jpg'>
            <Image
              src='/images/gallery/11.jpg'
              alt='img1'
              width={1200}
              height={1600}
            />
          </a>
          <a href='/images/gallery/12.jpg'>
            <Image
              src='/images/gallery/12.jpg'
              alt='img1'
              width={3072}
              height={4080}
              className='mb-4'
            />
          </a>
          <a href='/images/gallery/13.jpg'>
            <Image
              src='/images/gallery/13.jpg'
              alt='img1'
              width={345}
              height={345}
              className='mb-4'
            />
          </a>
        </LightGallery>
      </div>
    </section>
  )
}

export default Gallery
