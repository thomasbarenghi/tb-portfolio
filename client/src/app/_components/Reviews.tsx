'use client'
import Masonry from 'react-masonry-css'
import { type IReview, reviews } from '../_lib/reviews'
import Image from 'next/image'

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1
}

const Reviews = () => (
  <section className='padding-x-estilo2 flex flex-col gap-10 py-20 pt-24  '>
    <div className='flex w-full flex-col items-center justify-center gap-10'>
      <h1 className='text-titulo1 w-full font-light'>
        Reseñas de <span className=' text-4xl font-semibold '>colegas 🤓</span>
      </h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='ml-[-30px] flex w-auto '
        columnClassName='flex-wrap pl-[30px] '
      >
        {reviews.map((item: IReview, index) => (
          <div
            key={'r' + index}
            className='mb-[30px] flex w-full  flex-col gap-3 rounded-3xl'
          >
            <div className='flex items-center gap-2'>
              <Image
                src={item.picture}
                alt={item.author}
                width={60}
                height={60}
                className='aspect-square rounded-full object-cover'
              />
              <div>
                <h3 className='text-base font-semibold'>{item.author}</h3>
                <p className='text-sm font-light text-black'>{item.position}</p>
              </div>
            </div>
            <p className='text-base font-light text-black'>{item.text}</p>
          </div>
        ))}
      </Masonry>
    </div>
  </section>
)

export default Reviews
