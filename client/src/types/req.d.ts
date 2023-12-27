interface ApiResponse<T> {
  data: T | null
  error: {
    message: string
    code: number
  } | null
}

interface GetRequestParams {
  url: string
  cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached'
  validate?: number
  headers?: any
}
