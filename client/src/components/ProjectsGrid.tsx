import { ProjectCard } from '@/components'

interface Props {
  items: any
}

const PortfolioGrid = ({ items }: Props) => (
  <div className='grid h-auto w-full grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 '>
    {Array.isArray(items) &&
      items?.map((item: any) => <ProjectCard item={item} key={item._id} />)}
  </div>
)

export default PortfolioGrid
