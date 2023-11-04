import { Button } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { getDictionary } from '@/utils/dictionaries.utils'
import Image from 'next/image'

interface Props {
  lang: LangType
}

const About = async ({ lang }: Props) => {
  const { page } = await getDictionary(lang)
  return (
    <section className='padding-x-style2 flex flex-col-reverse items-center gap-14 2xl:container md:grid  md:grid-cols-[auto,300px] lg:grid-cols-[auto,350px] '>
      <div className='flex flex-col items-start gap-2'>
        <h1 className='text-title1 font-semibold '>
          {page.home.about.title}{' '}
          <span className='text-title1 animate-pulse font-semibold'>❤️</span>
        </h1>
        <p className='text-body'>{page.home.about.description}</p>
        <div className='flex gap-2'>
          <Button title={page.home.about.btn1} className='mt-2' />
          <Button
            title={page.home.about.btn2}
            variant='flat'
            className='mt-2'
            href={Routes.WORK(lang)}
          />
        </div>
      </div>
      <div className='relative aspect-square w-full sm:w-[70%] md:w-full'>
        <Image
          src='/image/profile.png'
          fill
          alt='Picture of the author'
          className='aspect-square object-cover'
        />
      </div>
    </section>
  )
}

export default About
