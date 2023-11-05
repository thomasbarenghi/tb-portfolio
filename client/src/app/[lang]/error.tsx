'use client'
import { Button } from '@/components'
import Routes from '@/utils/constants/routes.const'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ reset }: Props) => (
  <>
    <main className='flex flex-col'>
      <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
        <div className='flex min-h-[70vh] flex-col items-center justify-center'>
          <h1 className='text-title1 text-center font-semibold'>
            Something went <b className='font-semibold'>wrong.</b>
          </h1>
          <p className='text-body text-center'>
            We are sorry, but something went wrong. Please try again later.
          </p>
          <div className='flex gap-2'>
            <Button
              href={Routes.HOME('en')}
              title='Go to home'
              className='mt-4'
            />
            <Button
              onClick={reset}
              title='Try again'
              className='mt-4'
              variant='flat'
            />
          </div>
        </div>
      </article>
    </main>
  </>
)

export default Error
