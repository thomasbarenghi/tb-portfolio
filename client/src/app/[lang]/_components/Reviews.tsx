import { getDictionary } from '@/utils/dictionaries.utils'
import MasonryGrid from './MasonryGrid'
import { getReviews } from '@/services/reviews/getAll'

interface Props {
  lang: LangType
}

const Reviews = async ({ lang }: Props) => {
  const { page } = await getDictionary(lang)
  const { data } = await getReviews()
  return (
    <section className='padding-x-style2 flex flex-col gap-10 2xl:container'>
      <div className='flex w-full flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-title1 text-center font-semibold'>
            {page.home.reviews.title}
          </h1>
          <p className='text-center text-base'>
            {page.home.reviews.description}
          </p>
        </div>
        <MasonryGrid reviews={data?.result ?? []} lang={lang} page={page} />
      </div>
    </section>
  )
}

export default Reviews
