import Image from 'next/image'
import Link from 'next/link'

const Footer = () => (
  <footer className='footer seccion font-outfit flex items-center justify-center  bg-[#f24e1e33] font-semibold marker:fixed'>
    <div className='padding-x-estilo2 py-24 '>
      <div className='flex flex-col items-center justify-center rounded-[40px]  '>
        <h1 className='text-titulo1 w-full text-center font-medium'>
          ¿Tenés algo{' '}
          <span className='text-titulo1-semibold text-titulo1 text-[#F24E1E] '>
            en mente?
          </span>
        </h1>
        <p className='mt-1 text-center text-base font-light text-black'>
          ¡Quiero ser parte de tu equipo! Contáctame ahora.
        </p>
        <div className='mt-5 flex flex-col items-center justify-center gap-6 md:flex-row'>
          <div className='flex flex-row items-center gap-2'>
            <Image src='/icon/email.svg' alt='email' width={30} height={30} />
            <p className='font-normal text-black underline decoration-[#F24E1E] decoration-solid'>
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
              <p className='font-normal text-black underline decoration-[#2D90E3] decoration-solid'>
                /in/thomasbarenghi
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
