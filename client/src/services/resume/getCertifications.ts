/* eslint-disable @typescript-eslint/indent */
import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { type ICertificationResponse } from '@/interfaces/certification.interface'

export const getCertifications = async (): Promise<
  ApiResponse<ICertificationResponse>
> => {
  const res = await getRequest<ICertificationResponse>({
    url: Endpoints.CERTIFICATIONS,
    cache: 'no-store'
  })
  if (res.error) throw new Error('Error al obtener los proyectos')
  return res
}
