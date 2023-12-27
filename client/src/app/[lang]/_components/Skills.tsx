import Image from 'next/image'
import { technologies } from '../../../lib/technologies'
import { getDictionary } from '@/utils/dictionaries.utils'

interface Props {
  lang: LangType
}

const Skills = async ({ lang }: Props) => {
  const { page } = await getDictionary(lang)
  return (
    <section className='flex w-full flex-col items-center justify-center gap-10'>
      <div className='padding-x-style2 flex w-full flex-col items-center justify-center gap-2 2xl:container'>
        <h1 className='text-title1 text-center font-semibold'>
          {page.home.skills.title}
        </h1>
        <p className='text-center text-base'>{page.home.skills.description}</p>
        <div className='mt-4 flex flex-row flex-wrap justify-center gap-2'>
          {technologies.map((tecnologia, index) => (
            <div key={'s' + index} className='relative h-10 w-10'>
              <Image
                src={tecnologia.url}
                alt={tecnologia.title}
                layout='fill'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
