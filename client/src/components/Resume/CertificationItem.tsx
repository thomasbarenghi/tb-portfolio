import { type ICertification } from '@/interfaces/certification.interface'
import { formatDate } from '@/utils/formatDateRange.utils'

interface Props {
  item: ICertification
  lang: LangType
}

const CertificationItem = ({ item, lang }: Props) => {
  const emitionDate = new Date(item.emitionDate)
  const date = formatDate(emitionDate, lang)
  return (
    <div className='flex flex-col gap-1'>
      <h3 className='text-base font-semibold'>{item.degree[lang]}</h3>
      <p className='text-sm'>
        {item.institution[lang]} | {date}
      </p>
    </div>
  )
}

export default CertificationItem
