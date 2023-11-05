import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { formatProjectUrl } from '@/utils/formatProjectUrl.utils'
import { type IProject } from '@/interfaces/project.interface'

interface Response {
  data: IProject[]
  error: boolean
}

export const getProjects = async (): Promise<Response> => {
  const { data, error } = await getRequest(Endpoints.PROJECTS, {})
  if (error) throw new Error('Error al obtener los proyectos')
  return { data: formatProjectUrl(data.result), error }
}
