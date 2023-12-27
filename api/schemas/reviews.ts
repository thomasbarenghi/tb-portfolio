import {defineType, defineField, ObjectRule} from 'sanity'
import {CustomMarkdownInput} from '../components/MarkdownInputCustomPreview'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

const reviews = defineType({
  title: 'Reviews',
  name: 'reviews',
  type: 'document',
  fields: [
    defineField({
      title: 'Sanity Title',
      name: 'sanityTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'sanityTitle',
        isUnique: isUniqueAcrossAllDocuments,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Author Image',
      name: 'authorImage',
      type: 'image',
      validation: (Rule: ObjectRule) => Rule.required(),
    }),
    defineField({
      title: 'Position',
      validation: (Rule: ObjectRule) => Rule.required(),
      name: 'position',
      type: 'object',
      fields: [
        defineField({
          title: 'Position ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Position EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          title: 'Content ES',
          name: 'es',
          type: 'markdown',
          components: {input: CustomMarkdownInput},
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Content EN',
          name: 'en',
          type: 'markdown',
          components: {input: CustomMarkdownInput},
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Emition Date',
      name: 'emitionDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default reviews
