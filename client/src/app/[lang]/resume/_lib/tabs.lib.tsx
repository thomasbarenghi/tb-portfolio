import { getDictionary } from '@/utils/dictionaries.utils'
import Education from '../_components/Education'
import Work from '../_components/Work'
import Certification from '../_components/Certification'
import Technologies from '../_components/Tech'

interface Props {
  lang: LangType
}

export const tabsContentBuilder = async ({ lang }: Props) => {
  const { page } = await getDictionary(lang)
  return [
    {
      title: page.resume.tabs.experience,
      content: <Work lang={lang} />
    },
    {
      title: page.resume.tabs.education,
      content: <Education lang={lang} />
    },
    {
      title: page.resume.tabs.courses,
      content: <Certification lang={lang} />
    },
    {
      title: page.resume.tabs.skills,
      content: <Technologies />
    }
  ]
}
