import { type IProject, type IImage } from '@/interfaces/project.interface'
import { urlFor } from '@/utils/urlFor.utils'

const transformImage = (image: IImage | string): string => {
  if (!image || typeof image === 'string') return image

  return urlFor(image.asset._ref).url()
}

export const formatProjectUrl = (project: IProject): IProject[] => {
  const items =
    Array.isArray(project) &&
    project.map((item: IProject) => ({
      ...item,
      multimedia: {
        coverImage: transformImage(item.multimedia.coverImage),
        mainImage: transformImage(item.multimedia.mainImage),
        gallery: item.multimedia.gallery.map((image: IImage | string) =>
          transformImage(image)
        )
      }
    }))

  return items || []
}
