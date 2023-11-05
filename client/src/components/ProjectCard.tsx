'use client'
import Image from 'next/image'
import { QuickView } from '@/components'
import { useState } from 'react'
import { type IProject } from '@/interfaces/project.interface'

interface Props {
  item: IProject
  lang: LangType
}

const ProjectCard = ({ item, lang }: Props) => {
  const [quickVisibility, setQuickVisibility] = useState(false)
  const handleCardClick = () => {
    setQuickVisibility(true)
  }
  return (
    <>
      <QuickView
        item={item}
        isVisible={quickVisibility}
        setQuickVisibility={setQuickVisibility}
        lang={lang}
      />
      <div
        onClick={handleCardClick}
        className='flex aspect-square h-auto cursor-pointer  flex-col gap-4'
      >
        <div className='relative aspect-[4/3] h-full w-full '>
          <Image
            src={
              typeof item?.multimedia?.coverImage === 'string'
                ? item?.multimedia?.coverImage
                : '/images/placeholder.png'
            }
            alt={item.title[lang]}
            layout='fill'
            className='aspect-[4/3] h-full w-full rounded-3xl object-cover'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-base font-semibold'>{item.title[lang]}</h3>
          <p className='text-sm font-light text-black '>
            {item.description[lang]}
          </p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
