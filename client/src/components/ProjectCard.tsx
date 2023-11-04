'use client'
import Image from 'next/image'
import { QuickView } from '@/components'
import { useState } from 'react'

interface Props {
  item: any
  withData?: boolean
}

const ProjectCard = ({ item, withData }: Props) => {
  const [quickVisibility, setQuickVisibility] = useState(false)
  const handleCardClick = () => {
    console.log('handleCardClick', item)
    setQuickVisibility(true)
  }
  return (
    <>
      <QuickView
        item={item}
        isVisible={quickVisibility}
        setQuickVisibility={setQuickVisibility}
      />
      <div
        onClick={handleCardClick}
        className='flex aspect-square h-auto cursor-pointer  flex-col gap-2'
      >
        <div className='relative aspect-[4/3] h-full w-full '>
          <Image
            src={item?.coverImage}
            alt={item.title}
            layout='fill'
            className='aspect-[4/3] h-full w-full rounded-3xl object-cover'
          />
        </div>
        <div className='flex flex-col'>
          <h3 className='text-titulo3 font-normal'>{item.title}</h3>
          <p className='text-sm font-light text-black '>{item.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
