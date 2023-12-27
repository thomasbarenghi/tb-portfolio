/* eslint-disable @typescript-eslint/indent */
import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { type IEducationResponse } from '@/interfaces/education.interface'

export const getEducation = async (): Promise<
  ApiResponse<IEducationResponse>
> => {
  const res = await getRequest<IEducationResponse>({
    url: Endpoints.EDUCATIONS,
    cache: 'no-store'
  })
  if (res.error) throw new Error('Error al obtener los proyectos')
  return res
}
