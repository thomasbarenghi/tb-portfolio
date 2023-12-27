import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { formatProjectUrl } from '@/utils/formatProjectUrl.utils'
import { type IProjectResponse } from '@/interfaces/project.interface'

export const getProjects = async (): Promise<ApiResponse<IProjectResponse>> => {
  const res = await getRequest<IProjectResponse>({
    url: Endpoints.PROJECTS,
    cache: 'no-store'
  })

  if (res.error) throw new Error('Error al obtener los proyectos')
  const formattedResult = formatProjectUrl(res?.data?.result ?? [])

  if (res.data) {
    res.data.result = formattedResult
  }

  return res
}
