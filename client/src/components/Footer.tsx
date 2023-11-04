'use server'
import { getDictionary } from '@/utils/dictionaries.utils'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  lang: LangType
}

const Footer = async ({ lang }: Props) => {
  const { footer } = await getDictionary(lang)
  return (
    <footer className='footer seccion font-outfit bg-primary flex items-center  justify-center font-semibold marker:fixed'>
      <div className='padding-x-style2 py-24 '>
        <div className='flex flex-col items-center justify-center rounded-[40px]  '>
          <h1 className='text-title1 w-full text-center font-medium text-white'>
            {footer.title}
          </h1>
          <p className='mt-3 text-center text-base text-white'>
            {footer.description}
          </p>
          <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
            <div className='flex flex-row items-center gap-2'>
              <Image src='/icon/email.svg' alt='email' width={30} height={30} />
              <p className='decoration-primary font-normal text-white underline decoration-solid'>
                thomasbarenghi@gmail.com
              </p>
            </div>
            <Link href='https://www.linkedin.com/in/thomasbarenghi/'>
              <div className='flex flex-row items-center gap-2'>
                <Image
                  src='/icon/linkedin.svg'
                  alt='email'
                  width={30}
                  height={30}
                />
                <p className='font-normal text-white underline decoration-white decoration-solid'>
                  /in/thomasbarenghi
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
