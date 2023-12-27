import { type IWorkExperience } from '@/interfaces/workExperience.interface'
import { MarkdownRenderer } from '..'
import { formatDateRange } from '@/utils/formatDateRange.utils'

interface Props {
  item: IWorkExperience
  lang: LangType
}

const WorkItem = ({ item, lang }: Props) => {
  const startDate = new Date(item.dates.startDate)
  const endDate = item.dates.isCurrent
    ? new Date()
    : new Date(item?.dates?.endDate)
  const date = formatDateRange(startDate, endDate, lang, item?.dates?.isCurrent)

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-base font-semibold'>{item.position[lang]}</h3>
        <p className='text-sm'>
          {item.company[lang]} | {date}
        </p>
      </div>
      <MarkdownRenderer markdown={item.description[lang]} />
    </div>
  )
}

export default WorkItem
