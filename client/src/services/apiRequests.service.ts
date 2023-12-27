import { serverUrl } from '@/utils/constants/env.const'

export const getRequest = async <T>(
  params: GetRequestParams
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${serverUrl}${params.url}`, {
      next: { revalidate: params.validate ?? undefined },
      cache: params.cache ?? 'force-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...params.headers
      }
    })
    const responseData = await response.json()
    if (!response.ok) {
      const errorResponse: ApiResponse<T> = {
        data: null,
        error: {
          message: `Error en la solicitud GET a ${params.url}`,
          code: response.status
        }
      }
      return errorResponse
    }

    return { data: responseData, error: null }
  } catch (error: any) {
    return {
      data: null,
      error: { message: error.message, code: error.code || 500 }
    }
  }
}
