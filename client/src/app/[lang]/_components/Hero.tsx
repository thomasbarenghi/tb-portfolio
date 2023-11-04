import { ProjectsGrid } from '@/components'
import { getProjects } from '@/services/portfolio/getAll'
import { getDictionary } from '@/utils/dictionaries.utils'
import { sortProjects } from '@/utils/sortProjects.utils'

interface Props {
  lang: LangType
}

const Hero = async ({ lang }: Props) => {
  const { page } = await getDictionary(lang)
  const { data } = await getProjects()
  const sortedPosts = sortProjects(data, true).slice(0, 3)
  return (
    <section className='flex w-full flex-col items-center justify-center '>
      <div className='padding-x-style2 z-10 flex w-full flex-col items-start justify-center gap-10 lg:items-center '>
        <div className='flex flex-col items-center gap-2'>
          {lang === 'es' ? (
            <h1 className='text-title1 text-center'>
              Hola, soy <b className='font-semibold'>Thomas Barenghi</b>,
              desarrollador <b className='font-semibold'>Full Stack 🚀</b>
            </h1>
          ) : (
            <h1 className='text-title1 text-center'>
              Hey, I am <b className='font-semibold'>Thomas Barenghi</b>,{' '}
              <b className='font-semibold'>Full Stack developer 🚀</b>
            </h1>
          )}
          <p className='text-center'>{page.home.hero.description}</p>
        </div>
        <ProjectsGrid items={sortedPosts} />
      </div>
    </section>
  )
}

export default Hero
