import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { formatProjectUrl } from '@/utils/formatProjectUrl.utils'
import { type IProject } from '@/interfaces/project.interface'

interface Response {
  data: IProject[]
  error: boolean
}

export const getProjects = async (): Promise<Response> => {
  const { data, error } = await getRequest(
    Endpoints.PROJECTS,
    {},
    {
      cache: 'no-cache'
    }
  )
  if (error) throw new Error('Error al obtener los proyectos')
  console.log('data', data)
  return { data: formatProjectUrl(data.result), error }
}
