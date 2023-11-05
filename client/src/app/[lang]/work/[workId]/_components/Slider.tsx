'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { type IGallery } from '@/interfaces/project.interface'

interface Props {
  images: string[] | IGallery[]
}

const Slider = ({ images }: Props) => {
  if (typeof images[0] !== 'string') {
    console.log('es un arreglo de objetos')
    return
  }

  console.log('es un arreglo de strings', images)

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => {
        console.log('slide change')
      }}
      onSwiper={(swiper) => {
        console.log(swiper)
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className='relative aspect-video h-full w-full bg-red-800'>
            <Image
              src={
                typeof image === 'string' ? image : '/images/placeholder.png'
              }
              alt=''
              className='aspect-video rounded-3xl object-cover'
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
