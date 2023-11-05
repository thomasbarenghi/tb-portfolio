import { Footer, Header } from '@/components'
import { type Locale } from '@/i18n.config'
import { getProject } from '@/services/portfolio/getOne'
import { getDictionary } from '@/utils/dictionaries.utils'
import type { Metadata } from 'next'
import Hero from './_components/Hero'

interface Props {
  params: {
    workId: string
    lang: Locale
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { data } = await getProject(props?.params?.workId)
  return {
    title: `${data.title[props?.params?.lang]} | Thomas Barenghi`
  }
}

const Work = async ({ params: { lang, workId } }: Props) => {
  const { navigation } = await getDictionary(lang)
  const { data } = await getProject(workId)
  return (
    <>
      <Header theme='light' lang={lang} navigation={navigation} />
      <main className='mt-[95px] flex flex-col items-center gap-28 pb-5 pt-10'>
        <Hero lang={lang} project={data} />
      </main>
      <Footer lang={lang} />
    </>
  )
}

export default Work
