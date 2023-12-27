import { EducationItem } from '@/components'
import { type Locale } from '@/i18n.config'
import { getEducation } from '@/services/resume/getEducation'

interface Props {
  lang: Locale
}

const Education = async ({ lang }: Props) => {
  const { data } = await getEducation()
  return (
    <div className='grid gap-6'>
      {data?.result?.map((item, index) => (
        <EducationItem item={item} lang={lang} key={index} />
      ))}
    </div>
  )
}

export default Education
