import { WorkItem } from '@/components'
import { type Locale } from '@/i18n.config'
import { getWorkExperiences } from '@/services/resume/getWorkExperiences'

interface Props {
  lang: Locale
}

const Work = async ({ lang }: Props) => {
  const { data } = await getWorkExperiences()
  return (
    <div className='grid gap-6'>
      {data?.result?.map((item, index) => (
        <WorkItem item={item} lang={lang} key={index} />
      ))}
    </div>
  )
}

export default Work
