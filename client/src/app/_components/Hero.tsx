import Image from 'next/image'

const Hero = () => (
  <section className='relative flex h-[85vh] w-full flex-col items-center justify-center gap-10 lg:h-[65vh] '>
    <div className='padding-x-estilo2 z-10 flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:items-center '>
      <Image
        src='/image/thomas.png'
        alt='Thomas Barenghi'
        width={100}
        height={100}
        className='aspect-square rounded-full object-cover'
      />
      <h1 className='text-titulo2 font-light  text-white '>
        Hola! soy{' '}
        <span className='text-titulo2 font-semibold text-white'>
          Thomas Barenghi, <br />
        </span>
        desarrollador{' '}
        <span className='text-titulo2 font-georgiaBoldItalic font-semibold italic text-white'>
          Fullstack
        </span>{' '}
        y diseñador{' '}
        <span className='text-titulo2 font-georgiaBoldItalic font-semibold italic text-white'>
          UI/UX
        </span>
      </h1>
    </div>
    <div className='absolute left-0 top-0 z-[-1] h-full  w-full bg-black'>
      <Image
        src='/image/demo6.webp'
        alt='hero'
        layout='fill'
        objectFit='cover'
        priority
      />
    </div>
    <div className='absolute left-0 top-0 z-[0] h-full w-full bg-black opacity-70 '></div>
  </section>
)

export default Hero
