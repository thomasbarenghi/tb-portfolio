import Image from 'next/image'
import { values, type IValue } from '../_lib/values'

const Values = () => (
  <section className='padding-x-estilo2 flex w-full flex-col items-start justify-start gap-2 bg-white py-24 text-start 2xl:container'>
    <div className=' flex flex-col gap-10'>
      <h1 className='w-full text-start text-4xl font-light'>
        ¿Cuales son{' '}
        <span className=' text-4xl font-semibold '>mis valores?</span>
      </h1>
      <div className='grid w-full grid-cols-1 gap-10 lg:grid-cols-2'>
        {values.map((item: IValue, index) => (
          <div
            key={'v' + index}
            className='flex flex-col items-start gap-2 rounded-3xl text-start'
          >
            <div className='flex flex-row items-center gap-2'>
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <h3 className='text-titulo3 font-semibold'>{item.title}</h3>
            </div>
            <p className='text-base font-light text-black'>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Values
