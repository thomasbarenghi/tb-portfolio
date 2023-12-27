import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { type IReviewResponse } from '@/interfaces/review.interface'
import { formatReviewUrl } from '@/utils/constants/formatReviewUrl.utils'

export const getReviews = async (): Promise<ApiResponse<IReviewResponse>> => {
  const res = await getRequest<IReviewResponse>({
    url: Endpoints.REVIEWS,
    cache: 'no-store'
  })

  if (res.error) throw new Error('Error al obtener los proyectos')
  const formattedResult = formatReviewUrl(res?.data?.result ?? [])

  if (res.data) {
    res.data.result = formattedResult
  }

  return res
}
