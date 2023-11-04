'use client'
import Masonry from 'react-masonry-css'
import Image from 'next/image'

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1
}

export interface IReview {
  author: string
  position: string
  picture: string
  text: string
}

interface Props {
  reviews: IReview[]
}

const MasonryGrid = ({ reviews }: Props) => (
  <Masonry
    breakpointCols={breakpointColumnsObj}
    className='ml-[-60px] flex w-auto '
    columnClassName='flex-wrap pl-[60px] '
  >
    {reviews.map((item: IReview, index) => (
      <div
        key={'r' + index}
        className='mb-[40px] flex w-full  flex-col gap-3 rounded-3xl'
      >
        <div className='flex items-center gap-4'>
          <Image
            src={item.picture}
            alt={item.author}
            width={60}
            height={60}
            className='aspect-square rounded-full object-cover'
          />
          <div>
            <h3 className='text-body text-primary font-semibold'>
              {item.author}
            </h3>
            <p className='text-sm font-light'>{item.position}</p>
          </div>
        </div>
        <p className='text-body'>{item.text}</p>
      </div>
    ))}
  </Masonry>
)

export default MasonryGrid
