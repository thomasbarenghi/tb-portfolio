import { technologies } from '@/lib/technologies'
import Image from 'next/image'

const Technologies = () => (
  <div className='flex flex-row flex-wrap gap-3'>
    {technologies.map((tecnologia, index) => (
      <div key={'s' + index}>
        <div className='relative h-10 w-10'>
          <Image src={tecnologia.url} alt={tecnologia.title} layout='fill' />
        </div>
      </div>
    ))}
  </div>
)

export default Technologies
