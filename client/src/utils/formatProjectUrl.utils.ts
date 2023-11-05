import { type IProject, type IImage } from '@/interfaces/project.interface'
import { urlFor } from '@/utils/urlFor.utils'

const transformImage = (image: IImage | string): string => {
  if (!image || typeof image === 'string') return image
  return urlFor(image.asset._ref).url()
}

export const projectFormatter = (project: IProject): IProject => ({
  ...project,
  multimedia: {
    coverImage: transformImage(project.multimedia.coverImage),
    mainImage: transformImage(project.multimedia.mainImage),
    gallery: project.multimedia.gallery.map((image: IImage | string) =>
      transformImage(image)
    )
  }
})

export const formatProjectUrl = (project: IProject): IProject[] => {
  const items =
    Array.isArray(project) &&
    project.map((item: IProject) => projectFormatter(item))

  return items || []
}
