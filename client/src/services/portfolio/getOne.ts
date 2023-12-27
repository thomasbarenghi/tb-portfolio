import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { formatProjectUrl } from '@/utils/formatProjectUrl.utils'
import {
  type IProjectSingleResponse,
  type IProjectResponse,
  type IProject
} from '@/interfaces/project.interface'

export const getProject = async (
  id: string
): Promise<ApiResponse<IProjectSingleResponse>> => {
  const res = await getRequest<IProjectResponse>({
    url: Endpoints.INDIVIDUAL_PROJECT(id),
    cache: 'no-store'
  })

  if (res.error) throw new Error('Error al obtener los proyectos')

  if (res.data && res.data.result.length > 0) {
    const formattedResult = formatProjectUrl(res?.data?.result ?? [])
    res.data.result = formattedResult ?? []
  }

  const response: ApiResponse<IProjectSingleResponse> = {
    ...res,
    data: {
      ...res.data,
      result: res.data?.result?.[0] as IProject,
      query: res?.data?.query ?? ''
    }
  }

  return response
}
