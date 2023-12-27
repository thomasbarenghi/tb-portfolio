import { formatDateRange } from '@/utils/formatDateRange.utils'
import { MarkdownRenderer } from '..'
import { type IEducation } from '@/interfaces/education.interface'

interface Props {
  item: IEducation
  lang: LangType
}

const EducationItem = ({ item, lang }: Props) => {
  const startDate = new Date(item.dates.startDate)
  const endDate = item.dates.isCurrent
    ? new Date()
    : new Date(item?.dates?.endDate)
  const date = formatDateRange(startDate, endDate, lang, item?.dates?.isCurrent)

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-base font-semibold'>{item.degree[lang]}</h3>
        <p className='text-sm'>
          {item.institution[lang]} | {date}
        </p>
      </div>
      <MarkdownRenderer markdown={item.description[lang]} />
    </div>
  )
}

export default EducationItem
