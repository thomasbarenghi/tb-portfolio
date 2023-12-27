'use client'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { type IReview } from '@/interfaces/review.interface'
import { useState } from 'react'
import { Button } from '@/components'

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1
}

interface Props {
  reviews: IReview[]
  lang: LangType
  page: any
}

const MasonryGrid = ({ reviews, lang, page }: Props) => {
  const [visibleItems, setVisibleItems] = useState(6)

  const handleShowMore = () => {
    setVisibleItems(reviews.length)
  }

  return (
    <div className='flex flex-col items-center'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='ml-[-60px] flex w-auto '
        columnClassName='flex-wrap pl-[60px] '
      >
        {reviews?.slice(0, visibleItems).map((item: IReview, index) => (
          <div
            key={'r' + index}
            className='mb-[40px] flex w-full  flex-col gap-3 rounded-3xl'
          >
            <div className='flex items-center gap-4'>
              <Image
                src={
                  typeof item?.authorImage === 'string'
                    ? item?.authorImage
                    : '/images/placeholder.png'
                }
                alt={item.author}
                width={60}
                height={60}
                className='aspect-square rounded-full object-cover'
              />
              <div>
                <h3 className='text-body font-semibold text-primary'>
                  {item.author}
                </h3>
                <p className='text-sm font-light'>{item.position[lang]}</p>
              </div>
            </div>
            <p className='text-body'>{item.content[lang]}</p>
          </div>
        ))}
      </Masonry>
      {visibleItems < reviews.length && (
        <Button
          title={page.home.reviews.btn}
          onClick={handleShowMore}
          size='sm'
        />
      )}
    </div>
  )
}

export default MasonryGrid
