import { getDictionary } from '@/utils/dictionaries.utils'
import MasonryGrid from './MasonryGrid'

interface Props {
  lang: LangType
}

const Reviews = async ({ lang }: Props) => {
  const { page, reviews } = await getDictionary(lang)
  return (
    <section className='padding-x-estilo2 flex flex-col gap-10'>
      <div className='flex w-full flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-titulo1 text-center font-semibold'>
            {page.home.reviews.title}
          </h1>
          <p className='text-center text-base'>
            {page.home.reviews.description}
          </p>
        </div>
        <MasonryGrid reviews={reviews} />
      </div>
    </section>
  )
}

export default Reviews
