import { Footer, Header } from '@/components'
import { type Locale } from '@/i18n.config'
import About from './_components/About'
import Hero from './_components/Hero'
import Reviews from './_components/Reviews'
import Skills from './_components/Skills'
import { getDictionary } from '@/utils/dictionaries.utils'

interface Props {
  params: {
    lang: Locale
  }
}

const Home = async ({ params: { lang } }: Props) => {
  const { navigation } = await getDictionary(lang)
  return (
    <>
      <Header theme='light' lang={lang} navigation={navigation} />
      <main className='mt-[95px] flex flex-col items-center gap-28 pb-5 pt-10'>
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
