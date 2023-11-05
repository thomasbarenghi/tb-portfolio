import { ProjectCard } from '@/components'
import { type IProject } from '@/interfaces/project.interface'

interface Props {
  items: IProject[]
  lang: LangType
}

const PortfolioGrid = ({ items, lang }: Props) => (
  <div className='grid h-auto w-full grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 '>
    {Array.isArray(items) &&
      items?.map((item) => (
        <ProjectCard item={item} key={item._id} lang={lang} />
      ))}
  </div>
)

export default PortfolioGrid
