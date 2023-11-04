import { Footer, Header, ProjectsGrid } from '@/components'
import { getProjects } from '@/services/portfolio/getAll'
import { sortProjects } from '@/utils/sortProjects.utils'

const Work = async () => {
  const { data } = await getProjects()
  const sortedPosts = sortProjects(data, false)
  return (
    <>
      <Header theme='light' />
      <main className='flex flex-col items-center pt-[120px] '>
        <section
          className='padding-x-estilo2 flex flex-col gap-8 pb-24 pt-2 2xl:container'
          id='home'
        >
          <div className='flex w-full flex-col items-start justify-center gap-4'>
            <div className='flex  flex-col items-start justify-start gap-1 '>
              <h1 className='text-titulo2 font-light '>
                Descubre mi enfoque en{' '}
                <span className='text-titulo2 font-semibold'>
                  diseño y desarrollo web
                </span>
              </h1>
              <p className='w-full text-base font-light text-black lg:w-[75%]'>
                Cada proyecto representa un desafío que abordé con dedicación y
                creatividad, y que me permitió adquirir nuevas habilidades y
                conocimientos.
              </p>
            </div>
          </div>
          <ProjectsGrid items={sortedPosts} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Work
