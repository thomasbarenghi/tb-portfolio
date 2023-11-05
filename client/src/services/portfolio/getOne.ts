import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { projectFormatter } from '@/utils/formatProjectUrl.utils'
import { type IProject } from '@/interfaces/project.interface'

interface Response {
  data: IProject
  error: boolean
}

export const getProject = async (id: string): Promise<Response> => {
  const { data, error } = await getRequest(Endpoints.INDIVIDUAL_PROJECT(id), {})
  if (error) throw new Error('Error al obtener los proyectos')
  return { data: projectFormatter(data.result[0]), error }
}
