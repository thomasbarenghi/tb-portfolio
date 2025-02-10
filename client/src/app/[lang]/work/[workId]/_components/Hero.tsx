import { Button, MarkdownRenderer } from '@/components'
import { type Locale } from '@/i18n.config'
import { type IProject } from '@/interfaces/project.interface'
import Image from 'next/image'
// import Slider from './Slider'

interface Props {
  project: IProject
  lang: Locale
}

const Hero = async ({ project, lang }: Props) => (
  <section className='padding-x-style2 flex flex-col gap-8 pb-24 pt-2 2xl:container'>
    <div className='flex w-full flex-col items-start justify-center gap-8'>
      <div className=' flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center'>
        <div className='flex w-full flex-col gap-1 text-start'>
          <h1 className='text-3xl font-semibold'>{project?.title[lang]}</h1>
          <p className=' block text-start'>{project?.description[lang]}</p>
        </div>
        <div className='lg:max-width-[30%] flex w-full gap-2 lg:w-max lg:justify-end '>
          {project?.links?.deployLink && (
            <Button
              target='_blank'
              href={project?.links?.deployLink}
              title='Deploy'
            />
          )}
          {project?.links?.githubLink && (
            <Button
              target='_blank'
              href={project?.links.githubLink}
              variant='flat'
              title='Github'
            />
          )}
        </div>
      </div>
      <div className='relative aspect-video w-full items-start text-start'>
        <Image
          layout='fill'
          className='rounded-3xl object-cover'
          src={
            typeof project?.multimedia?.coverImage === 'string'
              ? project?.multimedia?.coverImage
              : '/images/placeholder.png'
          }
          alt={project?.title[lang]}
        />
      </div>
      {/* <Slider
        images={
          Array.isArray(project?.multimedia?.gallery)
            ? project?.multimedia?.gallery // Usar gallery si es un arreglo
            : [
                typeof project?.multimedia?.coverImage === 'string'
                  ? project?.multimedia?.coverImage
                  : '/images/placeholder.png'
              ]
        }
      /> */}
      <div className='flex flex-col gap-6'>
        {!project.justDesign && (
          <>
            <div className='flex flex-col gap-2 '>
              <h2 className='text-xl font-semibold'>Stack</h2>
              <div className='flex flex-col  gap-2 '>
                {project?.technologies?.frontTecnologies && (
                  <p className='text-base'>
                    <span className='font-medium'>Frontend:</span>{' '}
                    {project?.technologies.frontTecnologies}
                  </p>
                )}
                {project?.technologies?.backTecnologies && (
                  <p className='text-base'>
                    <span className='font-medium'>Backend:</span>{' '}
                    {project?.technologies.backTecnologies}
                  </p>
                )}
                {project?.technologies?.databaseTecnologies && (
                  <p className='text-base'>
                    <span className='font-medium'>Database:</span>{' '}
                    {project?.technologies.databaseTecnologies}
                  </p>
                )}
              </div>
            </div>

            <hr className='' />
          </>
        )}
        <div>
          <MarkdownRenderer markdown={project?.content[lang]} />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
