/* eslint-disable @typescript-eslint/indent */
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, EmblaCarousel, MarkdownRenderer } from '@/components'
import { createPortal } from 'react-dom'
import { type IProject } from '@/interfaces/project.interface'

interface Props {
  item: IProject
  lang: LangType
  isVisible: boolean
  setQuickVisibility: (value: boolean) => void
}

const QuickView = ({ item, isVisible, setQuickVisibility, lang }: Props) => {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isVisible])

  return (
    <>
      {isVisible &&
        createPortal(
          <div className='fixed left-0 top-0 z-[1000] flex h-screen w-screen flex-col items-center justify-start bg-[#000000e5]'>
            <div
              className='flex w-full items-center justify-end p-5 2xl:container'
              onClick={() => {
                setQuickVisibility(false)
              }}
            >
              <Image
                width={20}
                height={20}
                alt='close'
                src='/icon/cross-white.svg'
                className='cursor-pointer'
              />
            </div>
            <AnimatePresence>
              <motion.div
                className='relative flex h-full w-full justify-center rounded-t-[40px] bg-white  py-16 2xl:container'
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.6 }}
              >
                <div className='md:scrollbar-general relative  flex  h-full w-full flex-col overflow-y-scroll px-4 2xl:container xs:px-6 lg:w-[70%] lg:px-0  '>
                  <div className='pb-14'>
                    <div className='mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center'>
                      <div className='flex w-full flex-col gap-1 text-start'>
                        <h1 className='text-3xl font-semibold'>
                          {item?.title[lang]}
                        </h1>
                        <p className=' block text-start'>
                          {item?.description[lang]}
                        </p>
                        {/* <p className="text-sm">Finalizacion: {item?.completionDate}</p> */}
                      </div>
                      <div className='lg:max-width-[30%] flex w-full gap-2 lg:w-max lg:justify-end '>
                        {item?.links?.deployLink && (
                          <Button
                            target='_blank'
                            href={item?.links.deployLink}
                            title='Demo'
                          />
                        )}
                        {item?.links?.githubLink && (
                          <Button
                            target='_blank'
                            href={item?.links?.githubLink}
                            variant={item?.links?.deployLink ? 'flat' : 'solid'}
                            title='Github'
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className='relative mb-8  w-full items-start text-start'
                      style={{ aspectRatio: '4/3' }}
                    >
                      {item?.multimedia?.gallery?.length <= 1 ||
                      !item?.multimedia?.gallery ? (
                        <Image
                          layout='fill'
                          quality={100}
                          className='rounded-3xl object-cover '
                          src={
                            typeof item?.multimedia?.mainImage === 'string'
                              ? item?.multimedia?.mainImage
                              : '/images/placeholder.png'
                          }
                          alt={item?.title[lang]}
                        />
                      ) : (
                        <EmblaCarousel
                          slides={item.multimedia.gallery as string[]}
                        />
                      )}
                    </div>
                    <hr className='mb-6' />
                    <div className='flex flex-col gap-6'>
                      {!item.justDesign && (
                        <>
                          <div className='flex flex-col gap-2 '>
                            <h2 className='text-xl font-semibold'>Stack</h2>
                            <div className='flex flex-col  gap-2 '>
                              {item?.technologies?.frontTecnologies && (
                                <p className='text-base'>
                                  <span className='font-medium'>Frontend:</span>{' '}
                                  {item?.technologies.frontTecnologies}
                                </p>
                              )}
                              {item?.technologies?.backTecnologies && (
                                <p className='text-base'>
                                  <span className='font-medium'>Backend:</span>{' '}
                                  {item?.technologies.backTecnologies}
                                </p>
                              )}
                              {item?.technologies?.databaseTecnologies && (
                                <p className='text-base'>
                                  <span className='font-medium'>Database:</span>{' '}
                                  {item?.technologies.databaseTecnologies}
                                </p>
                              )}
                            </div>
                          </div>
                          <hr className='' />
                        </>
                      )}

                      <div>
                        <MarkdownRenderer markdown={item?.content[lang]} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>,
          document.body
        )}
    </>
  )
}

export default QuickView
