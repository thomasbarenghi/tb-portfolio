import { Footer, Header, ProjectsGrid } from '@/components'
import { type Locale } from '@/i18n.config'
import { getProjects } from '@/services/portfolio/getAll'
import { getDictionary } from '@/utils/dictionaries.utils'
import { sortProjects } from '@/utils/sortProjects.utils'
import type { Metadata } from 'next'

interface Props {
  params: {
    lang: Locale
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { navigation } = await getDictionary(props.params.lang)
  return {
    title: `${navigation.work} | Thomas Barenghi`
  }
}

const Work = async ({ params: { lang } }: Props) => {
  const { page, navigation } = await getDictionary(lang)
  const { data } = await getProjects()
  const sortedPosts = sortProjects(data, false)
  return (
    <>
      <Header theme='light' lang={lang} navigation={navigation} />
      <main className='mt-[95px] flex flex-col items-center gap-28 pb-5 pt-10'>
        <section className='padding-x-style2 flex flex-col gap-8 pb-24 pt-2 2xl:container'>
          <div className='flex w-full flex-col items-start justify-center gap-4'>
            <div className='flex  flex-col items-start justify-start gap-1 '>
              <h1 className='text-title1 font-semibold '>{page.work.title}</h1>
              <p className='text-body w-full lg:w-[75%]'>
                {page.work.description}
              </p>
            </div>
          </div>
          <ProjectsGrid items={sortedPosts} lang={lang} />
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}

export default Work
