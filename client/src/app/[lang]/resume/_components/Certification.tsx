import { CertificationItem } from '@/components'
import { type Locale } from '@/i18n.config'
import { getCertifications } from '@/services/resume/getCertifications'

interface Props {
  lang: Locale
}

const Certification = async ({ lang }: Props) => {
  const { data } = await getCertifications()
  return (
    <div className='grid gap-6'>
      {data?.result?.map((item, index) => (
        <CertificationItem item={item} lang={lang} key={index} />
      ))}
    </div>
  )
}

export default Certification
