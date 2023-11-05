'use client'
import ReactMarkdown from 'react-markdown'

interface Props {
  markdown: string
}

const MarkdownRenderer = ({ markdown }: Props) => (
  <div className='flex flex-col gap-4'>
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1 className='text-title1 font-semibold' {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className='text-title2  font-medium leading-[140%]' {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className='text-title3  font-medium leading-[140%]' {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className='text-base leading-[155%]' {...props} />
        ),
        br: ({ node, ...props }) => (
          <>
            <br
              className='text-base  font-semibold leading-[155%]'
              {...props}
            />
            <br
              className='text-base  font-semibold leading-[155%]'
              {...props}
            />
          </>
        ),
        strong: ({ node, ...props }) => (
          <strong className='font-semibold' {...props} />
        )
      }}
    >
      {markdown}
    </ReactMarkdown>
  </div>
)

export default MarkdownRenderer
