import { urlFor } from '@/utils/urlFor.utils'

export const formatProjectUrl = (project: any) => {
  const items =
    Array.isArray(project) &&
    project?.map((item: any) => ({
      ...item,
      coverImage: urlFor(item.coverImage.asset._ref).url()
    }))

  return items
}
