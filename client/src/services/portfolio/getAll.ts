import Endpoints from '@/utils/constants/endpoints.const'
import { getRequest } from '../apiRequests.service'
import { formatProjectUrl } from '@/utils/formatProjectUrl.utils'

export const getProjects = async () => {
  const { data, error } = await getRequest(Endpoints.PROJECTS)
  if (error) throw new Error('Error al obtener los proyectos')
  return { data: formatProjectUrl(data.result), error }
}
