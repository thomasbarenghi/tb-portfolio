'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, SanityRenderer } from '@/components'
import { createPortal } from 'react-dom'

interface Props {
  item: any
  isVisible: boolean
  setQuickVisibility: (value: boolean) => void
}

const QuickView = ({ item, isVisible, setQuickVisibility }: Props) => {
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
          <div className='fixed left-0 top-0 z-[1000] flex h-screen w-screen flex-col items-end justify-start bg-[#000000e5]'>
            <div
              className='p-5'
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
                className='relative flex h-full w-full justify-center rounded-t-[40px]  bg-white py-16  '
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.6 }}
              >
                <div className='relative flex  h-full  w-full flex-col overflow-y-scroll px-4 2xl:container xs:px-8 lg:w-[70%] lg:px-0  '>
                  <div className='pb-14'>
                    <div className='mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center'>
                      <div className='flex w-full flex-col gap-1 text-start'>
                        <h1 className='text-3xl font-semibold'>
                          {item?.title}
                        </h1>
                        <p className=' block text-start'>{item?.description}</p>
                        {/* <p className="text-sm">Finalizacion: {item?.completionDate}</p> */}
                      </div>
                      <div className='lg:max-width-[30%] flex w-full gap-2 lg:w-max lg:justify-end '>
                        {item?.deployLink && (
                          <Button
                            target='_blank'
                            href={item?.deployLink}
                            title='Deploy'
                          />
                        )}
                        {item?.githubLink && (
                          <Button
                            target='_blank'
                            href={item?.githubLink}
                            variant='flat'
                            title='Github'
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className='relative mb-8  w-full items-start text-start'
                      style={{ aspectRatio: '4/3' }}
                    >
                      <Image
                        layout='fill'
                        className='rounded-3xl object-cover '
                        src={item?.coverImage}
                        alt={item?.title}
                      />
                    </div>
                    <div className='flex flex-col gap-2 px-2 sm:px-3 md:px-5'>
                      <h2 className='text-xl font-semibold'>Stack</h2>
                      <div className='flex flex-col  gap-2 '>
                        <p className='text-base'>
                          {' '}
                          <span className='font-medium'>Frontend:</span>{' '}
                          {item?.frontTecnologies}
                        </p>
                        <p className='text-base'>
                          {' '}
                          <span className='font-medium'>Backend:</span>{' '}
                          {item?.backTecnologies}
                        </p>
                        <p className='text-base'>
                          {' '}
                          <span className='font-medium'>Database:</span>{' '}
                          {item?.databaseTecnologies}
                        </p>
                      </div>
                    </div>
                    <hr className='mx-2 my-8 sm:mx-3 md:mx-5 lg:my-8' />
                    <div>
                      <SanityRenderer content={item?.content} />
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
