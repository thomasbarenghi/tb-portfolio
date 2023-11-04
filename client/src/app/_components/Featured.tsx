import { ProjectsGrid } from '@/components'
import { getProjects } from '@/services/portfolio/getAll'
import Routes from '@/utils/constants/routes.const'
import { sortProjects } from '@/utils/sortProjects.utils'
import Link from 'next/link'

const Featured = async () => {
  const { data } = await getProjects()
  const sortedPosts = sortProjects(data, true).slice(0, 4)
  return (
    <section className='padding-x-estilo2 flex flex-col gap-8 py-24 2xl:container'>
      <div className='flex w-full flex-col items-start justify-center gap-2'>
        <div className='flex w-full flex-row items-start justify-between gap-1 '>
          <h1 className='text-titulo1 w-full font-light'>
            Proyectos{' '}
            <span className=' text-titulo1 font-semibold '>destacados</span>
          </h1>
          <Link href={Routes.WORK}>
            <button className='whitespace-nowrap rounded-full bg-[#F24E1E] px-6 py-3 text-sm font-semibold text-white'>
              Ver todo
            </button>
          </Link>
        </div>
      </div>
      <ProjectsGrid items={sortedPosts} />
    </section>
  )
}

export default Featured
