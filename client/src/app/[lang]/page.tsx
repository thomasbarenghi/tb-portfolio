import { Footer, Header } from '@/components'
import { type Locale } from '@/i18n.config'
import About from './_components/About'
import Hero from './_components/Hero'
import Reviews from './_components/Reviews'
import Skills from './_components/Skills'
import { getDictionary } from '@/utils/dictionaries.utils'
import { type Metadata } from 'next'

interface Props {
  params: {
    lang: Locale
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { navigation } = await getDictionary(props.params.lang)
  return {
    title: `${navigation.home} | Thomas Barenghi`
  }
}

const Home = async ({ params: { lang } }: Props) => {
  const { navigation } = await getDictionary(lang)
  return (
    <>
      <Header theme='light' lang={lang} navigation={navigation} />
      <main className='mt-[95px] flex flex-col items-center gap-28 py-10'>
        <Hero lang={lang} />
        <Skills lang={lang} />
        <About lang={lang} />
        <Reviews lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}

export default Home
