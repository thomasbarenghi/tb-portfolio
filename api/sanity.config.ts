import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {markdownSchema} from 'sanity-plugin-markdown/next'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'black-trout',

  projectId: 'ltxzs899',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    // documentInternationalization({
    //   supportedLanguages: [
    //     {id: 'es', title: 'Spanish'},
    //     {id: 'en', title: 'English'},
    //   ],
    //   schemaTypes: ['portfolio'],
    // }),
    markdownSchema(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
