import {
  PortableText,
  type PortableTextReactComponents
} from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/utils/urlFor.utils'

interface Props {
  content: any
}

const SanityRenderer = ({ content }: Props) => {
  const SampleImageComponent = ({
    value,
    isInline
  }: {
    value: any
    isInline: any
  }) => (
    <div className='relative aspect-[4/3] h-full w-full'>
      <Image
        src={urlFor(value.asset._ref).image(value).url()}
        alt={value.alt || ' '}
        loading='lazy'
        fill={true}
        style={{
          display: isInline ? 'inline-block' : 'block'
        }}
        className='aspect-[4/3] w-full rounded-3xl object-cover '
      />
    </div>
  )

  const components = {
    types: {
      image: SampleImageComponent
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className='text-title1 w-full text-start font-semibold'>
          {children}
        </h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className='text-title2 w-full text-start font-semibold'>
          {children}
        </h2>
      ),
      h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className='text-title3 w-full text-start font-semibold'>
          {children}
        </h3>
      )
    }
  }

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <PortableText
        value={content}
        components={components as Partial<PortableTextReactComponents>}
      />
    </div>
  )
}

export default SanityRenderer
