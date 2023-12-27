/* eslint-disable @typescript-eslint/indent */
import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { type IWorkExpResponse } from '@/interfaces/workExperience.interface'

export const getWorkExperiences = async (): Promise<
  ApiResponse<IWorkExpResponse>
> => {
  const res = await getRequest<IWorkExpResponse>({
    url: Endpoints.WORK_EXPERIENCES,
    cache: 'no-store'
  })
  if (res.error) throw new Error('Error al obtener los proyectos')
  return res
}
