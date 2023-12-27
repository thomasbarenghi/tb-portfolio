import { type IImage } from '@/interfaces/project.interface'
import { type IReview } from '@/interfaces/review.interface'
import { urlFor } from '@/utils/urlFor.utils'

const transformImage = (image: IImage | string): string => {
  if (!image || typeof image === 'string') return image
  return urlFor(image.asset._ref).url()
}

export const reviewFormatter = (project: IReview): IReview => ({
  ...project,
  authorImage: transformImage(project.authorImage)
})

export const formatReviewUrl = (project: IReview[]): IReview[] => {
  const items =
    Array.isArray(project) && project.map((item) => reviewFormatter(item))

  return items || []
}
