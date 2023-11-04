import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ltxzs899',
  dataset: 'production',
  useCdn: true
})
