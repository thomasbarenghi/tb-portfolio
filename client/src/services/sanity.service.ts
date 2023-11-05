import { environment } from '@/utils/constants/env.const'
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ltxzs899',
  dataset: environment,
  useCdn: true
})
