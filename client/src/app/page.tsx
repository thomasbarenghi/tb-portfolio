import { Footer, Header } from '@/components'
import About from './_components/About'
import Featured from './_components/Featured'
import Hero from './_components/Hero'
import Reviews from './_components/Reviews'
import Skills from './_components/Skills'
import Values from './_components/Values'

const Home = () => (
  <>
    <Header theme='transparent' />
    <main className='flex flex-col items-center'>
      <Hero />
      <About />
      <Skills />
      <Featured />
      <Line />
      <Reviews />
      <Line />
      <Values />
    </main>
    <Footer />
  </>
)

const Line = () => (
  <div className='padding-x-estilo2 2xl:container '>
    <hr className=' border-t-2 border-gray-200' />
  </div>
)

export default Home
